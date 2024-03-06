// Calculate time interval
let timeNow = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
timeNow = new Date(timeNow);
// Format timeNow to match the format of timeNotification
timeNow = timeNow.toISOString().slice(0, 19).replace('T', ' ');

let createdAt = "2024-02-13T12:13:36.634+00:00";
let timeNotification = new Date(createdAt);

// Adjust timeNotification to India's time zone
timeNotification.setHours(timeNotification.getHours() + 5);
timeNotification.setMinutes(timeNotification.getMinutes() + 30);

console.log("jai",timeNow,timeNotification)

// Get the time difference in milliseconds
let timeDiff = Math.abs(new Date(timeNow).getTime() - timeNotification.getTime());

// Convert milliseconds to seconds, minutes, hours, and days
let secondsDiff = Math.floor(timeDiff / 1000);
let minutesDiff = Math.floor(secondsDiff / 60);
let hoursDiff = Math.floor(minutesDiff / 60);
let daysDiff = Math.floor(hoursDiff / 24);

// Determine the appropriate time format based on the difference
let formattedDiff;
if (secondsDiff < 60) {
    formattedDiff = secondsDiff + " second" + (secondsDiff !== 1 ? "s" : "");
} else if (minutesDiff < 60) {
    formattedDiff = minutesDiff + " minute" + (minutesDiff !== 1 ? "s" : "");
} else if (hoursDiff < 24) {
    formattedDiff = hoursDiff + " hour" + (hoursDiff !== 1 ? "s" : "");
} else {
    formattedDiff = daysDiff + " day" + (daysDiff !== 1 ? "s" : "");
}

console.log("Time difference:", formattedDiff);
let timeDifference = formattedDiff;
