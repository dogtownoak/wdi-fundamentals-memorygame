console.log("Up and running!");


var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){
	if( cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		alert("You found a match!");
	}
	else {
		console.log("Sorry try again.");
		alert("Sorry try again.")
	}
}


var flipCard = function(cardId) {

/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);*/
console.log("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]);
checkForMatch();
}


//var match;
//var noMatch;

//if( cardsInPlay.length === 2) { 


flipCard(1);
flipCard(2);



