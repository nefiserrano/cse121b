/* Declare and initialize global variables */
let currentWeather = [];
let forecast = [];

// Create getWeather function.
const getWeather = async () => {
    const apiKey = "0f04f227484e0e0bb6fff98b4444de5b";
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please, enter a city");
        return;
    }
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const response = await fetch(currentWeatherUrl);
    // Conditional branching.
    if (!response.ok) {
        alert(`"${city}" not found. Please try again."`)
        return;
    } else {
        let data = await response.json();
        currentWeather = data;
        displayWeather(currentWeather);
    }
    // Fetch and JSON.
    const response2 = await fetch(forecastUrl);
    if (!response2.ok) {
        alert(`"${city}" not found. Please try again."`)
        return;
    } else {
        let data2 = await response2.json();
        forecast = data2;
        displayForecast(forecast);
    }
}

// Create displayWeather function.
function displayWeather(data) {
    const divTemperature = document.getElementById("temperature");
    const divInfo = document.getElementById("info");
    const divForecast = document.getElementById("forecast");
    const imgImage = document.getElementById("image");
    divTemperature.innerHTML = "";
    divInfo.innerHTML = "";
    divForecast.innerHTML = "";
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    // Template literals
    divTemperature.innerHTML = `<p>The temperature is ${temperature}°K</p>`;
    divInfo.innerHTML = `<p>City: ${cityName}</p> <p>${description}</p>`;
    imgImage.setAttribute("src", iconUrl);
    imgImage.setAttribute("alt", cityName);
    showImage();
}

// Create displayForecast function.
function displayForecast(data) {
    const divForecast = document.getElementById("forecast");
    const forecastData = data.list.slice(0, 8);
    forecastData.forEach(item => {
        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = item.main.temp
        const iconCode = item.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
        // Interaction with DOM.
        const hourlyItem = `<div class="hourly-item">
                               <span>${hour}:00</span>
                               <img src="${iconUrl}" alt="${hour}">
                               <span>${temperature}°K</span>
                            </div>`;
        divForecast.innerHTML += hourlyItem;
    getTempAverage(forecastData);
    })
}

// Create showImage funcion.
function showImage() {
    const icon = document.getElementById("image");
    icon.style.display = "block";
}

// Create getTempAverage function.
function getTempAverage (temperaturesArray) {
    const divAverage = document.getElementById("average");
    // Array Method.
    const sum = temperaturesArray.reduce((sum, number) => sum + number.main.temp, 0);
    const average = sum / temperaturesArray.length;
    const roundedAverage = Math.round(average);
    const averageItem = `<p>Average temperature in the following hours: ${roundedAverage}°K</p>`;
    divAverage.innerHTML = averageItem;
}

/* Event Listener */
document.getElementById("search").addEventListener("click", getWeather);