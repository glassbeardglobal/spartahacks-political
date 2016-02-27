/**
 * App ID for the skill
 */
var APP_ID = undefined;

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

// Use the reqeusts module for API interfacing
//var request = require('request');
var http = require('http');
var ntykey = 'c380cb7ca5451be5de1601e4c896cccd:17:74553905'
var apikey = '7449f87051cf64139083805870b60575:13:74553905'

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

var num_hash = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
    'ten': '10'
}

var lastid = '';

/**
 * Politcal Echo is a child of AlexaSkill
 */
var PoliticalEcho = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
PoliticalEcho.prototype = Object.create(AlexaSkill.prototype);
PoliticalEcho.prototype.constructor = PoliticalEcho;

/**
 * Overriden to show that a subclass can override this function to initialize session state.
 */
PoliticalEcho.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // Any session init logic would go here.
};

/**
 * If the user launches without specifying an intent, route to the correct function.
 */
PoliticalEcho.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("PolitcalEcho onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleStartIntent(session, response);
};

/**
 * Overriden to show that a subclass can override this function to teardown session state.
 */

PoliticalEcho.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
};


PoliticalEcho.prototype.intentHandlers = {
    "StartIntent": function (intent, session, response) {
        handleStartIntent(session, response);
    },

    "SenatorLookupIntent": function (intent, session, response) {
        handleSenatorLookupIntent(intent, session, response);
    },

    "RepresentativeLookupIntent": function (intent, session, response) {
        handleRepresentativeLookupIntent(intent, session, response);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "You are gay";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
}

function handleStartIntent(session, response) {
    var speechText = "";

    //Reprompt speech will be triggered if the user doesn't respond.
    var repromptText = "You can ask about the United States Congress.";

    //Check if session variables are already initialized.
    speechText = "Learn about U.S. politics";
    session.attributes.stage = 1;

    var speechOutput = {
        speech: speechText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
}

function handleSenatorLookupIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";

    var state = intent.slots.State.value.toLowerCase();

    if (state in states_hash) {
        speechText = "Senators for " + state + " are";
        repromptText = speechText

        var str = '';

        var options = {
          host: 'api.nytimes.com',
          path: '/svc/politics/v3/us/legislative/congress/members/senate/'
            + states_hash[state]
            + '/1/current.json?api-key='
            + apikey
        };

        callback = function(response) {
          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
          });

          //the whole response has been recieved, so we just print it out here
          response.on('end', function () {
            result = JSON.parse(str);
            var sen1 = result["results"][0]["name"]
            var sen2 = result["results"][1]["name"]

            speechText += "<break time=\"0.4s\" /> " + sen1 + ",<break time=\"0.3s\" /> and " + sen2;

            var speechOutput = {
                speech: '<speak>' + speechText + '</speak>',
                type: AlexaSkill.speechOutputType.SSML
            };
            var repromptOutput = {
                speech: '<speak>' + repromptText + '</speak>',
                type: AlexaSkill.speechOutputType.SSML
            };
            response_g.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
          });
        }

        http.request(options, callback).end();

    } else {
        speechText = "Sorry, I couldn't find " + state;
        repromptText = speechText;
        var speechOutput = {
            speech: '<speak>' + speechText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        var repromptOutput = {
            speech: '<speak>' + repromptText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        response_g.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
    }
}

function handleRepresentativeLookupIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";

    var state = intent.slots.State.value.toLowerCase();
    var district = intent.slots.District.value.toLowerCase();

    //console.log("District debug: " + district);

    console.log(state in states_hash);
    //console.log(district in num_hash);

    if (state in states_hash/* && district in num_hash*/) {
        speechText = "The Representative for " + state + " in district " + district + " is ";
        repromptText = ""

        var str = '';

        var options = {
          host: 'api.nytimes.com',
          path: '/svc/politics/v3/us/legislative/congress/members/house/'
            + states_hash[state]
            + '/'
            + district
            + '/current.json?api-key='
            + apikey
        };

        callback = function(response) {
          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
          });

          //the whole response has been recieved, so we just print it out here
          response.on('end', function () {
            result = JSON.parse(str);
            var rep = result["results"][0]["name"]

            speechText += "<break time=\"0.4s\" /> " + rep;

            var speechOutput = {
                speech: '<speak>' + speechText + '</speak>',
                type: AlexaSkill.speechOutputType.SSML
            };
            var repromptOutput = {
                speech: '<speak>' + repromptText + '</speak>',
                type: AlexaSkill.speechOutputType.SSML
            };
            response_g.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
          });
        }

        http.request(options, callback).end();

    } else {
        speechText = "Sorry, I couldn't find " + state;
        repromptText = speechText;
        var speechOutput = {
            speech: '<speak>' + speechText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        var repromptOutput = {
            speech: '<speak>' + repromptText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        response_g.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
    }
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of PoliticalEcho
    var skill = new PoliticalEcho();
    skill.execute(event, context);
};
