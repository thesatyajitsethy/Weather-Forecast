const weatherConditions = [
    "Clear Sky", "Partly Cloudy", "Cloudy", "Rainy", "Thunderstorms", "Snowy", "Windy", "Foggy"
  ];
  
  function getRandomWeather() {
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomTemperature = (Math.random() * 40 - 10).toFixed(1);
    return {
      temperature: randomTemperature,
      condition: randomCondition
    };
  }
  
  function updateWeather(city, weatherData) {
    document.getElementById("location").innerText = city;
    document.getElementById("temperature").innerText = `Temperature: ${weatherData.temperature}°C`;
    document.getElementById("condition").innerText = `Condition: ${weatherData.condition}`;
    const weatherInfo = document.querySelector(".weather-info");
    weatherInfo.style.animation = "fade-in 1.5s ease";
  }
  
  document.getElementById("get-weather").addEventListener("click", () => {
    const city = document.getElementById("city").value.trim();
    if (city) {
      const weatherData = getRandomWeather();
      updateWeather(city, weatherData);
    } else {
      alert("Please enter a city name.");
    }
  });
  
  updateWeather("Default City", getRandomWeather());
  