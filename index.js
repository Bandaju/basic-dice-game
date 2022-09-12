var circle1 = document.querySelectorAll(".number1");
var circle2 = document.querySelectorAll(".number2");
var circle3 = document.querySelectorAll(".number3");
var circle4 = document.querySelectorAll(".number4");
var circle5 = document.querySelectorAll(".number5");
var circle6 = document.querySelectorAll(".number6");
var circle7 = document.querySelectorAll(".number7");

function normalDice() {
  circle1[0].classList.remove("chidden");
  circle2[0].classList.remove("chidden");
  circle3[0].classList.remove("chidden");
  circle4[0].classList.remove("chidden");
  circle5[0].classList.remove("chidden");
  circle6[0].classList.remove("chidden");
  circle7[0].classList.add("chidden");
}

function normalDice2() {
  circle1[1].classList.remove("chidden");
  circle2[1].classList.remove("chidden");
  circle3[1].classList.remove("chidden");
  circle4[1].classList.remove("chidden");
  circle5[1].classList.remove("chidden");
  circle6[1].classList.remove("chidden");
  circle7[1].classList.add("chidden");
}

function diceOneCircleOne() {
  normalDice();
  circle7[0].classList.remove("chidden");
  circle1[0].classList.add("chidden");
  circle2[0].classList.add("chidden");
  circle3[0].classList.add("chidden");
  circle4[0].classList.add("chidden");
  circle5[0].classList.add("chidden");
  circle6[0].classList.add("chidden");
}

function diceOneCircleTwo() {
  normalDice();
  circle1[0].classList.add("chidden");
  circle2[0].classList.add("chidden");
  circle5[0].classList.add("chidden");
  circle6[0].classList.add("chidden");
}

function diceOneCircleThree() {
  normalDice();
  circle7[0].classList.remove("chidden");
  circle1[0].classList.add("chidden");
  circle2[0].classList.add("chidden");
  circle5[0].classList.add("chidden");
  circle6[0].classList.add("chidden");
}

function diceOneCircleFour() {
  normalDice();
  circle2[0].classList.add("chidden");
  circle5[0].classList.add("chidden");
}

function diceOneCircleFive() {
  normalDice();
  circle2[0].classList.add("chidden");
  circle5[0].classList.add("chidden");
  circle7[0].classList.remove("chidden");
}

function diceOneCircleSix() {
  normalDice();
}


var player1Change = [diceOneCircleOne, diceOneCircleTwo, diceOneCircleThree, diceOneCircleFour, diceOneCircleFive, diceOneCircleSix];


function diceTwoCircleOne() {
  normalDice2();
  circle7[1].classList.remove("chidden");
  circle1[1].classList.add("chidden");
  circle2[1].classList.add("chidden");
  circle3[1].classList.add("chidden");
  circle4[1].classList.add("chidden");
  circle5[1].classList.add("chidden");
  circle6[1].classList.add("chidden");
}

function diceTwoCircleTwo() {
  normalDice2();
  circle1[1].classList.add("chidden");
  circle2[1].classList.add("chidden");
  circle5[1].classList.add("chidden");
  circle6[1].classList.add("chidden");
}

function diceTwoCircleThree() {
  normalDice2();
  circle7[1].classList.remove("chidden");
  circle1[1].classList.add("chidden");
  circle2[1].classList.add("chidden");
  circle5[1].classList.add("chidden");
  circle6[1].classList.add("chidden");
}

function diceTwoCircleFour() {
  normalDice2();
  circle2[1].classList.add("chidden");
  circle5[1].classList.add("chidden");
}

function diceTwoCircleFive() {
  normalDice2();
  circle2[1].classList.add("chidden");
  circle5[1].classList.add("chidden");
  circle7[1].classList.remove("chidden");
}

function diceTwoCircleSix() {
  normalDice2();
}


var player2Change = [diceTwoCircleOne, diceTwoCircleTwo, diceTwoCircleThree, diceTwoCircleFour, diceTwoCircleFive, diceTwoCircleSix];

zarAt.onclick = function() {

  varolanSayi1 = Math.floor((Math.random() * (player1Change.length - 1)) + 1);
  varolanSayi2 = Math.floor((Math.random() * (player2Change.length - 1)) + 1);

  player1Change[varolanSayi1]()
  player2Change[varolanSayi2]()
  
  if (varolanSayi1 === varolanSayi2) {
    document.querySelector("h1").innerHTML = "Draw!"
  } else if (varolanSayi1 > varolanSayi2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  } else if (varolanSayi1 < varolanSayi2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  }
}