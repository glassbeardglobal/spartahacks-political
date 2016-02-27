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


function getID(name_p) {
    var sen_hash = {
        'lamar alexander': 'A000360',
        'kelly ayotte': 'A000368',
        'roy blunt': 'B000575',
        'barbara boxer': 'B000711',
        'sherrod brown': 'B000944',
        'richard burr': 'B001135',
        'tammy baldwin': 'B001230',
        'john boozman': 'B001236',
        'john barrasso': 'B001261',
        'mark begich': 'B001265',
        'michael bennet': 'B001267',
        'richard blumenthal': 'B001277',
        'cory booker': 'B001288',
        'maria cantwell': 'C000127',
        'benjamin cardin': 'C000141',
        'thomas carper': 'C000174',
        'saxby chambliss': 'C000286',
        'daniel coats': 'C000542',
        'tom coburn': 'C000560',
        'thad cochran': 'C000567',
        'michael crapo': 'C000880',
        'susan collins': 'C001035',
        'john cornyn': 'C001056',
        'bob casey': 'C001070',
        'bob corker': 'C001071',
        'christopher coons': 'C001088',
        'ted cruz': 'C001098',
        'richard durbin': 'D000563',
        'joe donnelly': 'D000607',
        'michael enzi': 'E000285',
        'dianne feinstein': 'F000062',
        'jeff flake': 'F000444',
        'al franken': 'F000457',
        'deb fischer': 'F000463',
        'lindsey graham': 'G000359',
        'charles grassley': 'G000386',
        'kirsten gillibrand': 'G000555',
        'tom harkin': 'H000206',
        'orrin hatch': 'H000338',
        'dean heller': 'H001041',
        'mazie hirono': 'H001042',
        'martin heinrich': 'H001046',
        'kay hagan': 'H001049',
        'john hoeven': 'H001061',
        'heidi heitkamp': 'H001069',
        'james inhofe': 'I000024',
        'johnny isakson': 'I000055',
        'tim johnson': 'J000177',
        'mike johanns': 'J000291',
        'ron johnson': 'J000293',
        'mark kirk': 'K000360',
        'amy klobuchar': 'K000367',
        'angus king': 'K000383',
        'tim kaine': 'K000384',
        'patrick leahy': 'L000174',
        'carl levin': 'L000261',
        'mary landrieu': 'L000550',
        'mike lee': 'L000577',
        'edward markey': 'M000133',
        'john mccain': 'M000303',
        'mitch mcconnell': 'M000355',
        'robert menendez': 'M000639',
        'barbara mikulski': 'M000702',
        'jerry moran': 'M000934',
        'patty murray': 'M001111',
        'lisa murkowski': 'M001153',
        'christopher murphy': 'M001169',
        'claire mccaskill': 'M001170',
        'jeff merkley': 'M001176',
        'joe manchin iii': 'M001183',
        'bill nelson': 'N000032',
        'rob portman': 'P000449',
        'mark pryor': 'P000590',
        'rand paul': 'P000603',
        'jack reed': 'R000122',
        'harry reid': 'R000146',
        'pat roberts': 'R000307',
        'john rockefeller iv': 'R000361',
        'jim risch': 'R000584',
        'marco rubio': 'R000595',
        'bernard sanders': 'S000033',
        'charles schumer': 'S000148',
        'richard shelby': 'S000320',
        'debbie stabenow': 'S000770',
        'jeff sessions': 'S001141',
        'jeanne shaheen': 'S001181',
        'tim scott': 'S001184',
        'brian schatz': 'S001194',
        'john thune': 'T000250',
        'patrick toomey': 'T000461',
        'jon tester': 'T000464',
        'mark udall': 'U000038',
        'tom udall': 'U000039',
        'david vitter': 'V000127',
        'roger wicker': 'W000437',
        'ron wyden': 'W000779',
        'sheldon whitehouse': 'W000802',
        'mark warner': 'W000805',
        'elizabeth warren': 'W000817',
        'john walsh': 'W000818'
    };

    var rep_hash = {
        'robert aderholt': 'A000055',
        'justin amash': 'A000367',
        'mark amodei': 'A000369',
        'alma adams': 'A000370',
        'spencer bachus': 'B000013',
        'joe barton': 'B000213',
        'xavier becerra': 'B000287',
        'sanford bishop jr.': 'B000490',
        'earl blumenauer': 'B000574',
        'john boehner': 'B000589',
        'kevin brady': 'B000755',
        'corrine brown': 'B000911',
        'robert brady': 'B001227',
        'timothy bishop': 'B001242',
        'marsha blackburn': 'B001243',
        'madeleine bordallo': 'B001245',
        'michael burgess': 'B001248',
        'rob bishop': 'B001250',
        'g. butterfield': 'B001251',
        'john barrow': 'B001252',
        'charles boustany jr.': 'B001255',
        'michele bachmann': 'B001256',
        'gus bilirakis': 'B001257',
        'bruce braley': 'B001259',
        'vern buchanan': 'B001260',
        'paul broun': 'B001262',
        'lou barletta': 'B001269',
        'karen bass': 'B001270',
        'dan benishek': 'B001271',
        'diane black': 'B001273',
        'mo brooks': 'B001274',
        'larry bucshon': 'B001275',
        'suzanne bonamici': 'B001278',
        'ron barber': 'B001279',
        'kerry bentivolio': 'B001280',
        'joyce beatty': 'B001281',
        'andy barr': 'B001282',
        'jim bridenstine': 'B001283',
        'susan brooks': 'B001284',
        'julia brownley': 'B001285',
        'cheri bustos': 'B001286',
        'ami bera': 'B001287',
        'bradley byrne': 'B001289',
        'david brat': 'B001290',
        'ken calvert': 'C000059',
        'dave camp': 'C000071',
        'steven chabot': 'C000266',
        'donna christensen': 'C000380',
        'james clyburn': 'C000537',
        'howard coble': 'C000556',
        'john conyers jr.': 'C000714',
        'jim cooper': 'C000754',
        'elijah cummings': 'C000984',
        'lois capps': 'C001036',
        'michael capuano': 'C001037',
        'joseph crowley': 'C001038',
        'ander crenshaw': 'C001045',
        'shelley capito': 'C001047',
        'john culberson': 'C001048',
        'william clay': 'C001049',
        'john carter': 'C001051',
        'tom cole': 'C001053',
        'jim costa': 'C001059',
        'emanuel cleaver ii': 'C001061',
        'k. conaway': 'C001062',
        'henry cuellar': 'C001063',
        'john campbell': 'C001064',
        'kathy castor': 'C001066',
        'yvette clarke': 'C001067',
        'steve cohen': 'C001068',
        'joe courtney': 'C001069',
        'andré carson': 'C001072',
        'bill cassidy': 'C001075',
        'jason chaffetz': 'C001076',
        'mike coffman': 'C001077',
        'gerald connolly': 'C001078',
        'judy chu': 'C001080',
        'john carney': 'C001083',
        'david cicilline': 'C001084',
        'rick crawford': 'C001087',
        'matt cartwright': 'C001090',
        'joaquin castro': 'C001091',
        'chris collins': 'C001092',
        'doug collins': 'C001093',
        'paul cook': 'C001094',
        'tom cotton': 'C001095',
        'kevin cramer': 'C001096',
        'tony cardenas': 'C001097',
        'katherine clark': 'C001101',
        'curt clawson': 'C001102',
        'danny davis': 'D000096',
        'peter defazio': 'D000191',
        'diana degette': 'D000197',
        'rosa delauro': 'D000216',
        'john dingell': 'D000355',
        'lloyd doggett': 'D000399',
        'mike doyle': 'D000482',
        'john duncan jr.': 'D000533',
        'susan davis': 'D000598',
        'mario diaz-balart': 'D000600',
        'charlie dent': 'D000604',
        'ted deutch': 'D000610',
        'jeffrey denham': 'D000612',
        'sean duffy': 'D000614',
        'jeffrey duncan': 'D000615',
        'scott desjarlais': 'D000616',
        'suzan delbene': 'D000617',
        'steve daines': 'D000618',
        'rodney davis': 'D000619',
        'john delaney': 'D000620',
        'ron desantis': 'D000621',
        'tammy duckworth': 'D000622',
        'eliot engel': 'E000179',
        'anna eshoo': 'E000215',
        'keith ellison': 'E000288',
        'donna edwards': 'E000290',
        'renee ellmers': 'E000291',
        'bill enyart': 'E000292',
        'elizabeth esty': 'E000293',
        'eni faleomavaega': 'F000010',
        'sam farr': 'F000030',
        'chaka fattah': 'F000043',
        'rodney frelinghuysen': 'F000372',
        'j. forbes': 'F000445',
        'trent franks': 'F000448',
        'jeff fortenberry': 'F000449',
        'virginia foxx': 'F000450',
        'michael fitzpatrick': 'F000451',
        'bill foster': 'F000454',
        'marcia fudge': 'F000455',
        'john fleming': 'F000456',
        'stephen fincher': 'F000458',
        'chuck fleischmann': 'F000459',
        'blake farenthold': 'F000460',
        'bill flores': 'F000461',
        'lois frankel': 'F000462',
        'robert goodlatte': 'G000289',
        'kay granger': 'G000377',
        'gene green': 'G000410',
        'luis gutierrez': 'G000535',
        'sam graves': 'G000546',
        'scott garrett': 'G000548',
        'jim gerlach': 'G000549',
        'phil gingrey': 'G000550',
        'raúl grijalva': 'G000551',
        'louie gohmert': 'G000552',
        'al green': 'G000553',
        'alan grayson': 'G000556',
        'brett guthrie': 'G000558',
        'john garamendi': 'G000559',
        'tom graves': 'G000560',
        'cory gardner': 'G000562',
        'bob gibbs': 'G000563',
        'chris gibson': 'G000564',
        'paul gosar': 'G000565',
        'trey gowdy': 'G000566',
        'tim griffin': 'G000567',
        'morgan griffith': 'G000568',
        'mike grimm': 'G000569',
        'tulsi gabbard': 'G000571',
        'pete gallego': 'G000572',
        'joe garcia': 'G000573',
        'ralph hall': 'H000067',
        'alcee hastings': 'H000324',
        'doc hastings': 'H000329',
        'rubén hinojosa': 'H000636',
        'steny hoyer': 'H000874',
        'rush holt': 'H001032',
        'michael honda': 'H001034',
        'jeb hensarling': 'H001036',
        'brian higgins': 'H001038',
        'gregg harper': 'H001045',
        'jim himes': 'H001047',
        'duncan hunter': 'H001048',
        'colleen hanabusa': 'H001050',
        'richard hanna': 'H001051',
        'andy harris': 'H001052',
        'vicky hartzler': 'H001053',
        'joe heck': 'H001055',
        'jaime herrera beutler': 'H001056',
        'tim huelskamp': 'H001057',
        'bill huizenga': 'H001058',
        'randy hultgren': 'H001059',
        'robert hurt': 'H001060',
        'janice hahn': 'H001063',
        'denny heck': 'H001064',
        'george holding': 'H001065',
        'steven horsford': 'H001066',
        'richard hudson': 'H001067',
        'jared huffman': 'H001068',
        'darrell issa': 'I000056',
        'steve israel': 'I000057',
        'sheila jackson-lee': 'J000032',
        'eddie johnson': 'J000126',
        'sam johnson': 'J000174',
        'walter jones': 'J000255',
        'hank johnson': 'J000288',
        'jim jordan': 'J000289',
        'lynn jenkins': 'J000290',
        'bill johnson': 'J000292',
        'hakeem jeffries': 'J000294',
        'dave joyce': 'J000295',
        'david jolly': 'J000296',
        'marcy kaptur': 'K000009',
        'ron kind': 'K000188',
        'peter king': 'K000210',
        'jack kingston': 'K000220',
        'steve king': 'K000362',
        'john kline': 'K000363',
        'ann kirkpatrick': 'K000368',
        'bill keating': 'K000375',
        'mike kelly': 'K000376',
        'adam kinzinger': 'K000378',
        'joseph kennedy iii': 'K000379',
        'dan kildee': 'K000380',
        'derek kilmer': 'K000381',
        'ann kuster': 'K000382',
        'robin kelly': 'K000385',
        'tom latham': 'L000111',
        'sander levin': 'L000263',
        'john lewis': 'L000287',
        'zoe lofgren': 'L000397',
        'nita lowey': 'L000480',
        'frank lucas': 'L000491',
        'barbara lee': 'L000551',
        'frank lobiondo': 'L000554',
        'john larson': 'L000557',
        'jim langevin': 'L000559',
        'rick larsen': 'L000560',
        'stephen lynch': 'L000562',
        'daniel lipinski': 'L000563',
        'doug lamborn': 'L000564',
        'dave loebsack': 'L000565',
        'robert latta': 'L000566',
        'leonard lance': 'L000567',
        'blaine luetkemeyer': 'L000569',
        'ben lujan': 'L000570',
        'cynthia lummis': 'L000571',
        'raul labrador': 'L000573',
        'james lankford': 'L000575',
        'billy long': 'L000576',
        'doug lamalfa': 'L000578',
        'alan lowenthal': 'L000579',
        'michelle lujan grisham': 'L000580',
        'carolyn maloney': 'M000087',
        'carolyn mccarthy': 'M000309',
        'jim mcgovern': 'M000312',
        'jim mcdermott': 'M000404',
        'mike mcintyre': 'M000485',
        'howard mckeon': 'M000508',
        'john mica': 'M000689',
        'george miller': 'M000725',
        'james moran': 'M000933',
        'gregory meeks': 'M001137',
        'gary miller': 'M001139',
        'jim matheson': 'M001142',
        'betty mccollum': 'M001143',
        'jeff miller': 'M001144',
        'michael michaud': 'M001149',
        'candice miller': 'M001150',
        'tim murphy': 'M001151',
        'patrick mchenry': 'M001156',
        'michael mccaul': 'M001157',
        'kenny marchant': 'M001158',
        'cathy mcmorris rodgers': 'M001159',
        'gwen moore': 'M001160',
        'doris matsui': 'M001163',
        'kevin mccarthy': 'M001165',
        'jerry mcnerney': 'M001166',
        'dan maffei': 'M001171',
        'tom mcclintock': 'M001177',
        'tom marino': 'M001179',
        'david mckinley': 'M001180',
        'pat meehan': 'M001181',
        'mick mulvaney': 'M001182',
        'thomas massie': 'M001184',
        'sean maloney': 'M001185',
        'mark meadows': 'M001187',
        'grace meng': 'M001188',
        'luke messer': 'M001189',
        'markwayne mullin': 'M001190',
        'patrick murphy': 'M001191',
        'vance mcallister': 'M001192',
        'jerrold nadler': 'N000002',
        'richard neal': 'N000015',
        'rick nolan': 'N000127',
        'eleanor norton': 'N000147',
        'grace napolitano': 'N000179',
        'devin nunes': 'N000181',
        'randy neugebauer': 'N000182',
        'kristi noem': 'N000184',
        'richard nugent': 'N000185',
        'alan nunnelee': 'N000186',
        'gloria negrete mcleod': 'N000187',
        'donald norcross': 'N000188',
        'pete olson': 'O000168',
        'bill owens': 'O000169',
        'beto o&#x27;rourke': 'O000170',
        'frank pallone': 'P000034',
        'bill pascrell jr.': 'P000096',
        'ed pastor': 'P000099',
        'nancy pelosi': 'P000197',
        'collin peterson': 'P000258',
        'tom petri': 'P000265',
        'joe pitts': 'P000373',
        'david price': 'P000523',
        'steve pearce': 'P000588',
        'tom price': 'P000591',
        'ted poe': 'P000592',
        'ed perlmutter': 'P000593',
        'erik paulsen': 'P000594',
        'gary peters': 'P000595',
        'pedro pierluisi': 'P000596',
        'chellie pingree': 'P000597',
        'jared polis': 'P000598',
        'bill posey': 'P000599',
        'steven palazzo': 'P000601',
        'mike pompeo': 'P000602',
        'donald payne jr.': 'P000604',
        'scott perry': 'P000605',
        'robert pittenger': 'P000606',
        'mark pocan': 'P000607',
        'scott peters': 'P000608',
        'mike quigley': 'Q000023',
        'nick rahall ii': 'R000011',
        'charles rangel': 'R000053',
        'harold rogers': 'R000395',
        'dana rohrabacher': 'R000409',
        'ileana ros-lehtinen': 'R000435',
        'lucille roybal-allard': 'R000486',
        'ed royce': 'R000487',
        'bobby rush': 'R000515',
        'paul ryan': 'R000570',
        'mike rogers': 'R000572',
        'c.a. dutch ruppersberger': 'R000576',
        'tim ryan': 'R000577',
        'dave reichert': 'R000578',
        'peter roskam': 'R000580',
        'phil roe': 'R000582',
        'tom rooney': 'R000583',
        'tom reed': 'R000585',
        'jim renacci': 'R000586',
        'reid ribble': 'R000587',
        'cedric richmond': 'R000588',
        'scott rigell': 'R000589',
        'martha roby': 'R000591',
        'todd rokita': 'R000592',
        'dennis ross': 'R000593',
        'jon runyan': 'R000594',
        'trey radel': 'R000596',
        'tom rice': 'R000597',
        'keith rothfus': 'R000598',
        'raul ruiz': 'R000599',
        'matt salmon': 'S000018',
        'loretta sanchez': 'S000030',
        'mark sanford': 'S000051',
        'robert scott': 'S000185',
        'f. sensenbrenner': 'S000244',
        'josé serrano': 'S000248',
        'pete sessions': 'S000250',
        'brad sherman': 'S000344',
        'john shimkus': 'S000364',
        'louise slaughter': 'S000480',
        'adam smith': 'S000510',
        'christopher smith': 'S000522',
        'lamar smith': 'S000583',
        'steve stockman': 'S000937',
        'jan schakowsky': 'S001145',
        'mike simpson': 'S001148',
        'adam schiff': 'S001150',
        'bill shuster': 'S001154',
        'linda sanchez': 'S001156',
        'david scott': 'S001157',
        'allyson schwartz': 'S001162',
        'albio sires': 'S001165',
        'john sarbanes': 'S001168',
        'carol shea-porter': 'S001170',
        'adrian smith': 'S001172',
        'jackie speier': 'S001175',
        'steve scalise': 'S001176',
        'gregorio &#x27;kilili&#x27; sablan': 'S001177',
        'aaron schock': 'S001179',
        'kurt schrader': 'S001180',
        'david schweikert': 'S001183',
        'terri sewell': 'S001185',
        'steve southerland': 'S001186',
        'steve stivers': 'S001187',
        'marlin stutzman': 'S001188',
        'austin scott': 'S001189',
        'brad schneider': 'S001190',
        'kyrsten sinema': 'S001191',
        'chris stewart': 'S001192',
        'eric swalwell': 'S001193',
        'jason smith': 'S001195',
        'bennie thompson': 'T000193',
        'william thornberry': 'T000238',
        'john tierney': 'T000266',
        'lee terry': 'T000459',
        'mike thompson': 'T000460',
        'pat tiberi': 'T000462',
        'michael turner': 'T000463',
        'niki tsongas': 'T000465',
        'glenn thompson': 'T000467',
        'dina titus': 'T000468',
        'paul tonko': 'T000469',
        'scott tipton': 'T000470',
        'mark takano': 'T000472',
        'fred upton': 'U000031',
        'nydia velázquez': 'V000081',
        'peter visclosky': 'V000108',
        'chris van hollen': 'V000128',
        'david valadao': 'V000129',
        'juan vargas': 'V000130',
        'marc veasey': 'V000131',
        'filemon vela': 'V000132',
        'maxine waters': 'W000187',
        'henry waxman': 'W000215',
        'edward whitfield': 'W000413',
        'frank wolf': 'W000672',
        'greg walden': 'W000791',
        'joe wilson': 'W000795',
        'lynn westmoreland': 'W000796',
        'debbie wasserman schultz': 'W000797',
        'tim walberg': 'W000798',
        'tim walz': 'W000799',
        'peter welch': 'W000800',
        'robert wittman': 'W000804',
        'daniel webster': 'W000806',
        'frederica wilson': 'W000808',
        'steve womack': 'W000809',
        'rob woodall': 'W000810',
        'ann wagner': 'W000812',
        'jackie walorski': 'W000813',
        'randy weber': 'W000814',
        'brad wenstrup': 'W000815',
        'roger williams': 'W000816',
        'don young': 'Y000033',
        'john yarmuth': 'Y000062',
        'kevin yoder': 'Y000063',
        'todd young': 'Y000064',
        'ted yoho': 'Y000065'
    };
    if (name_p in rep_hash) {
        return rep_hash[name_p];
    } else if (name_p in sen_hash){
        return sen_hash[name_p];
    } else {
        return "error";
    }
}

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

