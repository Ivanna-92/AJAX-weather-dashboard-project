function getWeatherDescription(code) {
    if (code === 0) {
        return "Clear sky";
    } else if (code >= 1 && code <= 3) {
        return "Cloudy";
    } else if (code >= 45 && code <= 48) {
        return "Fog";
    } else if (code >= 51 && code <= 67) {
        return "Rain";
    } else if (code >= 71 && code <= 77) {
        return "Snow";
    } else if (code >= 80 && code <= 82) {
        return "Rain showers";
    } else if (code >= 95 && code <= 99) {
        return "Thunderstorm";
    } else {
        return "Unknown";
    }
}
const searchForm = document.getElementById("search-form");

const locationInput = document.getElementById("location-input");

const results = document.getElementById("results");


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const location = locationInput.value;

    console.log("Searching for:", location);


    // STEP 1: Find the location

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1&language=en&format=json`)

        .then(function(response) {

            return response.json();

        })

        .then(function(data) {
            if (!data.results) {
                results.innerHTML = "<p>Location not found. Please try again.</p>";
                return;
            }

            const latitude = data.results[0].latitude;

            const longitude = data.results[0].longitude;

            const cityName = data.results[0].name;

            const countryName = data.results[0].country;


            console.log("Latitude:", latitude);

            console.log("Longitude:", longitude);


            // STEP 2: Get the weather

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=auto`)
                .then(function(response) {

                    return response.json();

                })

                .then(function(weatherData) {

                    const weatherDescription = getWeatherDescription(weatherData.current.weather_code);

                    results.innerHTML = `

                        <h2>Current Weather</h2>

                        <h3 class="city-name">${cityName}, ${countryName}</h3>
                        <p>Weather: ${weatherDescription}</p>

                        <div class="weather-cards">

                            <div class="weather-card">

                                <h3>Temperature</h3>

                                <p>${weatherData.current.temperature_2m}°C</p>

                            </div>


                            <div class="weather-card">

                                <h3>Feels Like</h3>

                                <p>${weatherData.current.apparent_temperature}°C</p>

                            </div>


                            <div class="weather-card">

                                <h3>Humidity</h3>

                                <p>${weatherData.current.relative_humidity_2m}%</p>

                            </div>


                            <div class="weather-card">

                                <h3>Wind Speed</h3>

                                <p>${weatherData.current.wind_speed_10m} km/h</p>

                            </div>

                        </div>

                    `;

                });

        });

});