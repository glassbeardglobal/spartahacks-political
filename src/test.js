var request = require('request');
var http = require('http');

var topic_uri = encodeURIComponent('computer malware')

var url_path = '/svc/search/v2/articlesearch.json?q=' + topic_uri + '&api-key=c380cb7ca5451be5de1601e4c896cccd:17:74553905'

var str = '';
var speechText = ""

var options = {
  host: 'api.nytimes.com',
  path: '/svc/search/v2/articlesearch.json?q='
        + topic_uri
        + '&api-key=c380cb7ca5451be5de1601e4c896cccd:17:74553905'
};

callback = function(response) {
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });
  //the whole response has been recieved, so we just print it out here
  response.on('end', function () {
    //console.log(str);
	result = JSON.parse(str);
	result = result["response"]["docs"][0]["headline"]["main"];
	speechText += " " + result;

	console.log(speechText);
  });
}

http.request(options, callback).end();

console.log(speechText);
//context.succeed();
/*
result = JSON.parse(str);
result = result["response"]["docs"][0]["headline"];
speechText += " " + result;

console.log(speechText);*/