getDeck();

function getDeck() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        
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
drawCards();

function drawCards() {
    fetch("https://deckofcardsapi.com/api/deck/4416f81085nr/draw/?count=10")
       
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

//drawDealerCard();
//
//function drawDealerCard() {
//    fetch("https://deckofcardsapi.com/api/deck/qo9fdx6u57j0/draw/?count=1")
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (cards) {
//            displayCards(cards)
//            console.log(cards)
//        })
//        .catch(function (error) {
//            console.log(error)
//        })
//}

const cardsInfoDiv = document.getElementById('twoCards')
const dealerCardsDiv = document.getElementById('dealerCards')
const drawCardButton = document.getElementById('draw')
const startButton = document.getElementById("start")
const standButton = document.getElementById("stand")

function displayCards(cards) {
    startButton.addEventListener("click", function () {

        //twoCards.innerHTML = ""
        let dealerCards = `
    <p> Dealers Hand </p>
    <img src="${cards.cards[2].image}">

`;
        let twoCards = `
       <img src="${cards.cards[0].image}">
       <img src="${cards.cards[1].image}">
       <p>Your hand</p>


`;

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

var cardCounter = 0;




function drawMoreCards(cards) {
    drawCardButton.addEventListener('click', function () {
        let draw = `
        <img src="${cards.cards[0].image}">
        <img src="${cards.cards[1].image}">
        <img src="${cards.cards[3].image}">
               <p>Your hand</p>


`;
        let cardValue = cards.cards[1].value + cards.cards[0].value + cards.cards[3].value 
        console.log(cardValue)
        console.log(draw);
        cardsInfoDiv.innerHTML = draw;

    })
}

function stand(cards){
  standButton.addEventListener('click', function(){
      let stand = `
    <p> Dealers Hand </p>
    <img src="${cards.cards[2].image}">
     <img src="${cards.cards[4].image}">


`;
console.log(stand)
      dealerCardsDiv.innerHTML = stand;
  })
}

//function displayCards(cards){
//   const cardsInfoElement = document.getElementById('twoCards');
//       let twoCards = `<h1> ${cards[0].value}<h1>`;
//    
//    cardsInfoElement.innerHTML = twoCards;
//}

//function displayWeather(weatherData){
//    const weatherInfoElement = document.getElementById('weatherInfo');
//    let weatherInfo = `
//        <i class="owf owf-${weatherData.weather[0].id}"></i>
//        <h2> ${weatherData.name} </h2>
//        <p> ${weatherData.weather[0].main} / ${weatherData.weather[0].description} </p>
//        <p> Temperature: ${weatherData.main.temp} °C </p>
//        <p> Wind: ${weatherData.wind.speed} m/s </p>
//    `;
//    weatherInfoElement.innerHTML = weatherInfo;
//    let cardsInfo = `<h2> 
//      
//    `;
//    weatherInfoElement.innerHTML = weatherInfo;
//}  <i class="owf owf-${weatherData.weather[0].id}"></i>
//        <h2> ${weatherData.name} </h2>
//        <p> ${weatherData.weather[0].main} / ${weatherData.weather[0].description} </p>
//        <p> Temperature: ${weatherData.main.temp} °C </p>
//       <p> Wind: ${weatherData.wind.speed} m/s </p>

//getWeather();
//
//function getWeather() {
//    fetch('api')
//        .then(function (response) {
//            return response.json();
//        })
//        .then(function (weatherData) {
//            displayTemp(weatherData);
//            console.log(weatherData)
//        })
//        .catch(function (error) {
//            console.log(error)
//        })
//}



//const searchCity = document.getElementById('searchCity');
//
//searchCity.addEventListener('change', function(){
//    const searchValue = searchCity.value;
//    getTodaysWeather(searchValue);
//    document.getElementById('searchCity').value = '';
//})
//
//getTodaysWeather("Stockholm");
//
//function getTodaysWeather(city){
//    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=cba481921dfe6cbbcd02a158d81d32b3&lang=eng&units=metric')
//        .then(function(response){
//            return response.json();
//        })
//        .then(function(weatherData){
//            displayWeather(weatherData);
//        })
//        .catch(function(error){
//            console.log(error);
//        })
//}
//
//function displayWeather(weatherData){
//    const weatherInfoElement = document.getElementById('weatherInfo');
//    let weatherInfo = `
//        <i class="owf owf-${weatherData.weather[0].id}"></i>
//        <h2> ${weatherData.name} </h2>
//        <p> ${weatherData.weather[0].main} / ${weatherData.weather[0].description} </p>
//        <p> Temperature: ${weatherData.main.temp} °C </p>
//        <p> Wind: ${weatherData.wind.speed} m/s </p>
//    `;
//    weatherInfoElement.innerHTML = weatherInfo;
//}
//





//const searchCity = document.getElementById('searchCity');
//
//searchCity.addEventListener('change', function(){
//    const searchValue = searchCity.value;
//    getTodaysWeather(searchValue);
//    document.getElementById('searchCity').value = '';
//})
//
//getTodaysWeather("Stockholm");
//
//function getTodaysWeather(city){
//    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=cba481921dfe6cbbcd02a158d81d32b3&lang=eng&units=metric')
//        .then(function(response){
//            return response.json();
//        })
//        .then(function(weatherData){
//            displayWeather(weatherData);
//        })
//        .catch(function(error){
//            console.log(error);
//        })
//}
//
//function displayWeather(weatherData){
//    const weatherInfoElement = document.getElementById('weatherInfo');
//    let weatherInfo = `
//        <i class="owf owf-${weatherData.weather[0].id}"></i>
//        <h2> ${weatherData.name} </h2>
//        <p> ${weatherData.weather[0].main} / ${weatherData.weather[0].description} </p>
//        <p> Temperature: ${weatherData.main.temp} °C </p>
//        <p> Wind: ${weatherData.wind.speed} m/s </p>
//    `;
//    weatherInfoElement.innerHTML = weatherInfo;
//}
//
