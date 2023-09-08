// Function to update the current day of the week
function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = dayOfWeek;
}

// Function to update the current UTC time in milliseconds
function updateUTCTime() {
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
}

// Update the day and time initially and then every second
updateDayOfWeek();
updateUTCTime();
setInterval(updateDayOfWeek, 1000); // Update every second
setInterval(updateUTCTime, 1000); // Update every second