var rep_hash = {
    'robert aderholt': 'A000055',
    'justin amash': 'A000367',
    'mark amodei': 'A000369',
    'alma adams': 'A000370',
    'spencer bachus': 'B000013',
    'joe barton': 'B000213',
    'xavier becerra': 'B000287',
    'sanford bishop jr.': 'B000490',
    'earl blumenauer': 'B000574',
    'john boehner': 'B000589',
    'kevin brady': 'B000755',
    'corrine brown': 'B000911',
    'robert brady': 'B001227',
    'timothy bishop': 'B001242',
    'marsha blackburn': 'B001243',
    'madeleine bordallo': 'B001245',
    'michael burgess': 'B001248',
    'rob bishop': 'B001250',
    'g. butterfield': 'B001251',
    'john barrow': 'B001252',
    'charles boustany jr.': 'B001255',
    'michele bachmann': 'B001256',
    'gus bilirakis': 'B001257',
    'bruce braley': 'B001259',
    'vern buchanan': 'B001260',
    'paul broun': 'B001262',
    'lou barletta': 'B001269',
    'karen bass': 'B001270',
    'dan benishek': 'B001271',
    'diane black': 'B001273',
    'mo brooks': 'B001274',
    'larry bucshon': 'B001275',
    'suzanne bonamici': 'B001278',
    'ron barber': 'B001279',
    'kerry bentivolio': 'B001280',
    'joyce beatty': 'B001281',
    'andy barr': 'B001282',
    'jim bridenstine': 'B001283',
    'susan brooks': 'B001284',
    'julia brownley': 'B001285',
    'cheri bustos': 'B001286',
    'ami bera': 'B001287',
    'bradley byrne': 'B001289',
    'david brat': 'B001290',
    'ken calvert': 'C000059',
    'dave camp': 'C000071',
    'steven chabot': 'C000266',
    'donna christensen': 'C000380',
    'james clyburn': 'C000537',
    'howard coble': 'C000556',
    'john conyers jr.': 'C000714',
    'jim cooper': 'C000754',
    'elijah cummings': 'C000984',
    'lois capps': 'C001036',
    'michael capuano': 'C001037',
    'joseph crowley': 'C001038',
    'ander crenshaw': 'C001045',
    'shelley capito': 'C001047',
    'john culberson': 'C001048',
    'william clay': 'C001049',
    'john carter': 'C001051',
    'tom cole': 'C001053',
    'jim costa': 'C001059',
    'emanuel cleaver ii': 'C001061',
    'k. conaway': 'C001062',
    'henry cuellar': 'C001063',
    'john campbell': 'C001064',
    'kathy castor': 'C001066',
    'yvette clarke': 'C001067',
    'steve cohen': 'C001068',
    'joe courtney': 'C001069',
    'andré carson': 'C001072',
    'bill cassidy': 'C001075',
    'jason chaffetz': 'C001076',
    'mike coffman': 'C001077',
    'gerald connolly': 'C001078',
    'judy chu': 'C001080',
    'john carney': 'C001083',
    'david cicilline': 'C001084',
    'rick crawford': 'C001087',
    'matt cartwright': 'C001090',
    'joaquin castro': 'C001091',
    'chris collins': 'C001092',
    'doug collins': 'C001093',
    'paul cook': 'C001094',
    'tom cotton': 'C001095',
    'kevin cramer': 'C001096',
    'tony cardenas': 'C001097',
    'katherine clark': 'C001101',
    'curt clawson': 'C001102',
    'danny davis': 'D000096',
    'peter defazio': 'D000191',
    'diana degette': 'D000197',
    'rosa delauro': 'D000216',
    'john dingell': 'D000355',
    'lloyd doggett': 'D000399',
    'mike doyle': 'D000482',
    'john duncan jr.': 'D000533',
    'susan davis': 'D000598',
    'mario diaz-balart': 'D000600',
    'charlie dent': 'D000604',
    'ted deutch': 'D000610',
    'jeffrey denham': 'D000612',
    'sean duffy': 'D000614',
    'jeffrey duncan': 'D000615',
    'scott desjarlais': 'D000616',
    'suzan delbene': 'D000617',
    'steve daines': 'D000618',
    'rodney davis': 'D000619',
    'john delaney': 'D000620',
    'ron desantis': 'D000621',
    'tammy duckworth': 'D000622',
    'eliot engel': 'E000179',
    'anna eshoo': 'E000215',
    'keith ellison': 'E000288',
    'donna edwards': 'E000290',
    'renee ellmers': 'E000291',
    'bill enyart': 'E000292',
    'elizabeth esty': 'E000293',
    'eni faleomavaega': 'F000010',
    'sam farr': 'F000030',
    'chaka fattah': 'F000043',
    'rodney frelinghuysen': 'F000372',
    'j. forbes': 'F000445',
    'trent franks': 'F000448',
    'jeff fortenberry': 'F000449',
    'virginia foxx': 'F000450',
    'michael fitzpatrick': 'F000451',
    'bill foster': 'F000454',
    'marcia fudge': 'F000455',
    'john fleming': 'F000456',
    'stephen fincher': 'F000458',
    'chuck fleischmann': 'F000459',
    'blake farenthold': 'F000460',
    'bill flores': 'F000461',
    'lois frankel': 'F000462',
    'robert goodlatte': 'G000289',
    'kay granger': 'G000377',
    'gene green': 'G000410',
    'luis gutierrez': 'G000535',
    'sam graves': 'G000546',
    'scott garrett': 'G000548',
    'jim gerlach': 'G000549',
    'phil gingrey': 'G000550',
    'raúl grijalva': 'G000551',
    'louie gohmert': 'G000552',
    'al green': 'G000553',
    'alan grayson': 'G000556',
    'brett guthrie': 'G000558',
    'john garamendi': 'G000559',
    'tom graves': 'G000560',
    'cory gardner': 'G000562',
    'bob gibbs': 'G000563',
    'chris gibson': 'G000564',
    'paul gosar': 'G000565',
    'trey gowdy': 'G000566',
    'tim griffin': 'G000567',
    'morgan griffith': 'G000568',
    'mike grimm': 'G000569',
    'tulsi gabbard': 'G000571',
    'pete gallego': 'G000572',
    'joe garcia': 'G000573',
    'ralph hall': 'H000067',
    'alcee hastings': 'H000324',
    'doc hastings': 'H000329',
    'rubén hinojosa': 'H000636',
    'steny hoyer': 'H000874',
    'rush holt': 'H001032',
    'michael honda': 'H001034',
    'jeb hensarling': 'H001036',
    'brian higgins': 'H001038',
    'gregg harper': 'H001045',
    'jim himes': 'H001047',
    'duncan hunter': 'H001048',
    'colleen hanabusa': 'H001050',
    'richard hanna': 'H001051',
    'andy harris': 'H001052',
    'vicky hartzler': 'H001053',
    'joe heck': 'H001055',
    'jaime herrera beutler': 'H001056',
    'tim huelskamp': 'H001057',
    'bill huizenga': 'H001058',
    'randy hultgren': 'H001059',
    'robert hurt': 'H001060',
    'janice hahn': 'H001063',
    'denny heck': 'H001064',
    'george holding': 'H001065',
    'steven horsford': 'H001066',
    'richard hudson': 'H001067',
    'jared huffman': 'H001068',
    'darrell issa': 'I000056',
    'steve israel': 'I000057',
    'sheila jackson-lee': 'J000032',
    'eddie johnson': 'J000126',
    'sam johnson': 'J000174',
    'walter jones': 'J000255',
    'hank johnson': 'J000288',
    'jim jordan': 'J000289',
    'lynn jenkins': 'J000290',
    'bill johnson': 'J000292',
    'hakeem jeffries': 'J000294',
    'dave joyce': 'J000295',
    'david jolly': 'J000296',
    'marcy kaptur': 'K000009',
    'ron kind': 'K000188',
    'peter king': 'K000210',
    'jack kingston': 'K000220',
    'steve king': 'K000362',
    'john kline': 'K000363',
    'ann kirkpatrick': 'K000368',
    'bill keating': 'K000375',
    'mike kelly': 'K000376',
    'adam kinzinger': 'K000378',
    'joseph kennedy iii': 'K000379',
    'dan kildee': 'K000380',
    'derek kilmer': 'K000381',
    'ann kuster': 'K000382',
    'robin kelly': 'K000385',
    'tom latham': 'L000111',
    'sander levin': 'L000263',
    'john lewis': 'L000287',
    'zoe lofgren': 'L000397',
    'nita lowey': 'L000480',
    'frank lucas': 'L000491',
    'barbara lee': 'L000551',
    'frank lobiondo': 'L000554',
    'john larson': 'L000557',
    'jim langevin': 'L000559',
    'rick larsen': 'L000560',
    'stephen lynch': 'L000562',
    'daniel lipinski': 'L000563',
    'doug lamborn': 'L000564',
    'dave loebsack': 'L000565',
    'robert latta': 'L000566',
    'leonard lance': 'L000567',
    'blaine luetkemeyer': 'L000569',
    'ben lujan': 'L000570',
    'cynthia lummis': 'L000571',
    'raul labrador': 'L000573',
    'james lankford': 'L000575',
    'billy long': 'L000576',
    'doug lamalfa': 'L000578',
    'alan lowenthal': 'L000579',
    'michelle lujan grisham': 'L000580',
    'carolyn maloney': 'M000087',
    'carolyn mccarthy': 'M000309',
    'jim mcgovern': 'M000312',
    'jim mcdermott': 'M000404',
    'mike mcintyre': 'M000485',
    'howard mckeon': 'M000508',
    'john mica': 'M000689',
    'george miller': 'M000725',
    'james moran': 'M000933',
    'gregory meeks': 'M001137',
    'gary miller': 'M001139',
    'jim matheson': 'M001142',
    'betty mccollum': 'M001143',
    'jeff miller': 'M001144',
    'michael michaud': 'M001149',
    'candice miller': 'M001150',
    'tim murphy': 'M001151',
    'patrick mchenry': 'M001156',
    'michael mccaul': 'M001157',
    'kenny marchant': 'M001158',
    'cathy mcmorris rodgers': 'M001159',
    'gwen moore': 'M001160',
    'doris matsui': 'M001163',
    'kevin mccarthy': 'M001165',
    'jerry mcnerney': 'M001166',
    'dan maffei': 'M001171',
    'tom mcclintock': 'M001177',
    'tom marino': 'M001179',
    'david mckinley': 'M001180',
    'pat meehan': 'M001181',
    'mick mulvaney': 'M001182',
    'thomas massie': 'M001184',
    'sean maloney': 'M001185',
    'mark meadows': 'M001187',
    'grace meng': 'M001188',
    'luke messer': 'M001189',
    'markwayne mullin': 'M001190',
    'patrick murphy': 'M001191',
    'vance mcallister': 'M001192',
    'jerrold nadler': 'N000002',
    'richard neal': 'N000015',
    'rick nolan': 'N000127',
    'eleanor norton': 'N000147',
    'grace napolitano': 'N000179',
    'devin nunes': 'N000181',
    'randy neugebauer': 'N000182',
    'kristi noem': 'N000184',
    'richard nugent': 'N000185',
    'alan nunnelee': 'N000186',
    'gloria negrete mcleod': 'N000187',
    'donald norcross': 'N000188',
    'pete olson': 'O000168',
    'bill owens': 'O000169',
    'beto o&#x27;rourke': 'O000170',
    'frank pallone': 'P000034',
    'bill pascrell jr.': 'P000096',
    'ed pastor': 'P000099',
    'nancy pelosi': 'P000197',
    'collin peterson': 'P000258',
    'tom petri': 'P000265',
    'joe pitts': 'P000373',
    'david price': 'P000523',
    'steve pearce': 'P000588',
    'tom price': 'P000591',
    'ted poe': 'P000592',
    'ed perlmutter': 'P000593',
    'erik paulsen': 'P000594',
    'gary peters': 'P000595',
    'pedro pierluisi': 'P000596',
    'chellie pingree': 'P000597',
    'jared polis': 'P000598',
    'bill posey': 'P000599',
    'steven palazzo': 'P000601',
    'mike pompeo': 'P000602',
    'donald payne jr.': 'P000604',
    'scott perry': 'P000605',
    'robert pittenger': 'P000606',
    'mark pocan': 'P000607',
    'scott peters': 'P000608',
    'mike quigley': 'Q000023',
    'nick rahall ii': 'R000011',
    'charles rangel': 'R000053',
    'harold rogers': 'R000395',
    'dana rohrabacher': 'R000409',
    'ileana ros-lehtinen': 'R000435',
    'lucille roybal-allard': 'R000486',
    'ed royce': 'R000487',
    'bobby rush': 'R000515',
    'paul ryan': 'R000570',
    'mike rogers': 'R000572',
    'mike rogers': 'R000575',
    'c.a. dutch ruppersberger': 'R000576',
    'tim ryan': 'R000577',
    'dave reichert': 'R000578',
    'peter roskam': 'R000580',
    'phil roe': 'R000582',
    'tom rooney': 'R000583',
    'tom reed': 'R000585',
    'jim renacci': 'R000586',
    'reid ribble': 'R000587',
    'cedric richmond': 'R000588',
    'scott rigell': 'R000589',
    'martha roby': 'R000591',
    'todd rokita': 'R000592',
    'dennis ross': 'R000593',
    'jon runyan': 'R000594',
    'trey radel': 'R000596',
    'tom rice': 'R000597',
    'keith rothfus': 'R000598',
    'raul ruiz': 'R000599',
    'matt salmon': 'S000018',
    'loretta sanchez': 'S000030',
    'mark sanford': 'S000051',
    'robert scott': 'S000185',
    'f. sensenbrenner': 'S000244',
    'josé serrano': 'S000248',
    'pete sessions': 'S000250',
    'brad sherman': 'S000344',
    'john shimkus': 'S000364',
    'louise slaughter': 'S000480',
    'adam smith': 'S000510',
    'christopher smith': 'S000522',
    'lamar smith': 'S000583',
    'steve stockman': 'S000937',
    'jan schakowsky': 'S001145',
    'mike simpson': 'S001148',
    'adam schiff': 'S001150',
    'bill shuster': 'S001154',
    'linda sanchez': 'S001156',
    'david scott': 'S001157',
    'allyson schwartz': 'S001162',
    'albio sires': 'S001165',
    'john sarbanes': 'S001168',
    'carol shea-porter': 'S001170',
    'adrian smith': 'S001172',
    'jackie speier': 'S001175',
    'steve scalise': 'S001176',
    'gregorio &#x27;kilili&#x27; sablan': 'S001177',
    'aaron schock': 'S001179',
    'kurt schrader': 'S001180',
    'david schweikert': 'S001183',
    'terri sewell': 'S001185',
    'steve southerland': 'S001186',
    'steve stivers': 'S001187',
    'marlin stutzman': 'S001188',
    'austin scott': 'S001189',
    'brad schneider': 'S001190',
    'kyrsten sinema': 'S001191',
    'chris stewart': 'S001192',
    'eric swalwell': 'S001193',
    'jason smith': 'S001195',
    'bennie thompson': 'T000193',
    'william thornberry': 'T000238',
    'john tierney': 'T000266',
    'lee terry': 'T000459',
    'mike thompson': 'T000460',
    'pat tiberi': 'T000462',
    'michael turner': 'T000463',
    'niki tsongas': 'T000465',
    'glenn thompson': 'T000467',
    'dina titus': 'T000468',
    'paul tonko': 'T000469',
    'scott tipton': 'T000470',
    'mark takano': 'T000472',
    'fred upton': 'U000031',
    'nydia velázquez': 'V000081',
    'peter visclosky': 'V000108',
    'chris van hollen': 'V000128',
    'david valadao': 'V000129',
    'juan vargas': 'V000130',
    'marc veasey': 'V000131',
    'filemon vela': 'V000132',
    'maxine waters': 'W000187',
    'henry waxman': 'W000215',
    'edward whitfield': 'W000413',
    'frank wolf': 'W000672',
    'greg walden': 'W000791',
    'joe wilson': 'W000795',
    'lynn westmoreland': 'W000796',
    'debbie wasserman schultz': 'W000797',
    'tim walberg': 'W000798',
    'tim walz': 'W000799',
    'peter welch': 'W000800',
    'robert wittman': 'W000804',
    'daniel webster': 'W000806',
    'frederica wilson': 'W000808',
    'steve womack': 'W000809',
    'rob woodall': 'W000810',
    'ann wagner': 'W000812',
    'jackie walorski': 'W000813',
    'randy weber': 'W000814',
    'brad wenstrup': 'W000815',
    'roger williams': 'W000816',
    'don young': 'Y000033',
    'john yarmuth': 'Y000062',
    'kevin yoder': 'Y000063',
    'todd young': 'Y000064',
    'ted yoho': 'Y000065'
};

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

    "RepresentativeLookupByNameIntent": function (intent, session, response) {
        handleRepresentativeLookupByNameIntent(intent, session, response);
    },

    "MoreInfoIntent": function (intent, session, response) {
        handleMoreInfoIntent(intent, session, response);
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Bhangra my Surti";
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
    speechText = "Learn about the members of the United States Congress";
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

function handleRepresentativeLookupByNameIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";

    var name = intent.slots.Name.value.toLowerCase();

    console.log("Representative name: " + name);

    if (name in rep_hash) {
        speechText = "The id for " + name + " is ";
        repromptText = ""

        var str = '';

        var options = {
          host: 'api.nytimes.com',
          path: '/svc/politics/v3/us/legislative/congress/113/house/members/current.json?api-key=' + apikey
        };

        callback = function(response) {
          //another chunk of data has been recieved, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
          });

          //the whole response has been recieved, so we just print it out here
          response.on('end', function () {
            result = JSON.parse(str);
            var reps = result["results"][0]["members"];
            for (var i = 0; i < reps.length; i++) {
              var rep = reps[i];
              var rep_name = rep["first_name"].toLowerCase() + " " + rep["last_name"].toLowerCase();
              if (name.localeCompare(rep_name) === 0) {
                speechText += "<break time=\"0.4s\" /> " + rep["id"];
                break;
              }
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

function handleMoreInfoIntent(intent, session, response_g) {
    var speechText = "", repromptText = "";
    var name = intent.slots.Name.value.toLowerCase();
    var id = getID(name);

    if (id.localeCompare("error") !== 0) {
        speechText += name + " is a ";

        var str = '';

        var options = {
          host: 'api.nytimes.com',
          path: '/svc/politics/v3/us/legislative/congress/members/'
            + id
            + '.json?api-key='
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
            roles = result["results"][0]["roles"][0]
                
            if (result["results"][0]["current_party"].localeCompare("R") === 0) {
                speechText += " Republican "
            } else {
                speechText += " Democrat "
            }

            if (roles["chamber"].localeCompare("Senate") !== 0) {
                speechText += " " + roles["title"] + " from the state of " + states_reverse[roles["state"]] + " in district " + roles["district"];
            } else {
                speechText += " " + roles["title"] + " from the state of " + states_reverse[roles["state"]]
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
        var speechOutput = {
            speech: '<speak>' + speechText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        var repromptOutput = {
            speech: '<speak>' + repromptText + '</speak>',
            type: AlexaSkill.speechOutputType.SSML
        };
        speechText = "Unable to find " + name;
        response_g.askWithCard(speechOutput, repromptOutput, "Political Echo", speechText);
    }
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of PoliticalEcho
    var skill = new PoliticalEcho();
    skill.execute(event, context);
};
