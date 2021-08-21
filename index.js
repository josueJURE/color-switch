const color = document.querySelector(".myColor");
const btn = document.querySelector(".btn");
const body = document.body;

btn.addEventListener("click", switchColor)

function switchColor() {
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  let newColor = `rgb(${color1}, ${color2}, ${color3})`
  color.innerText = newColor;
  body.style.backgroundColor = newColor;
}
