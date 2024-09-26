let timerInterval; // To store the interval so we can clear it later

// Function to start the countdown timer
function startCountdown(countDownDate) {
    // Clear any existing timer
    if (timerInterval) clearInterval(timerInterval);

    // Update the countdown every 1 second
    timerInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is over, show "EXPIRED"
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}

// Event listener for the "Start Timer" button
document.getElementById("startTimer").addEventListener("click", function() {
    // Get the input value (date and time) from the user
    const dateTimeInput = document.getElementById("datetime").value;

    // Check if the user has entered a valid date/time
    if (dateTimeInput) {
        // Convert the user's input to a timestamp
        const countDownDate = new Date(dateTimeInput).getTime();
        
        // Start the countdown
        startCountdown(countDownDate);
    } else {
        alert("Please select a valid date and time.");
    }
});