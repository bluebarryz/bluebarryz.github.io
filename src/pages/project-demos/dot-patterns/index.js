import React, { Component } from 'react'
import Canvas from '../../../components/Canvas'
import './style.css'
const width =  window.innerWidth;
const height =  window.innerHeight;

const x0 = width / 2;
const y0 = height / 2;

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
        this.angle = ((this.y - y0) < 0 ? -1 : 1) * Math.acos((this.x - x0) / this.rad);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = 'rgb(255, 255, 255)';
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
  dotsCreatedBool = true;
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
  dotsCreatedBool = true;
}

let dotsArray = [];
let dotsCreatedBool = false;

function play(ctx, radScaler, turnAngle) {
    for (const dot of dots) {
      dot.draw(ctx);
      dot.update(radScaler, turnAngle);
    }
}

function DotPatterns() {
    latticeDots(120);
    return (<Canvas draw={play} dots={dotsArray}/>);
}

export default DotPatterns;