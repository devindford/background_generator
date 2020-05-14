var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var button = document.querySelector("#randBtn");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  return bgColor;
}

function randomBtn() {
  const bgColor = random_bg_color();
  const bgColor2 = random_bg_color();
  body.style.background = `linear-gradient(to right, ${bgColor}, ${bgColor2})`;
  css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomBtn);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
