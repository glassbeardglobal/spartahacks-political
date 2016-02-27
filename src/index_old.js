/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This sample shows how to create a Lambda function for handling Alexa Skill requests that:
 *
 * - Session State: Handles a multi-turn dialog model.
 * - Custom slot type: demonstrates using custom slot types to handle a finite set of known values
 * - SSML: Using SSML tags to control how Alexa renders the text-to-speech.
 *
 * Examples:
 * Dialog model:
 *  User: "Alexa, ask Wise Guy to tell me a knock knock joke."
 *  Alexa: "Knock knock"
 *  User: "Who's there?"
 *  Alexa: "<phrase>"
 *  User: "<phrase> who"
 *  Alexa: "<Punchline>"
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined;//replace with 'amzn1.echo-sdk-ams.app.[your-unique-value-here]';

/**
 * Array containing knock knock jokes.
 */

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

// Use the reqeusts module for API interfacing
var request = require('request');
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
    handleTitleLookupIntent(session, response);
};

/**
 * Overriden to show that a subclass can override this function to teardown session state.
 */

 EchoFrames.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    //Any session cleanup logic would go here.
};

 /*
WiseGuySkill.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);

    //Any session cleanup logic would go here.
};
*/

EchoFrames.prototype.intentHandlers = {
    "TitleLookupIntent": function (intent, session, response) {
        handleTitleLookupIntent(session, response);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
}

function handleTitleLookupIntent(session, response) {
    var speechText = "";

    //Reprompt speech will be triggered if the user doesn't respond.
    var repromptText = "You can ask for any topic";

    //Check if session variables are already initialized.
    if (session.attributes.stage) {

        //Ensure the dialogue is on the correct stage.
        if (session.attributes.stage === 0) {
            //The joke is already initialized, this function has no more work.
            speechText = "Ask for a topic";
        } else {
            //The user attempted to jump to the intent of another stage.
            session.attributes.stage = 0;
            speechText = "That's not how knock knock jokes work! "
                + "knock knock";
        }
    } else {
        speechText = "Ask for a topic";
    }

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

/*
WiseGuySkill.prototype.intentHandlers = {
    "TellMeAJokeIntent": function (intent, session, response) {
        handleTellMeAJokeIntent(session, response);
    },

    "WhosThereIntent": function (intent, session, response) {
        handleWhosThereIntent(session, response);
    },

    "SetupNameWhoIntent": function (intent, session, response) {
        handleSetupNameWhoIntent(session, response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        var speechText = "";

        switch (session.attributes.stage) {
            case 0:
                speechText = "Knock knock jokes are a fun call and response type of joke. " +
                    "To start the joke, just ask by saying tell me a joke, or you can say exit.";
                break;
            case 1:
                speechText = "You can ask, who's there, or you can say exit.";
                break;
            case 2:
                speechText = "You can ask, who, or you can say exit.";
                break;
            default:
                speechText = "Knock knock jokes are a fun call and response type of joke. " +
                    "To start the joke, just ask by saying tell me a joke, or you can say exit.";
        }

        var speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        var repromptOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        // For the repromptText, play the speechOutput again
        response.ask(speechOutput, repromptOutput);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

*/

/**
 * Selects a joke randomly and starts it off by saying "Knock knock".
 */

 /*
function handleTellMeAJokeIntent(session, response) {
    var speechText = "";

    //Reprompt speech will be triggered if the user doesn't respond.
    var repromptText = "You can ask, who's there";

    //Check if session variables are already initialized.
    if (session.attributes.stage) {

        //Ensure the dialogue is on the correct stage.
        if (session.attributes.stage === 0) {
            //The joke is already initialized, this function has no more work.
            speechText = "bhangra my surti!";
        } else {
            //The user attempted to jump to the intent of another stage.
            session.attributes.stage = 0;
            speechText = "That's not how knock knock jokes work! "
                + "knock knock";
        }
    } else {
        //Select a random joke and store it in the session variables.
        var jokeID = Math.floor(Math.random() * JOKE_LIST.length);

        //The stage variable tracks the phase of the dialogue. 
        //When this function completes, it will be on stage 1.
        session.attributes.stage = 1;
        session.attributes.setup = JOKE_LIST[jokeID].setup;
        session.attributes.speechPunchline = JOKE_LIST[jokeID].speechPunchline;
        session.attributes.cardPunchline = JOKE_LIST[jokeID].cardPunchline;

        speechText = "Bhangra my Surti!";
    }

    var speechOutput = {
        speech: speechText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    var repromptOutput = {
        speech: repromptText,
        type: AlexaSkill.speechOutputType.PLAIN_TEXT
    };
    response.askWithCard(speechOutput, repromptOutput, "Wise Guy", speechText);
}
*/

/**
 * Responds to the user saying "Who's there".
 */
function handleWhosThereIntent(session, response) {
    var speechText = "";
    var repromptText = "";

    if (session.attributes.stage) {
        if (session.attributes.stage === 1) {
            //Retrieve the joke's setup text.
            speechText = session.attributes.setup;

            //Advance the stage of the dialogue.
            session.attributes.stage = 2;

            repromptText = "You can ask, " + speechText + " who?";
        } else {
            session.attributes.stage = 1;
            speechText = "That's not how knock knock jokes work! <break time=\"0.3s\" /> "
                + "knock knock";

            repromptText = "You can ask, who's there."
        }
    } else {

        //If the session attributes are not found, the joke must restart. 
        speechText = "Sorry, I couldn't correctly retrieve the joke. "
            + "You can say, tell me a joke";

        repromptText = "You can say, tell me a joke";
    }

    var speechOutput = {
        speech: '<speak>' + speechText + '</speak>',
        type: AlexaSkill.speechOutputType.SSML
    };
    var repromptOutput = {
        speech: '<speak>' + repromptText + '</speak>',
        type: AlexaSkill.speechOutputType.SSML
    };
    response.ask(speechOutput, repromptOutput);
}

/**
 * Delivers the punchline of the joke after the user responds to the setup.
 */
function handleSetupNameWhoIntent(session, response) {
    var speechText = "",
        repromptText = "",
        speechOutput,
        repromptOutput,
        cardOutput;

    if (session.attributes.stage) {
        if (session.attributes.stage === 2) {
            speechText = session.attributes.speechPunchline;
            cardOutput = session.attributes.cardPunchline;
            speechOutput = {
                speech: '<speak>' + speechText + '</speak>',
                type: AlexaSkill.speechOutputType.SSML
            };
            //If the joke completes successfully, this function uses a "tell" response.
            response.tellWithCard(speechOutput, "Wise Guy", cardOutput);
        } else {

            session.attributes.stage = 1;
            speechText = "That's not how knock knock jokes work! <break time=\"0.3s\" /> "
                + "Knock knock!";
            cardOutput = "That's not how knock knock jokes work! "
                + "Knock knock!";

            repromptText = "You can ask who's there.";

            speechOutput = {
                speech: speechText,
                type: AlexaSkill.speechOutputType.SSML
            };
            repromptOutput = {
                speech: repromptText,
                type: AlexaSkill.speechOutputType.PLAIN_TEXT
            };
            //If the joke has to be restarted, this function uses an "ask" response.
            response.askWithCard(speechOutput, repromptOutput, "Wise Guy", cardOutput);
        }
    } else {
        speechText = "Sorry, I couldn't correctly retrieve the joke. "
            + "You can say, tell me a joke";

        repromptText = "You can say, tell me a joke";

        speechOutput = {
            speech: speechText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        repromptOutput = {
            speech: repromptText,
            type: AlexaSkill.speechOutputType.PLAIN_TEXT
        };
        response.askWithCard(speechOutput, repromptOutput, "Wise Guy", speechOutput);
    }
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the WiseGuy Skill.
    var skill = new WiseGuySkill();
    skill.execute(event, context);
};
