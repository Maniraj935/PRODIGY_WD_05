document.getElementById("getWeather").addEventListener("click", function() {
    const location = document.getElementById("location").value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={API_KEY}&units=metric";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Location not found");
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById("weatherDisplay");
            const { main, weather, wind } = data;
            weatherDisplay.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${main.temp} °C</p>
                <p>Conditions: ${weather[0].description}</p>
                <p>Wind Speed: ${wind.speed} m/s</p>
            `;
        })
        .catch(error => {
            document.getElementById("weatherDisplay").innerHTML = `<p>${error.message}</p>`;
        });
});
