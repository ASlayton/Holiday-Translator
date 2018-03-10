
var languageObject =
{
  happy:     ["feliz", "glücklich", "feliĉa", "quch"],
  merry:     ["alegre", "fröhlich", "gaja", "quch"],
  new:       ["nuevo", "neu", "nova", "chu\'"],
  christmas: ["navidad", "weihnachten", "kristnasko", "QISmaS"],
  year:      ["ano", "jahr", "jaro", "DIS"],
  you:       ["tu", "sie", "vi", "SoH"],
  hope:      ["esperanza", "hoffnung", "espero", "tul"],
  i:	       ["yo", "ich", "i", "jIH"],
  and:       ["y", "und", "kaj", "je"],
  hanukah:   ["hanukkah", "hanukkah", "hanukkah", "hanukah"],
  kwanzaa:   ["kwanzaa", "kwanzaa", "kwanzaa", "kwanzaa"],
  jingle:    ["tintineo", "klimpern", "enreta", "jingle"],
  bells:     ["campanas", "glocken", "sonoriloj", "\'In"],
  deck:      ["cubierta", "deck", "ferdeko", "choQ"],
  the:       ["el", "das", "la", "."],
  halls:     ["pasillos", "hallen", "salonoj", "vaS"],
  wish:      ["deseo", "wunsch", "deziras", "vIneH"],
  joy:       ["alegría", "freude", "ĝojo", "yImaq"],
  of:        ["de", "von", "deziras", ","],
  holly:     ["acebo", "stechpalme", "hipo", "holly"],
  any:       ["muchos", "viele", "multaj", "vay\'"],
  returns:   ["devoluciones", "kehrt zurück", "revenas", "nobHa\'"],
  seasons:   ["estaciones", "jahreszeiten", "sezonoj", "maqtagh"],
  greetings: ["saludos", "schöne grüße", "salutoj", "ghaH \'ej Duvan"],
  holiday:   ["fiesta", "urlaub", "feriado", "QI\'lop"],
  wishes:    ["deseos", "wünscht sich", "deziras", "vIneH"],
  greeting:  ["saludo", "grüß", "saluto", "ghaH 'ej Duvan"],
  love:      ["amor", "liebe", "amo", "parmaq"],
  let:       ["dejar", "lassen", "lasu", "yInISQo\'"],
  it:	       ["eso", "es", "gi", "\'oH"],
  snow:      ["nieve", "schnee", "nego", "peD"],
  we:        ["nosotros", "wir", "ni", "maH"],
  a:         ["un", "ein", "a", "."] 
};

//SIMPLE WRITE TO DOM FUNCTION
function writeToDom(myInnerds, myElement){
  var theElementToWriteTo = document.getElementById(myElement);
  theElementToWriteTo.innerHTML = myInnerds;
};

//GRAB USER INPUT
function userInput(){
  var myKey = document.getElementById("userInputText").value;
  return myKey.toLowerCase().split(" ");
};


//MAIN FUNCTION THAT DOES THE THING
function translatePhrase(translatorObject, buttonPushed){
  var x = Object.keys(translatorObject);                   //Gets object names as an array
  var y = buttonPushed;                                    //declares button pushed and language attached
  if(y === "button1"){
    var myLanguage = 0;                                    //Spanish language
  }else if(y === "button2"){
    var myLanguage = 1;                                    //German language
  }else if(y === "button3"){
    var myLanguage = 2;                                    //Esperanto
  }else{
    var myLanguage = 3;                                    //Only other, klingon
  };
  var myKey = userInput();                                 //Grab user input from input field
  var textToInsert = "";
  for(var i = 0; i < myKey.length; i++){
    if(x.includes(myKey[i])){                              //If user input is included in the object of words
      if(i > 0){
        textToInsert += " " + translatorObject[myKey[i]][myLanguage];  //send back the translation of the word with a space to separate the words
      }else{
        textToInsert += translatorObject[myKey[i]][myLanguage];  //send back the translation of the word (no space because this is the first or only word)
      };
    }else{
        textToInsert = "No Matches Found. Check your spelling or try again."; //there is no match for user input
        break;                                              //There is not a match, get out of the loop
    };
  };
  writeToDom(textToInsert, "translatedText");              //output our result
  
  generateACard();
};
