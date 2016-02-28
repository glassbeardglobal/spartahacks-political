var https = require('https');

var apikey = '7449f87051cf64139083805870b60575:13:74553905'
var googlekey = 'AIzaSyDcIki4Wj1bHoZhb0nhkxnccfQg33JfBto'


// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/new[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/senate/il/1/current.json?api-key=7449f87051cf64139083805870b60575:13:74553905
// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/bills/{type}[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/A000360.json?api-key=7449f87051cf64139083805870b60575:13:74553905
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/M000508/votes/T000266/113/house.json?api-key=7449f87051cf64139083805870b60575:13:74553905
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/S000033/votes/C001098/113/senate.json?api-key=7449f87051cf64139083805870b60575:13:74553905

String.prototype.hexEncode = function(){
    var hex, i;

    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result
}

var speechText = "No elections near this time!", repromptText = "";
var state = 'illinois';

var states_hash =
  {
    'alabama': 'AL',
    'alaska': 'AK',
    'arizona': 'AZ',
    'arkansas': 'AR',
    'california': 'CA',
    'colorado': 'CO',
    'connecticut': 'CT',
    'delaware': 'DE',
    'district Of columbia': 'DC',
    'florida': 'FL',
    'georgia': 'GA',
    'guam': 'GU',
    'hawaii': 'HI',
    'idaho': 'ID',
    'illinois': 'IL',
    'indiana': 'IN',
    'iowa': 'IA',
    'kansas': 'KS',
    'kentucky': 'KY',
    'louisiana': 'LA',
    'maine': 'ME',
    'maryland': 'MD',
    'massachusetts': 'MA',
    'michigan': 'MI',
    'minnesota': 'MN',
    'mississippi': 'MS',
    'missouri': 'MO',
    'montana': 'MT',
    'nebraska': 'NE',
    'nevada': 'NV',
    'new hampshire': 'NH',
    'new jersey': 'NJ',
    'new mexico': 'NM',
    'new york': 'NY',
    'north carolina': 'NC',
    'north dakota': 'ND',
    'ohio': 'OH',
    'oklahoma': 'OK',
    'oregon': 'OR',
    'pennsylvania': 'PA',
    'puerto rico': 'PR',
    'rhode island': 'RI',
    'south carolina': 'SC',
    'south dakota': 'SD',
    'tennessee': 'TN',
    'texas': 'TX',
    'utah': 'UT',
    'vermont': 'VT',
    'virgin Islands': 'VI',
    'virginia': 'VA',
    'washington': 'WA',
    'west virginia': 'WV',
    'wisconsin': 'WI',
    'wyoming': 'WY'
  }

var states_reverse = {}
for (j in states_hash){
  if (!Object.prototype.hasOwnProperty.call(states_hash, j)) continue
  states_reverse[states_hash[j]] = j
}

var str = '';

var options = {
    host: 'www.googleapis.com',
    path: '/civicinfo/v2/elections?key='
        + googlekey
};

console.log("URL FOR TESTING: " + options['host'] + options['path']);
callback = function(response) {
      //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
        str += chunk;
    });

      //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
        result = JSON.parse(str);
        //console.log(result);
        var elections = result["elections"]
        for (var i = 0; i <= elections.length; i++) {
            if (i == elections.length)
                return;
            var x = elections[i]["ocdDivisionId"].slice(-2);
            if (x.localeCompare(states_hash[state].toLowerCase()) === 0) {
                console.log("Election Found " + x);
                return;
            }
        }
    });
}

console.log(states_hash[state].toLowerCase().localeCompare("il"));
https.request(options, callback).end();