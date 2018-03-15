const cardsInfoDiv = document.getElementById('twoCards')
const dealerCardsDiv = document.getElementById('dealerCards')
const drawCardButton = document.getElementById('draw')
const startButton = document.getElementById("start")
const standButton = document.getElementById("stand")
const reloadButton = document.getElementById("reload")
const dealerDiv = document.getElementById('dealerdiv')
const playerScore = document.getElementById('yourscore')
const dealerScore = document.getElementById('dealerscore')


getDeck();

function getDeck() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=20")

        .then(function (response) {
            return response.json();
        })
        .then(function (deck) {
            console.log(deck)
        })
        .catch(function (error) {
            console.log(error)
        })
}

//gets 10 cards from a deck of cards//

drawCards();

function drawCards() {
    fetch("https://deckofcardsapi.com/api/deck/1tq9tyhl1klj/draw/?count=10")

        .then(function (response) {
            return response.json();
        })
        .then(function (cards) {
            displayCards(cards)
            drawMoreCards(cards)
            stand(cards)
            console.log(cards)

        })
        .catch(function (error) {
            console.log(error)
        })
}


//reloads the page and the game//
reloadGame();

function reloadGame() {
    reloadButton.addEventListener('click', function () {
        window.location.reload(true);

    })
}

//displays first cards//

function displayCards(cards) {
    startButton.addEventListener("click", function () {

        //changes value om the suited cards//

        if (cards.cards[0].value == "JACK") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "QUEEN") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "KING") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "ACE") {
            cards.cards[0].value = 11;
        }

        if (cards.cards[1].value == "JACK") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "QUEEN") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "KING") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "ACE") {
            cards.cards[1].value = 11;

        }
        if (cards.cards[2].value == "JACK") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "QUEEN") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "KING") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "ACE") {
            cards.cards[2].value = 11;

        }


        let dealerCards = `
        <p> Dealers Hand </p>
        <img src="${cards.cards[2].image}">
        
        `;

        let twoCards = `
       <img src="${cards.cards[0].image}">
       <img src="${cards.cards[1].image}">
       <p>Your hand</p>
        
        `;

        //adds the values of the cards//

        let playerValue = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10)

        //if value is ... this text appears//

        if (playerValue == 21) {
            let playerValue = `<h2> BLACKJACK! Du vann!</h2>`;
            playerScore.innerHTML = playerValue;

        } else if (playerValue <= 20) {
            let values =
                `<h2> You have ${playerValue}, hit or stand </h2> `;
            playerScore.innerHTML = values;

        }

        dealerCardsDiv.innerHTML = dealerCards;
        cardsInfoDiv.innerHTML = twoCards;


    });
}

//draws more cards//

function drawMoreCards(cards) {
    drawCardButton.addEventListener('click', function () {

        //displays the old and the new card//

        let draw = `
        <img src="${cards.cards[0].image}">
        <img src="${cards.cards[1].image}">
        <img src="${cards.cards[3].image}">
               <p>Your hand</p>
        `;

        //turns suited cards into numbers//

        if (cards.cards[0].value == "JACK") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "QUEEN") {
            cards.cards[0].value = 10;


        }
        if (cards.cards[0].value == "KING") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "ACE") {
            cards.cards[0].value = 11;
        }

        if (cards.cards[1].value == "JACK") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "QUEEN") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "KING") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "ACE") {
            cards.cards[1].value = 11;

        }
        if (cards.cards[3].value == "JACK") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "QUEEN") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "KING") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "ACE") {
            cards.cards[3].value = 11;

        }

        //adds the values of the cards//

        let playerValue = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10) + parseInt(cards.cards[3].value, 10);


        //if values are ... this happens//

        if (playerValue == 21) {
            let playerValue = `<h2> BLACKJACK typ! Du vann! </h2>`;
            playerScore.innerHTML = playerValue;
        } else if (playerValue > 21) {
            //console.log("You are the fattest dude i know!")
            let playerValue =
                `<h2> You are busto! You loose! </h2> `;
            playerScore.innerHTML = playerValue;


        } else if (playerValue <= 20) {
            let values =
                `<h2> You have ${playerValue}, you should stop while you have the chance </h2> `;
            playerScore.innerHTML = values;

        }

        cardsInfoDiv.innerHTML = draw;
    })
}

//when player decide to stand dealer draws card//

