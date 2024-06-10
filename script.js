function fetchWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityInput}?unitGroup=us&include=current&key=DSF73YR6K9BXAM74WEV6NRATY&contentType=json`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            updateWeatherUI(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

function updateWeatherUI(weatherData) {
    document.getElementById('locationDisplay').innerText = weatherData.resolvedAddress;
    document.getElementById('temperatureDisplay').innerText = fahrenheitToCelsius(weatherData.days[0].temp).toFixed(2) + "°C";
    document.getElementById('minTempDisplay').innerText = fahrenheitToCelsius(weatherData.days[0].tempmin).toFixed(2) + "°C";
    document.getElementById('maxTempDisplay').innerText = fahrenheitToCelsius(weatherData.days[0].tempmax).toFixed(2) + "°C";
    document.getElementById('humidityDisplay').innerText = weatherData.days[0].humidity + "%";
    document.getElementById('windSpeedDisplay').innerText = weatherData.days[0].windspeed + " km/h";
}

