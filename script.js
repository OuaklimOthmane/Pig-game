"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

let currentScore = 0;

//Rolling dice
btnRoll.addEventListener("click", function () {
  //generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  if (dice != 1) {
    console.log(dice);

    //display dice & current score
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
