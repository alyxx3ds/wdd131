document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Function to calculate windchill
function calculateWindChill(temp, windSpeed) {
    // Using Fahrenheit for Imperial (English) units
    if (temp <= 50 && windSpeed > 3) {
        return (35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °F";
    }
    // Using Celsius for Metric (SI) units
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + " °C";
    }
    return "N/A";
}

// Static values for temperature and wind speed
const temperature = 18; // °C
const windSpeed = 15;   // km/h

// Display the windchill factor if conditions are met
document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);