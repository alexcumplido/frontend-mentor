const URL_DATA = `./json/data.json`;
let dataFetched;
const timeframes = document.getElementsByClassName("button-timeframe");
const cards = document.getElementsByClassName("card");

async function fetchData() {
    fetch(URL_DATA)
        .then(function (response) {
            return response.text();
        }).then(function (responseToParse) {
            return JSON.parse(responseToParse);
        }).then(function (responseParsed) {
            dataFetched = responseParsed;
            printDashboardData("weekly");
        }).catch(function (error) {
            console.log(error);
        })
}

function printDashboardData(time) {
    for (let i = 0; i < dataFetched.length; i++) {

        let { current: currentValue, previous: previousValue } = dataFetched[i].timeframes[time];

        let itemTitle = dataFetched[i].title.toLowerCase().replace(' ', '-');
        cards[i].classList.add(itemTitle);
        let cardTitle = document.querySelector(`.${itemTitle} .card-title`);
        let currentCada = document.querySelector(`.${itemTitle} .card-current-data`);
        let previousData = document.querySelector(`.${itemTitle} .card-previous-data`);

        cardTitle.innerText = dataFetched[i].title;
        currentCada.innerText = `${String(currentValue)}hrs`;
        previousData.innerText = `Last ${getPastWordTime(time)} - ${String(previousValue)}hrs`;
    }
}

function getPastWordTime(time) {
    return (time === 'daily') ? 'Day' : (time === 'monthly') ? 'Month' : 'Week';
}

for (let i = 0; i < timeframes.length; i++) {
    timeframes[i].addEventListener('click', function (event) {
        let time = event.target.innerText.toLowerCase();
        printDashboardData(time);
    })
}

fetchData();