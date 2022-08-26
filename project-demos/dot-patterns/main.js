// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const x0 = width / 2;
const y0 = height / 2;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

class Dot {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rad = Math.sqrt((this.x - x0) ** 2 + (this.y - y0) ** 2);
    this.angle = (this.y - y0) / Math.abs(this.y - y0) * Math.acos((this.x - x0) / this.rad);   
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  update(radScaler, turnAngle) {
    console.log(this.size, this.x, this.y)
    this.rad *= radScaler;
    this.x = this.rad * Math.cos(this.angle + turnAngle) + x0;
    this.y = this.rad * Math.sin(this.angle + turnAngle) + y0;
    this.angle += turnAngle
    
  }
}

const dots = [];

// dots.push(new Dot(100, 100, 3), new Dot(800, 500, 4));

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
}

latticeDots(100);

function play() {
  //ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  //ctx.fillRect(0, 0, width, height);
  for (const dot of dots) {
    dot.draw();
    dot.update(Math.PI / 120);
  }
}

