// #region
let L2_1 = document.querySelector("#L2_1");
let L2_2 = document.querySelector("#L2_2");
let L2_3 = document.querySelector("#L2_3");
let L2_4 = document.querySelector("#L2_4");
let L2_5 = document.querySelector("#L2_5");
let color_button = document.querySelector("#color_button");
// #endregion

// 5. Lav en funktion der returnerer en tilfældig RGB farve værdi og tildel denne til et element du opretter, når brugeren klikker på en knap.

function get_random_color() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function set_random_gradient(element) {
  const color1 = get_random_color();
  const color2 = get_random_color();
  element.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

document.getElementById("color_button").addEventListener("click", function () {
  set_random_gradient(color_button);
});
