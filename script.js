function updateData() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const currentUTCTime = currentDate.getTime();

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Current Day of the weeek: ${currentDayOfWeek}`;

  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC time :${currentUTCTime}`;
}

// Update data on page load
updateData();

// Update data every minute (adjust the interval as needed)
setInterval(updateData, 60000);
