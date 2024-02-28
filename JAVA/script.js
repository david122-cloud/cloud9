const countDownDate = new Date("Mar 9, 2024 00:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("Days").innerHTML = formatTime(days);
  document.getElementById("Hours").innerHTML = formatTime(hours);
  document.getElementById("Minutes").innerHTML = formatTime(minutes);
  document.getElementById("Seconds").innerHTML = formatTime(seconds);
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}