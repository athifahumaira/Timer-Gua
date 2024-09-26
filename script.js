// Set the countdown date
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

// Update the countdown every second
var x = setInterval(function() {
    // Get current time
    var now = new Date().getTime();
    
    // Calculate the time difference
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result
    document.getElementById("days").querySelector('.time').innerHTML = days;
    document.getElementById("hours").querySelector('.time').innerHTML = hours;
    document.getElementById("minutes").querySelector('.time').innerHTML = minutes;
    document.getElementById("seconds").querySelector('.time').innerHTML = seconds;
    
    // If the countdown ends
    if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "EXPIRED";
    }
}, 1000);