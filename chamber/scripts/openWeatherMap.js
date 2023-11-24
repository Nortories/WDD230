const apiKey = '909b9f5fd521f22b3362b573944f96a2';
const city = 'Bragg Creek';

// Get the weather div container element
const weatherElement = document.getElementById('weather-container');

// Get the weather data from the API
async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&forecast?id=524901&appid=${apiKey}`);
    const data = await response.json();

    if (response.ok) {
        //display weather data to console if response is ok
        console.log(`Weather data fetched successfully for ${city}`);
        console.log(data);
        //display weather data to HTML
        document.getElementById('city-name').textContent = city;
        document.getElementById('temperature').textContent = data.main.temp.toFixed(1);
        // Create an image element and append it to the weather-icon div
        
        const icon = document.createElement('img');
        icon.width = '50'; // Set the width of the image element to 50 pixels
        icon.height = '50'; // Set the height of the image element to 50 pixels
        icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        icon.alt = 'weather icon'; // Add alt attribute to the icon
        document.getElementById('weather-icon').appendChild(icon);
        // Display the weather description
        document.getElementById('description').textContent = data.weather[0].description;
        // Add three-day forecast to element id="three-day-forecast"
        const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=${apiKey}`);
        const forecastData = await forecastResponse.json();
        const forecastContainer = document.getElementById('three-day-forecast');
        forecastContainer.innerHTML = ''; // Clear previous forecast data

        console.log(forecastData);

        // Loop through the forecast data and display the forecast for 3 days
        // skip over the first 7 items in the weather data list (the first 24 hours)
        for (let i = 7; i < 24; i+=8) {
            const forecast = forecastData.list[i];
            const forecastDate = new Date(forecast.dt_txt).toLocaleDateString('en-US', {month: 'short', day: 'numeric' });
            const forecastTemperature = forecast.main.temp.toFixed(1);
            const forecastDescription = forecast.weather[0].description;

            const forecastItem = document.createElement('li');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `
                <div class="forecast-date">${forecastDate}</div>
                <div class="forecast-temperature">${forecastTemperature}°F</div>
                <div class="forecast-description">${forecastDescription}</div>
            `;
            forecastContainer.appendChild(forecastItem);
        }
        } else {
            console.error(`Error fetching weather: ${data.message}`);
        }
        }

        getWeather();
