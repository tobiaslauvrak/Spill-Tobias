const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function fullskjermCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

fullskjermCanvas();
window.addEventListener("resize", fullskjermCanvas);

ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);