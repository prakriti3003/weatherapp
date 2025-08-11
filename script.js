const API_KEY = "330025e8d6fc186e38e606d38a7a097d"; // "330025e8d6fc186e38e606d38a7a097d"

function getWeather() {
    const resultDiv = document.getElementById("weatherInfo");
    const city = document.getElementById("cityInput").value;

    if (!city) {
        resultDiv.innerText = "Please enter a city name.";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                resultDiv.innerText = "City not found.";
            } else {
                const name = data.name;
                const temp = data.main.temp;
                const desc = data.weather[0].description;

                resultDiv.innerText = `📍 ${name}\n🌡️ ${temp}°C\n☁️ ${desc}`;
            }
        })
        .catch(error => {
            resultDiv.innerText = "Something went wrong.";
            console.error(error);
        });
}
