console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);
console.log("User flipped king");

var match;
var noMatch;

if( cardsInPlay.length === 2) { 
	if( cardsInPlay[0] === cardsInPlay[1]) {
		match = "You found a match!";
		alert(match);
	}
	else {
		noMatch = "Sorry try again.";
		alert(noMatch);
	}
}