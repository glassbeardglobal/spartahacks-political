/**
 * App ID for the skill
 */
var APP_ID = undefined;//replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

// Use the reqeusts module for API interfacing
//var request = require('request');
var http = require('http');
var ntykey = 'c380cb7ca5451be5de1601e4c896cccd:17:74553905'

/**
 * EchoFrames is a child of AlexaSkill
 */
var EchoFrames = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
EchoFrames.prototype = Object.create(AlexaSkill.prototype);
EchoFrames.prototype.constructor = EchoFrames;

/**
 * Overriden to show that a subclass can override this function to initialize session state.
 */
EchoFrames.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);

    // Any session init logic would go here.
};

/**
 * If the user launches without specifying an intent, route to the correct function.
 */
EchoFrames.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("EchoFrames onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);

    //handleTellMeAJokeIntent(session, response);
    handleStartIntent(session, response);
};

/**
 * Overriden to show that a subclass can override this function to teardown session state.
 */

 EchoFrames.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    //Any session cleanup logic would go here.
};


EchoFrames.prototype.intentHandlers = {
    "StartIntent": function (intent, session, response) {
        handleStartIntent(session, response);
    },

    "TopicLookupIntent": function (intent, session, response) {
        handleTopicLookupIntent(intent, session, response);
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
    var repromptText = "You can ask for any topic";

    //Check if session variables are already initialized.
    speechText = "Ask for a topic";
    session.attributes.stage = 1;

    var speechOutput = {
        speech: speechText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.askWithCard(speechOutput, repromptOutput, "Echo Frame", speechText);
}

function handleTopicLookupIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";

    var topic = intent.slots.Topic.value;

    speechText = "Searching for " + topic;
    repromptText = speechText

    var topic_uri = encodeURIComponent(topic)

    var url_path = '/svc/search/v2/articlesearch.json?q=' + topic_uri + '&api-key=c380cb7ca5451be5de1601e4c896cccd:17:74553905'

    var str = '';

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
        result = JSON.parse(str);
        result = result["response"]["docs"][0]["headline"]["main"];
        speechText += "<break time=\"1s\" /> Most recent result <break time=\"0.5s\" /> " + result;

        var speechOutput = {
            speech: '<speak>' + speechText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        var repromptOutput = {
            speech: '<speak>' + repromptText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        response_g.askWithCard(speechOutput, repromptOutput, "Echo Frame", speechText);
      });
    }

    http.request(options, callback).end();
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of EchoFrames
    var skill = new EchoFrames();
    skill.execute(event, context);
};
