const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  //
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);

/*
Estimate - 8-12 hours (20-30 poms)
Poms used - o
*/

/*
Expectations:
- Card based memory game
- face-down cards that flip when clicked
- once two cards are clicked, if they match they remain up
- if not a match, remain visible for 1 seond, then flip over
- match all pairs to complete the game

Details
--1--
- Read over code
- shuffle array of colors, create 10 elements on page,
give each element class of color
- append elements to DOM, add event listener for clicks

--2--
- Clicking changes bg color of card to class color
- users can click at most 2 cards at a time
- clicking 2 matching cards results in "match", and 
cards stay face up
- non-matching cards stay face up for 1 second before 
turning back over

--3--
- only works if clicking 2 face down cards
    - no clicking face up/current card
- cannot click too quickly or flip more than 2 cards 
in a turn

--extra--
- button cluck to start game
- button to reset game
- increment score for guesses made
- store and display low-score
- allow for more cards to appear
- use other things for cards (images, other colors, symbols, etc)

*/
