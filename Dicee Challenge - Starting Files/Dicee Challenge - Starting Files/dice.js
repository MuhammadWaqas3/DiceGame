var randomNumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage = "/Dicee Challenge - Starting Files/images/dice"+
randomNumber1 +".png" ;

document.querySelectorAll("img")[0];

var changingSrc=document.querySelectorAll("img")[0];

changingSrc.setAttribute("src",randomDiceImage);



var randomNumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2 = "/Dicee Challenge - Starting Files/images/dice"+
randomNumber2 +".png" ;

document.querySelectorAll("img")[1];

var changingSrcs=document.querySelectorAll("img")[1];

changingSrcs.setAttribute("src",randomDiceImage2);

if(randomDiceImage>randomDiceImage2){
  document.querySelector("h1").innerHTML="🏆 Player1 Win  "  ;}


  else if(randomDiceImage === randomDiceImage2){

    document.querySelector("h1").innerHTML="😐 Draw!  "  ;

  }
else{

    document.querySelector("h1").innerHTML="🏆 Player2 Win  ";

}


