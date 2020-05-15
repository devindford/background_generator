const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.querySelector("#gradient");
const button = document.querySelector(".randBtn");

function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  button.style.background = `linear-gradient(to top, ${color1.value}, ${color2.value})`;
  color1.style.background = color2.value;
  color2.style.background = color1.value;
  css.textContent = body.style.background + ";";
}

function random_bg_color() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x},${y},${z})`;
  return bgColor;
}

function randomBtn() {
  const bgColor = random_bg_color();
  const bgColor2 = random_bg_color();
  body.style.background = `linear-gradient(to right, ${bgColor}, ${bgColor2})`;
  button.style.background = `linear-gradient(to top, ${bgColor}, ${bgColor2})`;
  color1.style.background = bgColor2;
  color2.style.background = bgColor;
  css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomBtn);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
