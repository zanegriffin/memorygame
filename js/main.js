console.log("Up and running!")

let cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamons",
    cardImage: "images/king-of-diamonds.png"
    }
];
let cardsInPlay = [

] ;
function checkForMatch(){
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]){
            console.log("You found a match!;")
        } else {
            console.log("sorry try again");
        }
    }
}
function flipCard(cardId) {
  console.log("user flipped " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].cardImage)
  console.log(cards[cardId].suit)
  checkForMatch();
}
flipCard(0);
