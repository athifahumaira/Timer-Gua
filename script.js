let timerInterval;  // Variable to store the interval for the countdown

// Function to start the countdown timer
function startCountdown(countDownDate) {
    // Clear any previous interval if it's running
    if (timerInterval) clearInterval(timerInterval);

    // Update the countdown every second
    timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
        document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
        document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

        // If the countdown is over, clear the interval and show "EXPIRED"
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            alert("Countdown is over!");
        }
    }, 1000);
}

// Event listener for the "Start Timer" button
document.getElementById("startTimer").addEventListener("click", function () {
    const dateTimeInput = document.getElementById("datetime").value;
    
    if (dateTimeInput) {
        const countDownDate = new Date(dateTimeInput).getTime();
        startCountdown(countDownDate);
    } else {
        alert("Please select a valid date and time.");
    }
});

// Event listener for the "Reset Timer" button
document.getElementById("resetTimer").addEventListener("click", function () {
    // Clear the interval
    if (timerInterval) clearInterval(timerInterval);

    // Reset all timer display values to "00"
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";

    // Clear the datetime input field
    document.getElementById("datetime").value = "";
});