const apiKey = "2022e0eda9be6902db573b7944f0d949";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=&{apiKey}`);
    var data = await response.json();

    console.log(data);
}

checkWeather();