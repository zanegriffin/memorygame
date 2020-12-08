console.log("Up and running!")
let points = 0;
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
            alert("You found a match!;")
            points = points + 1;
            scoreUpdate();
            reset();
        } else {
            alert("sorry try again");
            reset();
        }
    }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  this.setAttribute("src", cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].rank);
  
  checkForMatch();
}

function createBoard() {
    for (let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute("id", i);
        cardElement.setAttribute("data-id", i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement);
        
        

    }
}
//resets cards
function reset() {
   for (let i = 0; i < cards.length; i++){
    let parent = document.getElementById('game-board');
   let child = document.getElementById(i);
   parent.removeChild(child);
   }
   createBoard();
   cardsInPlay.length = 0;

}

function scoreUpdate() {
   document.getElementById("score").innerHTML = "Score: " + points;
}

function scoreKeep() {
let score = document.getElementById("score");
let actual = document.createTextNode("Score: " + points);

score.appendChild(actual);
}

//reset points
function resetPoints() {
    points = 0;
    let score = document.getElementById("score").firstChild;
    score.nodeValue = "Score: " + points;
}


createBoard();
scoreKeep();