function stand(cards) {
    standButton.addEventListener('click', function () {


      let stand = `
     <p> Dealers Hand </p>
     <img src="${cards.cards[2].image}">
     <img src="${cards.cards[4].image}">
     `;

        //turns suited cards into numbers//

        if (cards.cards[0].value == "JACK") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "QUEEN") {
            cards.cards[0].value = 10;


        }
        if (cards.cards[0].value == "KING") {
            cards.cards[0].value = 10;
        }
        if (cards.cards[0].value == "ACE") {
            cards.cards[0].value = 11;
        }

        if (cards.cards[1].value == "JACK") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "QUEEN") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "KING") {
            cards.cards[1].value = 10;

        }
        if (cards.cards[1].value == "ACE") {
            cards.cards[1].value = 11;

        }
        if (cards.cards[3].value == "JACK") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "QUEEN") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "KING") {
            cards.cards[3].value = 10;

        }
        if (cards.cards[3].value == "ACE") {
            cards.cards[3].value = 11;

        }
        if (cards.cards[2].value == "JACK") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "QUEEN") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "KING") {
            cards.cards[2].value = 10;

        }
        if (cards.cards[2].value == "ACE") {
            cards.cards[2].value = 11;

        }
        if (cards.cards[4].value == "JACK") {
            cards.cards[4].value = 10;

        }
        if (cards.cards[4].value == "QUEEN") {
            cards.cards[4].value = 10;

        }
        if (cards.cards[4].value == "KING") {
            cards.cards[4].value = 10;

        }
        if (cards.cards[4].value == "ACE") {
            cards.cards[4].value = 11;

        }
        if (cards.cards[5].value == "JACK") {
            cards.cards[5].value = 10;

        }
        if (cards.cards[5].value == "QUEEN") {
            cards.cards[5].value = 10;

        }
        if (cards.cards[5].value == "KING") {
            cards.cards[5].value = 10;

        }
        if (cards.cards[5].value == "ACE") {
            cards.cards[5].value = 11;

        }

        //adds values of playercards//

        let playerValue = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10)

        // adds values of three cards//

        let playerValueIfThreeCards = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10) + parseInt(cards.cards[3].value, 10);


        //adds dealers cards//

        let dealerValue = parseInt(cards.cards[2].value, 10) + parseInt(cards.cards[4].value, 10)

        dealerCardsDiv.innerHTML = stand;

        console.log(dealerValue);


        //alot of ifs depending of values of playercards and dealercards//

        if (dealerValue <= 16) {
            let values = `
              <p> Dealers Hand </p>
                <img src="${cards.cards[2].image}">
                <img src="${cards.cards[4].image}">
                <img src="${cards.cards[5].image}">`;
            dealerCardsDiv.innerHTML = values;

            let dealerValue = parseInt(cards.cards[2].value, 10) + parseInt(cards.cards[4].value, 10) + parseInt(cards.cards[5].value, 10)


            if (dealerValue > playerValue) {
                dealerScore.innerHTML = `<h2>dealer stops at ${dealerValue}, dealer wins!<h2>`;
                playerScore.innerHTML = "";
            }
            if (dealerValue < playerValue && dealerValue < 16) {
                dealerScore.innerHTML = `<h2>dealer stops at ${dealerValue}, cause a noob made this game. You win!<h2>`;
                playerScore.innerHTML = "";
            }
            if (dealerValue < playerValue) {
                dealerScore.innerHTML = `<h2>dealer stops at ${dealerValue}, you win!<h2>`;
                playerScore.innerHTML = "";
            }
            if (dealerValue == playerValue) {
                let values = `<h2> It's a tie! </h2> 
                        `;
                dealerScore.innerHTML = values;
                playerScore.innerHTML = "";

            }
            if (dealerValue > 21) {
                let values = `<h2>Dealer busts! You win!</h2`;
                dealerScore.innerHTML = values;
                playerScore.innerHTML = "";

            }
            if (dealerValue == 21) {
                let values = `<h2> Dealer has 21 and wins, if you have a problem with that, email me at lowbeer.ola@gmail.com </h2>`;
                dealerScore.innerHTML = values;
                playerScore.innerHTML = "";

            }

        } else if (dealerValue > playerValue) {
            let values = `
            <h2> Dealer stops at ${dealerValue}, dealer wins! </h2> 
            `;

            dealerScore.innerHTML = values;
            playerScore.innerHTML = "";
        } else if (dealerValue < playerValue) {
            dealerScore.innerHTML = `<h2>dealer stops at ${dealerValue}, you win!<h2>`;
            playerScore.innerHTML = "";

        } else if (dealerValue == playerValue) {
            let values = `<h2> It's a tie! </h2> 
            `;
            dealerScore.innerHTML = values;
            playerScore.innerHTML = "";
        } else {
            console.log('error')
        }
    })
}
