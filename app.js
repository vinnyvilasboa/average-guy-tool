//////////////////////////////WEATHER SECTION//////////////////////////////////
let weather = {
    apiKey: "772a5938a64f5d0f8aa3e42401341db0",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=imperial&appid="
            + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((err) => console.log("Input City or Check Spelling"))
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        let { temp } = data.main;
        console.log(name, icon, description, temp)
        temp = Math.floor(temp);
        document.querySelector(".temp-city").innerHTML = name;
        document.querySelector(".temp-degree").innerHTML = temp;
        document.querySelector(".temp-description").innerHTML = description;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
//////////////////////////////JOKE SECTION//////////////////////////////////


const jokeBtn = document.querySelector(".joke-btn")
const jokeSection = document.querySelector(".joke-section")
async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", {
        headers: {
            Accept: "application/json",
        },
    });
    const data = await response.json();
    return data
}
async function handleClick(){
    const {joke} = await fetchJoke();
    jokeSection.textContent = joke;
}

// jokeBtn.addEventListener("click", handleClick)


//////////////////////////////QUOTE SECTION//////////////////////////////////
const quotesBtn = document.querySelector(".quotes-btn");
const text = document.querySelector(".quote");
const author = document.querySelector(".author");

const fetchQuote = async () => {
    const res = await fetch("https://type.fit/api/quotes");
    const quotes = await res.json();
    const num = Math.floor(Math.random()*quotes.length);
    console.log(num)
    const item = quotes[num]
    // console.log(item)
    const quote = item.text;
    const authorName = item.author;
    text.innerText = '"' + quote + '"';
    author.innerText = authorName;
}
fetchQuote()

//https://www.javascripttutorial.net/javascript-fetch-api/


//////////////////////////////MAIN BUTTON//////////////////////////////////

document.querySelector('.search button').addEventListener("click", function () {
    weather.search();
})
document.querySelector('.search button').addEventListener("click", handleClick())
// document.querySelector('.search button').addEventListener("click", function () {
//     weather.search();
// })

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
//////////////////////////////MAIN BUTTON//////////////////////////////////
