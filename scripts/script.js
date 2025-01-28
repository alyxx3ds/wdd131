// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Check if the conditions are met for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        // Wind chill formula for Celsius (appropriate for the Metric system)
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        // If conditions are not met, return "N/A"
        return "N/A";
    }
}

// Set the temperature and wind speed (static values for now)
const temperature = 28; // Temperature in °C
const windSpeed = 15; // Wind speed in km/h

// Display the wind chill in the weather section
document.addEventListener("DOMContentLoaded", function() {
    const windChillElement = document.querySelector('.weather .windchill');
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `Wind Chill: ${windChill} °C`;

    // Display the current year and last modified date in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = document.lastModified;
});
