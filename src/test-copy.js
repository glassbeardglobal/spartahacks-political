var http = require('http');


var apikey = '7449f87051cf64139083805870b60575:13:74553905'

// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/new[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/senate/il/1/current.json?api-key=7449f87051cf64139083805870b60575:13:74553905
// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/{member-id}/bills/{type}[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/A000360.json?api-key=7449f87051cf64139083805870b60575:13:74553905

var str = '';
var speechText = ""

var options = {
  host: 'api.nytimes.com',
  path: '/svc/politics/v3/us/legislative/congress/members/A000360/bills/introduced.json?api-key='
    + apikey
};

callback = function(response) {
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });
  //the whole response has been recieved, so we just print it out here
  response.on('end', function() {
    //console.log(str);
    result = JSON.parse(str);
    console.log(result["results"][0]);
  });
}

http.request(options, callback).end();

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

//console.log(states_reverse["IL"]);