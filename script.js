"use strict";

const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1") 
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing

// initializing function that is function that get the game started 
const init = function() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true

  score0El.textContent = 0
  score1El.textContent = 0
  current0El.textContent = 0
  current1El.textContent = 0

  // to hide the dice at the beginning of the game
  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner")
  player1El.classList.remove("player--winner")
  player0El.classList.add("player--active")
  player1El.classList.remove("player--active")
}
init()


// function used to switch players
const switchPlayer = function() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
    // switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0
    // to reset the current score when players switches
    currentScore = 0
    // to change the background of the active player 
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
  }


// to roll the dice
btnRoll.addEventListener("click", function () {
  if(playing) {
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
      // to switch player
      switchPlayer()
     }
  }
});

// to hold the current score
btnHold.addEventListener("click", function() {
  if(playing) {
    // to add current score to active player score
    scores[activePlayer] += currentScore
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
  
    // to check if score is greater than 100
    if(scores[activePlayer] >= 100) {
      // to finish the game
      playing = false
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
      diceEl.classList.add("hidden")
    } else{
        // switch to the next player 
        switchPlayer()
    }
  }
}) 

// to reset the whole game with new game button 
btnNew.addEventListener("click", init)

