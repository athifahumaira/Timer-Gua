let timerInterval;  // Variable to store the interval for the countdown

// Function to start the countdown timer
function startCountdown(countDownDate) {
    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = (days < 10 ? "0" : "") + days;
        document.getElementById("hoursDisplay").innerHTML = (hours < 10 ? "0" : "") + hours;
        document.getElementById("minutesDisplay").innerHTML = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById("secondsDisplay").innerHTML = (seconds < 10 ? "0" : "") + seconds;

        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hoursDisplay").innerHTML = "00";
            document.getElementById("minutesDisplay").innerHTML = "00";
            document.getElementById("secondsDisplay").innerHTML = "00";
            alert("Countdown is over!");
        }
    }, 1000);
}

// Event listener for the "Start Timer" button
document.getElementById("startTimer").addEventListener("click", function () {
    const dateInput = document.getElementById("date").value;
    const timeInput = document.getElementById("time").value;

    if (dateInput && timeInput) {
        const selectedDateTime = new Date(dateInput + 'T' + timeInput).getTime();
        const hoursInput = parseInt(document.getElementById("hours").value || 0);
        const minutesInput = parseInt(document.getElementById("minutes").value || 0);
        const secondsInput = parseInt(document.getElementById("seconds").value || 0);

        const countDownDate = selectedDateTime + 
                              (hoursInput * 60 * 60 * 1000) + 
                              (minutesInput * 60 * 1000) + 
                              (secondsInput * 1000);

        startCountdown(countDownDate);
    } else {
        alert("Please select a valid date and time.");
    }
});

// Event listener for the "Reset Timer" button
document.getElementById("resetTimer").addEventListener("click", function () {
    if (timerInterval) clearInterval(timerInterval);

    document.getElementById("days").innerHTML = "00";
    document.getElementById("hoursDisplay").innerHTML = "00";
    document.getElementById("minutesDisplay").innerHTML = "00";
    document.getElementById("secondsDisplay").innerHTML = "00";

    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("hours").value = "";
    document.getElementById("minutes").value = "";
    document.getElementById("seconds").value = "";
});