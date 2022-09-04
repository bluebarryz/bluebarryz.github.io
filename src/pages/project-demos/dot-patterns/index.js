import React, { Component } from 'react'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import Canvas from '../../../components/Canvas'
import DotPatternControls from '../../../components/DotPatternControls'
import './style.css'

const width =  window.innerWidth;
const height =  window.innerHeight;

const x0 = width / 2;
const y0 = height / 2;

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function degToRad(angle) {
    return angle * Math.PI / 180;
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

function randomDots() {
    let dots = [];
    while(dots.length < 1500) {
    const size = random(1, 3);
    const dot = new Dot(
        random(0 + size, width - size),
        random(0 + size, height - size),
        size
    );
    dots.push(dot);
    }
    return dots;
}

function latticeDots(rows) {
    let dots = [];
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
    return dots;
}

class DotPatterns extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dotsArray: latticeDots(80),
            autoRun: false,
            autoRun: false,
            reset: false,
        };
        this.values = {
            radiusScaler: 1,
            rotationAngle: Math.PI / 120,
            dotArrangement: "lattice",
        };
    }

    play(ctx) {
        for (const dot of this.state.dotsArray) {
          dot.draw(ctx);
          dot.update(this.values.radiusScaler, this.values.rotationAngle);
        }
    }

    playButtonClick() {
        this.setState({reset: false});
    }

    autoRunButtonClick() {
        this.setState({autoRun: !this.state.autoRun});
    }

    resetButtonClick() {
        this.setState({
            dotsArray: this.values.dotArrangement === "lattice" ? latticeDots(80) : randomDots(),
            reset: true,
        });
    }

    radiusScalarChanged(radScaler) {
        this.values.radiusScaler = radScaler;
    }

    rotationAngleChanged(rotationAng) {
        this.values.rotationAngle = degToRad(rotationAng);
    }

    dotArrangementChanged(arrangement) {
        this.values.dotArrangement = arrangement;
    }

    render() {
        return (
            <div>
                <DotPatternControls 
                    playButtonClick={() => this.playButtonClick()}
                    autoRunButtonClick={() => this.autoRunButtonClick()}
                    autoRun={this.state.autoRun}
                    resetButtonClick={() => this.resetButtonClick()}
                    radiusScalarChanged={(radScaler) => this.radiusScalarChanged(radScaler)}
                    rotationAngleChanged={(rotationAng) => this.rotationAngleChanged(rotationAng)}
                    dotArrangementChanged={(arrangement) => this.dotArrangementChanged(arrangement)}
                />
                <Canvas 
                    draw={(ctx) => this.play(ctx)} 
                    reset={this.state.reset}
                    autoRun={this.state.autoRun}
                />
            </div>
        );
    }

}

export default DotPatterns;