var http = require('http');


var apikey = '7449f87051cf64139083805870b60575:13:74553905';
var rep_hash = {
  'Robert Aderholt': 'A000055',
  'Justin Amash': 'A000367',
  'Mark Amodei': 'A000369',
  'Alma Adams': 'A000370',
  'Spencer Bachus': 'B000013',
  'Joe Barton': 'B000213',
  'Xavier Becerra': 'B000287',
  'Sanford Bishop Jr.': 'B000490',
  'Earl Blumenauer': 'B000574',
  'John Boehner': 'B000589',
  'Kevin Brady': 'B000755',
  'Corrine Brown': 'B000911',
  'Robert Brady': 'B001227',
  'Timothy Bishop': 'B001242',
  'Marsha Blackburn': 'B001243',
  'Madeleine Bordallo': 'B001245',
  'Michael Burgess': 'B001248',
  'Rob Bishop': 'B001250',
  'G. Butterfield': 'B001251',
  'John Barrow': 'B001252',
  'Charles Boustany Jr.': 'B001255',
  'Michele Bachmann': 'B001256',
  'Gus Bilirakis': 'B001257',
  'Bruce Braley': 'B001259',
  'Vern Buchanan': 'B001260',
  'Paul Broun': 'B001262',
  'Lou Barletta': 'B001269',
  'Karen Bass': 'B001270',
  'Dan Benishek': 'B001271',
  'Diane Black': 'B001273',
  'Mo Brooks': 'B001274',
  'Larry Bucshon': 'B001275',
  'Suzanne Bonamici': 'B001278',
  'Ron Barber': 'B001279',
  'Kerry Bentivolio': 'B001280',
  'Joyce Beatty': 'B001281',
  'Andy Barr': 'B001282',
  'Jim Bridenstine': 'B001283',
  'Susan Brooks': 'B001284',
  'Julia Brownley': 'B001285',
  'Cheri Bustos': 'B001286',
  'Ami Bera': 'B001287',
  'Bradley Byrne': 'B001289',
  'David Brat': 'B001290',
  'Ken Calvert': 'C000059',
  'Dave Camp': 'C000071',
  'Steven Chabot': 'C000266',
  'Donna Christensen': 'C000380',
  'James Clyburn': 'C000537',
  'Howard Coble': 'C000556',
  'John Conyers Jr.': 'C000714',
  'Jim Cooper': 'C000754',
  'Elijah Cummings': 'C000984',
  'Lois Capps': 'C001036',
  'Michael Capuano': 'C001037',
  'Joseph Crowley': 'C001038',
  'Ander Crenshaw': 'C001045',
  'Shelley Capito': 'C001047',
  'John Culberson': 'C001048',
  'William Clay': 'C001049',
  'John Carter': 'C001051',
  'Tom Cole': 'C001053',
  'Jim Costa': 'C001059',
  'Emanuel Cleaver II': 'C001061',
  'K. Conaway': 'C001062',
  'Henry Cuellar': 'C001063',
  'John Campbell': 'C001064',
  'Kathy Castor': 'C001066',
  'Yvette Clarke': 'C001067',
  'Steve Cohen': 'C001068',
  'Joe Courtney': 'C001069',
  'André Carson': 'C001072',
  'Bill Cassidy': 'C001075',
  'Jason Chaffetz': 'C001076',
  'Mike Coffman': 'C001077',
  'Gerald Connolly': 'C001078',
  'Judy Chu': 'C001080',
  'John Carney': 'C001083',
  'David Cicilline': 'C001084',
  'Rick Crawford': 'C001087',
  'Matt Cartwright': 'C001090',
  'Joaquin Castro': 'C001091',
  'Chris Collins': 'C001092',
  'Doug Collins': 'C001093',
  'Paul Cook': 'C001094',
  'Tom Cotton': 'C001095',
  'Kevin Cramer': 'C001096',
  'Tony Cardenas': 'C001097',
  'Katherine Clark': 'C001101',
  'Curt Clawson': 'C001102',
  'Danny Davis': 'D000096',
  'Peter DeFazio': 'D000191',
  'Diana DeGette': 'D000197',
  'Rosa DeLauro': 'D000216',
  'John Dingell': 'D000355',
  'Lloyd Doggett': 'D000399',
  'Mike Doyle': 'D000482',
  'John Duncan Jr.': 'D000533',
  'Susan Davis': 'D000598',
  'Mario Diaz-Balart': 'D000600',
  'Charlie Dent': 'D000604',
  'Ted Deutch': 'D000610',
  'Jeffrey Denham': 'D000612',
  'Sean Duffy': 'D000614',
  'Jeffrey Duncan': 'D000615',
  'Scott DesJarlais': 'D000616',
  'Suzan DelBene': 'D000617',
  'Steve Daines': 'D000618',
  'Rodney Davis': 'D000619',
  'John Delaney': 'D000620',
  'Ron DeSantis': 'D000621',
  'Tammy Duckworth': 'D000622',
  'Eliot Engel': 'E000179',
  'Anna Eshoo': 'E000215',
  'Keith Ellison': 'E000288',
  'Donna Edwards': 'E000290',
  'Renee Ellmers': 'E000291',
  'Bill Enyart': 'E000292',
  'Elizabeth Esty': 'E000293',
  'Eni Faleomavaega': 'F000010',
  'Sam Farr': 'F000030',
  'Chaka Fattah': 'F000043',
  'Rodney Frelinghuysen': 'F000372',
  'J. Forbes': 'F000445',
  'Trent Franks': 'F000448',
  'Jeff Fortenberry': 'F000449',
  'Virginia Foxx': 'F000450',
  'Michael Fitzpatrick': 'F000451',
  'Bill Foster': 'F000454',
  'Marcia Fudge': 'F000455',
  'John Fleming': 'F000456',
  'Stephen Fincher': 'F000458',
  'Chuck Fleischmann': 'F000459',
  'Blake Farenthold': 'F000460',
  'Bill Flores': 'F000461',
  'Lois Frankel': 'F000462',
  'Robert Goodlatte': 'G000289',
  'Kay Granger': 'G000377',
  'Gene Green': 'G000410',
  'Luis Gutierrez': 'G000535',
  'Sam Graves': 'G000546',
  'Scott Garrett': 'G000548',
  'Jim Gerlach': 'G000549',
  'Phil Gingrey': 'G000550',
  'Raúl Grijalva': 'G000551',
  'Louie Gohmert': 'G000552',
  'Al Green': 'G000553',
  'Alan Grayson': 'G000556',
  'Brett Guthrie': 'G000558',
  'John Garamendi': 'G000559',
  'Tom Graves': 'G000560',
  'Cory Gardner': 'G000562',
  'Bob Gibbs': 'G000563',
  'Chris Gibson': 'G000564',
  'Paul Gosar': 'G000565',
  'Trey Gowdy': 'G000566',
  'Tim Griffin': 'G000567',
  'Morgan Griffith': 'G000568',
  'Mike Grimm': 'G000569',
  'Tulsi Gabbard': 'G000571',
  'Pete Gallego': 'G000572',
  'Joe Garcia': 'G000573',
  'Ralph Hall': 'H000067',
  'Alcee Hastings': 'H000324',
  'Doc Hastings': 'H000329',
  'Rubén Hinojosa': 'H000636',
  'Steny Hoyer': 'H000874',
  'Rush Holt': 'H001032',
  'Michael Honda': 'H001034',
  'Jeb Hensarling': 'H001036',
  'Brian Higgins': 'H001038',
  'Gregg Harper': 'H001045',
  'Jim Himes': 'H001047',
  'Duncan Hunter': 'H001048',
  'Colleen Hanabusa': 'H001050',
  'Richard Hanna': 'H001051',
  'Andy Harris': 'H001052',
  'Vicky Hartzler': 'H001053',
  'Joe Heck': 'H001055',
  'Jaime Herrera Beutler': 'H001056',
  'Tim Huelskamp': 'H001057',
  'Bill Huizenga': 'H001058',
  'Randy Hultgren': 'H001059',
  'Robert Hurt': 'H001060',
  'Janice Hahn': 'H001063',
  'Denny Heck': 'H001064',
  'George Holding': 'H001065',
  'Steven Horsford': 'H001066',
  'Richard Hudson': 'H001067',
  'Jared Huffman': 'H001068',
  'Darrell Issa': 'I000056',
  'Steve Israel': 'I000057',
  'Sheila Jackson-Lee': 'J000032',
  'Eddie Johnson': 'J000126',
  'Sam Johnson': 'J000174',
  'Walter Jones': 'J000255',
  'Hank Johnson': 'J000288',
  'Jim Jordan': 'J000289',
  'Lynn Jenkins': 'J000290',
  'Bill Johnson': 'J000292',
  'Hakeem Jeffries': 'J000294',
  'Dave Joyce': 'J000295',
  'David Jolly': 'J000296',
  'Marcy Kaptur': 'K000009',
  'Ron Kind': 'K000188',
  'Peter King': 'K000210',
  'Jack Kingston': 'K000220',
  'Steve King': 'K000362',
  'John Kline': 'K000363',
  'Ann Kirkpatrick': 'K000368',
  'Bill Keating': 'K000375',
  'Mike Kelly': 'K000376',
  'Adam Kinzinger': 'K000378',
  'Joseph Kennedy III': 'K000379',
  'Dan Kildee': 'K000380',
  'Derek Kilmer': 'K000381',
  'Ann Kuster': 'K000382',
  'Robin Kelly': 'K000385',
  'Tom Latham': 'L000111',
  'Sander Levin': 'L000263',
  'John Lewis': 'L000287',
  'Zoe Lofgren': 'L000397',
  'Nita Lowey': 'L000480',
  'Frank Lucas': 'L000491',
  'Barbara Lee': 'L000551',
  'Frank LoBiondo': 'L000554',
  'John Larson': 'L000557',
  'Jim Langevin': 'L000559',
  'Rick Larsen': 'L000560',
  'Stephen Lynch': 'L000562',
  'Daniel Lipinski': 'L000563',
  'Doug Lamborn': 'L000564',
  'Dave Loebsack': 'L000565',
  'Robert Latta': 'L000566',
  'Leonard Lance': 'L000567',
  'Blaine Luetkemeyer': 'L000569',
  'Ben Lujan': 'L000570',
  'Cynthia Lummis': 'L000571',
  'Raul Labrador': 'L000573',
  'James Lankford': 'L000575',
  'Billy Long': 'L000576',
  'Doug LaMalfa': 'L000578',
  'Alan Lowenthal': 'L000579',
  'Michelle Lujan Grisham': 'L000580',
  'Carolyn Maloney': 'M000087',
  'Carolyn McCarthy': 'M000309',
  'Jim McGovern': 'M000312',
  'Jim McDermott': 'M000404',
  'Mike McIntyre': 'M000485',
  'Howard McKeon': 'M000508',
  'John Mica': 'M000689',
  'George Miller': 'M000725',
  'James Moran': 'M000933',
  'Gregory Meeks': 'M001137',
  'Gary Miller': 'M001139',
  'Jim Matheson': 'M001142',
  'Betty McCollum': 'M001143',
  'Jeff Miller': 'M001144',
  'Michael Michaud': 'M001149',
  'Candice Miller': 'M001150',
  'Tim Murphy': 'M001151',
  'Patrick McHenry': 'M001156',
  'Michael McCaul': 'M001157',
  'Kenny Marchant': 'M001158',
  'Cathy McMorris Rodgers': 'M001159',
  'Gwen Moore': 'M001160',
  'Doris Matsui': 'M001163',
  'Kevin McCarthy': 'M001165',
  'Jerry McNerney': 'M001166',
  'Dan Maffei': 'M001171',
  'Tom McClintock': 'M001177',
  'Tom Marino': 'M001179',
  'David McKinley': 'M001180',
  'Pat Meehan': 'M001181',
  'Mick Mulvaney': 'M001182',
  'Thomas Massie': 'M001184',
  'Sean Maloney': 'M001185',
  'Mark Meadows': 'M001187',
  'Grace Meng': 'M001188',
  'Luke Messer': 'M001189',
  'Markwayne Mullin': 'M001190',
  'Patrick Murphy': 'M001191',
  'Vance McAllister': 'M001192',
  'Jerrold Nadler': 'N000002',
  'Richard Neal': 'N000015',
  'Rick Nolan': 'N000127',
  'Eleanor Norton': 'N000147',
  'Grace Napolitano': 'N000179',
  'Devin Nunes': 'N000181',
  'Randy Neugebauer': 'N000182',
  'Kristi Noem': 'N000184',
  'Richard Nugent': 'N000185',
  'Alan Nunnelee': 'N000186',
  'Gloria Negrete McLeod': 'N000187',
  'Donald Norcross': 'N000188',
  'Pete Olson': 'O000168',
  'Bill Owens': 'O000169',
  'Beto O&#x27;Rourke': 'O000170',
  'Frank Pallone': 'P000034',
  'Bill Pascrell Jr.': 'P000096',
  'Ed Pastor': 'P000099',
  'Nancy Pelosi': 'P000197',
  'Collin Peterson': 'P000258',
  'Tom Petri': 'P000265',
  'Joe Pitts': 'P000373',
  'David Price': 'P000523',
  'Steve Pearce': 'P000588',
  'Tom Price': 'P000591',
  'Ted Poe': 'P000592',
  'Ed Perlmutter': 'P000593',
  'Erik Paulsen': 'P000594',
  'Gary Peters': 'P000595',
  'Pedro Pierluisi': 'P000596',
  'Chellie Pingree': 'P000597',
  'Jared Polis': 'P000598',
  'Bill Posey': 'P000599',
  'Steven Palazzo': 'P000601',
  'Mike Pompeo': 'P000602',
  'Donald Payne Jr.': 'P000604',
  'Scott Perry': 'P000605',
  'Robert Pittenger': 'P000606',
  'Mark Pocan': 'P000607',
  'Scott Peters': 'P000608',
  'Mike Quigley': 'Q000023',
  'Nick Rahall II': 'R000011',
  'Charles Rangel': 'R000053',
  'Harold Rogers': 'R000395',
  'Dana Rohrabacher': 'R000409',
  'Ileana Ros-Lehtinen': 'R000435',
  'Lucille Roybal-Allard': 'R000486',
  'Ed Royce': 'R000487',
  'Bobby Rush': 'R000515',
  'Paul Ryan': 'R000570',
  'Mike Rogers': 'R000572',
  'C.A. Dutch Ruppersberger': 'R000576',
  'Tim Ryan': 'R000577',
  'Dave Reichert': 'R000578',
  'Peter Roskam': 'R000580',
  'Phil Roe': 'R000582',
  'Tom Rooney': 'R000583',
  'Tom Reed': 'R000585',
  'Jim Renacci': 'R000586',
  'Reid Ribble': 'R000587',
  'Cedric Richmond': 'R000588',
  'Scott Rigell': 'R000589',
  'Martha Roby': 'R000591',
  'Todd Rokita': 'R000592',
  'Dennis Ross': 'R000593',
  'Jon Runyan': 'R000594',
  'Trey Radel': 'R000596',
  'Tom Rice': 'R000597',
  'Keith Rothfus': 'R000598',
  'Raul Ruiz': 'R000599',
  'Matt Salmon': 'S000018',
  'Loretta Sanchez': 'S000030',
  'Mark Sanford': 'S000051',
  'Robert Scott': 'S000185',
  'F. Sensenbrenner': 'S000244',
  'José Serrano': 'S000248',
  'Pete Sessions': 'S000250',
  'Brad Sherman': 'S000344',
  'John Shimkus': 'S000364',
  'Louise Slaughter': 'S000480',
  'Adam Smith': 'S000510',
  'Christopher Smith': 'S000522',
  'Lamar Smith': 'S000583',
  'Steve Stockman': 'S000937',
  'Jan Schakowsky': 'S001145',
  'Mike Simpson': 'S001148',
  'Adam Schiff': 'S001150',
  'Bill Shuster': 'S001154',
  'Linda Sanchez': 'S001156',
  'David Scott': 'S001157',
  'Allyson Schwartz': 'S001162',
  'Albio Sires': 'S001165',
  'John Sarbanes': 'S001168',
  'Carol Shea-Porter': 'S001170',
  'Adrian Smith': 'S001172',
  'Jackie Speier': 'S001175',
  'Steve Scalise': 'S001176',
  'Gregorio &#x27;Kilili&#x27; Sablan': 'S001177',
  'Aaron Schock': 'S001179',
  'Kurt Schrader': 'S001180',
  'David Schweikert': 'S001183',
  'Terri Sewell': 'S001185',
  'Steve Southerland': 'S001186',
  'Steve Stivers': 'S001187',
  'Marlin Stutzman': 'S001188',
  'Austin Scott': 'S001189',
  'Brad Schneider': 'S001190',
  'Kyrsten Sinema': 'S001191',
  'Chris Stewart': 'S001192',
  'Eric Swalwell': 'S001193',
  'Jason Smith': 'S001195',
  'Bennie Thompson': 'T000193',
  'William Thornberry': 'T000238',
  'John Tierney': 'T000266',
  'Lee Terry': 'T000459',
  'Mike Thompson': 'T000460',
  'Pat Tiberi': 'T000462',
  'Michael Turner': 'T000463',
  'Niki Tsongas': 'T000465',
  'Glenn Thompson': 'T000467',
  'Dina Titus': 'T000468',
  'Paul Tonko': 'T000469',
  'Scott Tipton': 'T000470',
  'Mark Takano': 'T000472',
  'Fred Upton': 'U000031',
  'Nydia Velázquez': 'V000081',
  'Peter Visclosky': 'V000108',
  'Chris Van Hollen': 'V000128',
  'David Valadao': 'V000129',
  'Juan Vargas': 'V000130',
  'Marc Veasey': 'V000131',
  'Filemon Vela': 'V000132',
  'Maxine Waters': 'W000187',
  'Henry Waxman': 'W000215',
  'Edward Whitfield': 'W000413',
  'Frank Wolf': 'W000672',
  'Greg Walden': 'W000791',
  'Joe Wilson': 'W000795',
  'Lynn Westmoreland': 'W000796',
  'Debbie Wasserman Schultz': 'W000797',
  'Tim Walberg': 'W000798',
  'Tim Walz': 'W000799',
  'Peter Welch': 'W000800',
  'Robert Wittman': 'W000804',
  'Daniel Webster': 'W000806',
  'Frederica Wilson': 'W000808',
  'Steve Womack': 'W000809',
  'Rob Woodall': 'W000810',
  'Ann Wagner': 'W000812',
  'Jackie Walorski': 'W000813',
  'Randy Weber': 'W000814',
  'Brad Wenstrup': 'W000815',
  'Roger Williams': 'W000816',
  'Don Young': 'Y000033',
  'John Yarmuth': 'Y000062',
  'Kevin Yoder': 'Y000063',
  'Todd Young': 'Y000064',
  'Ted Yoho': 'Y000065'
};



