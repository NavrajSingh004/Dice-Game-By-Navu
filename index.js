
var randomNumber1=Math.random()*6;

randomNumber1=Math.floor(randomNumber1)+1;

var randomDiceimage=("images/dice"+randomNumber1+".png");

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage);

// for 2 image
var randomNumber2=Math.random()*6;

randomNumber2=Math.floor(randomNumber2)+1;

var randomDiceimage2=("images/dice"+randomNumber2+".png");

document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

// CONDITION

if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="!Player 2 wins";
}else if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins!";
}else{
  document.querySelector("h1").innerHTML="Its a Draw!" ;

}
