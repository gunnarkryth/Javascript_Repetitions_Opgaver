let L4_1 = document.querySelector("#L4_1");
let L4_2 = document.querySelector("#L4_2");
let L4_3 = document.querySelector("#L4_3");
let L4_4 = document.querySelector("#L4_4");
let L4_5 = document.querySelector("#L4_5");

function start_countdown() {
  var input_seconds = document.getElementById("input_seconds").value;
  var countdown_display = document.getElementById("countdown_display");
  var start_button = document.getElementById("start_button");

  // Disable the input field and button
  document.getElementById("input_seconds").disabled = true;
  start_button.disabled = true;

  // Update the display and start the countdown
  countdown_display.textContent = input_seconds;
  var countdown_interval = setInterval(function () {
    input_seconds--;
    countdown_display.textContent = input_seconds;
    if (input_seconds <= 0) {
      clearInterval(countdown_interval);
      countdown_display.textContent = "Done!";
      // Re-enable the input field and button
      document.getElementById("input_seconds").disabled = false;
      start_button.disabled = false;
    }
  }, 1000);
}