// http://api.nytimes.com/svc/politics/{version}/us/legislative/congress/members/new[.response-format]?api-key={your-API-key}
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/members/senate/il/1/current.json?api-key=7449f87051cf64139083805870b60575:13:74553905
// http://api.nytimes.com/svc/politics/v3/us/legislative/congress/113/{chamber}//members/new[.response-format]?api-key={your-API-key}

var str = '';
var speechText = "";

var options = {
  host: 'api.nytimes.com',
  //path: '/svc/politics/v3/us/legislative/congress/members/house/il/current.json?api-key=' + apikey
  path: '/svc/politics/v3/us/legislative/congress/113/house/members/current.json?api-key=' + apikey
};

callback = function(response) {
  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  //the whole response has been recieved, so we just print it out here
  response.on('end', function() {
    result = JSON.parse(str);
    var reps = result["results"][0]["members"];
    for (var i = 0; i < reps.length; i++) {
      var rep = reps[i];
      // console.log(rep["first_name"]+ " " + rep["last_name"]);
      var rep_name = rep["first_name"]+ " " + rep["last_name"];
      console.log("'" + rep_name + "': '" + rep["id"] + "',");
    }
  });
};

http.request(options, callback).end();




function handleRepresentativeLookupByNameIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";

    var name = intent.slots.Name.value.toLowerCase();

    console.log("Representative name: " + name);

    if (name in rep_hash/* && district in num_hash*/) {
        speechText = "The id for " + name + " is ";
        repromptText = ""

        var str = '';

        var options = {
          host: 'api.nytimes.com',
          //path: '/svc/politics/v3/us/legislative/congress/members/house/il/current.json?api-key=' + apikey
          path: '/svc/politics/v3/us/legislative/congress/113/house/members/current.json?api-key=' + apikey
        };

        callback = function(response) {
          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
          });

          //the whole response has been recieved, so we just print it out here
          /*response.on('end', function() {
            result = JSON.parse(str);
            var reps = result["results"][0]["members"];
            for (var i = 0; i < reps.length; i++) {
              var rep = reps[i];
              var rep_name = rep["first_name"]+ " " + rep["last_name"];
              console.log("'" + rep_name + "': '" + rep["id"] + "',");
            }
          });*/

          //the whole response has been recieved, so we just print it out here
          response.on('end', function () {
            result = JSON.parse(str);
            var reps = result["results"][0]["members"];
            for (var i = 0; i < reps.length; i++) {
              var rep = reps[i];
              var rep_name = rep["first_name"]+ " " + rep["last_name"];
              if (name.localeCompare(rep_name) === 0) {
                speechText += "<break time=\"0.4s\" /> " + rep["id"];
                break;
            }

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
        speechText = "Sorry, I couldn't find " + name;
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
