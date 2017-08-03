/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

// create variables assigning set numerical value to J, Q, K

function handValue (hand) {
//create variable to hold total
  let total = 0;
// create for loop to iterate through hand array
  let cards = [];
// create variable to turn cards into a numbered array
for (let i = 0; i < hand.length; i++) {
  // turn cards into a numbered array
  if ((hand[i] === "J") || (hand[i] === "Q") || (hand[i] === "K")) {
    let cardValue = Number("10");
    cards.push(cardValue);
  } else if ((hand[i] === "A")) {
    cards.push(hand[i])
  } else {
    let cardValue = Number(hand[i]);
    cards.push(cardValue);
  }
  cards.sort();
}

// A either equals 11 OR 1
for (let i = 0; i < cards.length; i++) {
  // create if statement to run if A is present
  if (cards[i] === "A") {
      if (total <= 10) {
        total += 11;
      } else {
        total += 1;
      }
  // do this if A is not present
  } else {
    total += cards[i];
  }
}
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
