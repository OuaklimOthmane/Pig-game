"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//! we create this function who contains the starting conditions to avoid duplication section between the declations of variables and the functionallity of the button "btnNew" wich have the same condition so we made this function to collect both of them

let scores = [0, 0];
let currentScore;
let activePlayer;
let playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  diceEl.classList.add("hidden");
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");
};

//! we should call this function for initialize the variables and the conditions we need to start the project
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  //?  toggle allows us to search inside the element if a class exists ,so if he finds the class then he will remove it or he will add it
  player1El.classList.toggle("player--active");
};

//Rolling dice
btnRoll.addEventListener("click", function () {
  if (playing) {
    //generating a random dice roll & display dice
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    if (dice != 1) {
      //add current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switching the player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // holding the score
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      playing = false;
      document.querySelector(".player--active").classList.add("player--winner");
      document.querySelector(".player--active").classList.add("player--active");
      diceEl.classList.add("hidden");
      btnRoll.classList.add("hidden");
      btnHold.classList.add("hidden");
    } else {
      // switching the player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
