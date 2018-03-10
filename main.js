
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
  snow:      ["nieve", "schnee", "nego", "peD"]
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