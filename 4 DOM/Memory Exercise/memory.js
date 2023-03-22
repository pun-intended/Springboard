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
