const cardsInfoDiv = document.getElementById('twoCards')
const dealerCardsDiv = document.getElementById('dealerCards')
const drawCardButton = document.getElementById('draw')
const startButton = document.getElementById("start")
const standButton = document.getElementById("stand")
const reloadButton = document.getElementById("reload")
const dealerDiv = document.getElementById('dealerdiv')
const playerScore = document.getElementById('yourscore')
const dealerScore = document.getElementById('dealerscore')


//getDeck();
//
//function getDeck() {
//    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=20")
//        
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (deck) {
//            console.log(deck)
//        })
//        .catch(function (error) {
//            console.log(error)
//        })
//}
drawCards();

function drawCards() {
    fetch("https://deckofcardsapi.com/api/deck/0xket3z06ecj/draw/?count=10")

        .then(function (response) {
            return response.json();
        })
        .then(function (cards) {
            displayCards(cards)
            drawMoreCards(cards)
            stand(cards)
            //getAllCardValues(cards)
            console.log(cards)



        })
        .catch(function (error) {
            console.log(error)
        })
}



reloadGame();

function reloadGame() {
    reloadButton.addEventListener('click', function () {
        window.location.reload(true);

    })
}

function displayCards(cards) {
    startButton.addEventListener("click", function () {

        //twoCards.innerHTML = ""

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
        let dealerValue = parseInt(cards.cards[2].value)

        console.log(dealerValue);

        let twoCards = `
       <img src="${cards.cards[0].image}">
       <img src="${cards.cards[1].image}">
       <p>Your hand</p>
        

`;
        let playerValue = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10)

        console.log(playerValue);

        if (playerValue == 21) {
            let playerValue = `<h2> BLACKJACK typ! Du vann!</h2>`;
            playerScore.innerHTML = playerValue;
        } else if (playerValue > 21) {
            //console.log("You are the fattest dude i know!")
            let playerValue =
                `<h2> Du är tjock! looser! reload game</h2> `;
            playerScore.innerHTML = playerValue;


        } else if (playerValue <= 20) {
            let values =
                `<h2> You have ${playerValue}, hit or stand </h2> `;
            playerScore.innerHTML = values;

        }


        //console.log(cards.cards[0].value)
        dealerCardsDiv.innerHTML = dealerCards;
        cardsInfoDiv.innerHTML = twoCards;
        //        cards.cards[0].value = cardCounter++
        //        if (cardCounter === 21) {
        //            // What to do if the counter reaches 4
        //            console.log("you are fat")
        //        }

    });
}



function drawMoreCards(cards) {
    drawCardButton.addEventListener('click', function () {
        let draw = `
        <img src="${cards.cards[0].image}">
        <img src="${cards.cards[1].image}">
        <img src="${cards.cards[3].image}">
               <p>Your hand</p>


`;
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

        let playerValue = parseInt(cards.cards[0].value, 10) + parseInt(cards.cards[1].value, 10) + parseInt(cards.cards[3].value, 10);

        if (playerValue == 21) {
            let playerValue = `<h2> BLACKJACK typ! Du vann! </h2>`;
            playerScore.innerHTML = playerValue;
        } else if (playerValue > 21) {
            //console.log("You are the fattest dude i know!")
            let playerValue =
                `<h2> Du är tjock! du förlorar. </h2> `;
            playerScore.innerHTML = playerValue;


        } else if (playerValue <= 20) {
            let values =
                `<h1> You have ${playerValue} you stand your ground </h1> `;
            playerScore.innerHTML = values;

        }



        console.log(playerValue);
        //console.log(draw);
        cardsInfoDiv.innerHTML = draw;



    })
}



function stand(cards) {
    standButton.addEventListener('click', function () {
        let stand = `
    <p> Dealers Hand </p>
     <img src="${cards.cards[2].image}">
     <img src="${cards.cards[4].image}">

`;

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




        let dealerValue = parseInt(cards.cards[2].value, 10) + parseInt(cards.cards[4].value, 10)

        dealerCardsDiv.innerHTML = stand;

        console.log(dealerValue);

        if (dealerValue <= 16) {
            //console.log("dealer hits");
            let values = `
              <p> Dealers Hand </p>
                <img src="${cards.cards[2].image}">
                <img src="${cards.cards[4].image}">
                <img src="${cards.cards[5].image}">`;
            dealerCardsDiv.innerHTML = values;

            let dealerValue = parseInt(cards.cards[2].value, 10) + parseInt(cards.cards[4].value, 10) + parseInt(cards.cards[5].value, 10)
            console.log(dealerValue);
            dealerScore.innerHTML = `<h2>dealer stops at ${dealerValue} <h2>`;
        } else {
            console.log("dealer stops at")
            let dealerValue = parseInt(cards.cards[2].value, 10) + parseInt(cards.cards[4].value, 10)

            let values =
                `<h1> Dealer has ${dealerValue} </h1> `;
            dealerScore.innerHTML = values;

        }

        //dealerCardsDiv.innerHTML = value;


    })
}
