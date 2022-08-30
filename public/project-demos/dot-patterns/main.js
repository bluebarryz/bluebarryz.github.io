// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const x0 = width / 2;
const y0 = height / 2;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function degToRad(angle) {
  return angle * Math.PI / 180;
}

function autoRunToggle() {
  let toggle = document.getElementById("autoRunToggle");
  toggle.value = (toggle.value === "off" ? "on" : "off");
  toggle.innerHTML = "Auto Run: " + toggle.value;
  
  if (toggle.value === "on") {
    loop();
  }
}

function getAutoRun() {
  return document.getElementById("autoRunToggle").value;
}
function getRadiusScaler() {
  return document.getElementById("radiusScalerInput").value;
}

function getRotationAngle() {
  return degToRad(document.getElementById("rotationAngleInput").value);
}

function getDotArrangement() {
  return document.getElementById("dotArrangement").value;
}

function setDotArrangement(mode) {
  document.getElementById("dotArrangement").value = mode;
}




class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rad = Math.sqrt((this.x - x0) ** 2 + (this.y - y0) ** 2);
    this.angle = ((this.y - y0) < 0 ? -1 : 1) * Math.acos((this.x - x0) / this.rad);   
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(radScaler, turnAngle) {
    this.rad *= radScaler;
    this.x = this.rad * Math.cos(this.angle + turnAngle) + x0;
    this.y = this.rad * Math.sin(this.angle + turnAngle) + y0;
    this.angle += turnAngle
    
  }
}

let dots = [];
let dotsCreated = false;

function randomDots() {
  while(dots.length < 1500) {
    const size = random(1, 3);
    const dot = new Dot(
      random(0 + size, width - size),
      random(0 + size, height - size),
      size
    );
    dots.push(dot);
  }
  dotsCreated = true;
}

function latticeDots(rows) {
  const spacing = height / rows;
  const cols = Math.floor(width / spacing);
  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      const dot = new Dot(
        j * spacing,
        i * spacing,
        1
      );
      dots.push(dot);
    }  
  }
  dotsCreated = true;
}


function play(radScaler, turnAngle) {
  if (!dotsCreated) {
    reset(getDotArrangement());
  }
  for (const dot of dots) {
    dot.draw();
    dot.update(radScaler, turnAngle);
  }
}

function loop() {
  if (getAutoRun() === "on") {
    play(getRadiusScaler(), getRotationAngle());
  }
  setTimeout(() => requestAnimationFrame(loop), 900);
}


function reset(dotArrangement) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots = [];
  if (dotArrangement == "lattice") {
    latticeDots(100);
  } else if (dotArrangement == "random") {
    randomDots();
  }
}
