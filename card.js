var myBackgrounds=["/images/cartoon-christmas-lights-border.jpg","/images/cartoon-christmas-lights-border.jpg", "/images/christmas-border-3044685_960_720.png", "/images/christmas-borders-3016691_960_720.png", "/images/simages(1).jpg", "/images/images.jpg"];
// "url('img_tree.png')"

function randomNumber(){
  var myNumber = Math.floor((Math.random() * (myBackgrounds.length-1) + 1));
  return myNumber;
};

function generateACard(){
  document.getElementById("generatedCard").style.backgroundImage = "url(" + myBackgrounds[randomNumber()] + ")";

  document.getElementById("insertUserTextHere").innerHTML = document.getElementById("translatedText").value;
  document.getElementById("generatedCard").style.visibility = 'visible';
};

