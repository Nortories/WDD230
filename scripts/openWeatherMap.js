const apiKey = '909b9f5fd521f22b3362b573944f96a2';
const city = 'Rexburg';

// Get the weather div container element
const weatherElement = document.getElementById('weather-container');

// Get the weather data from the API
async function getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&forecast?id=524901&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
        //display weather data to console if response is ok
        console.log(`Weather data fetched succsesfully for ${city}`);
        console.log(data);
        //display weather data to HTML
        document.getElementById('city-name').textContent = city;
        document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
        document.getElementById('description').textContent = data.weather[0].description;
 
    } else {
        console.error(`Error fetching weather: ${data.message}`);
    }
}

getWeather();