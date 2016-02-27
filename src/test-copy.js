var http = require('http');


var apikey = '7449f87051cf64139083805870b60575:13:74553905'

// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/new[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/senate/il/1/current.json?api-key=7449f87051cf64139083805870b60575:13:74553905

var str = '';
var speechText = ""

var options = {
  host: 'api.nytimes.com',
  path: '/svc/politics/v3/us/legislative/congress/members/house/il/1/current.json?api-key='
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
    console.log(result["results"][0]["id"]);
    console.log(result["results"][0]["name"]);
  });
}

http.request(options, callback).end();