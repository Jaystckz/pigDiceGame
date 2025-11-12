"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// to set the players score to zero
score0El.textContent = 0;
score1El.textContent = 0;

// to hide the dice at the beginning of the game
diceEl.classList.add("hidden");

// to roll the dice
btnRoll.addEventListener("click", function () {
  // to generate random number
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // to display the dice
  diceEl.classList.remove("hidden");
  //   to make the number correlate with the dice image
  diceEl.src = `dice-${dice}.png`;

  // to check if the rolled number is 1
  if (dice !== 1) {
    // add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else {
    // to reset the previous player back to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0
    // to reset the current score when players switches
    currentScore = 0
  }
});
