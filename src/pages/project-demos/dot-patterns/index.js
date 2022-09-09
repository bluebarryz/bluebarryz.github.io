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

function randomDots(numDots) {
    let dots = [];
    while(dots.length < numDots) {
    const dot = new Dot(
        random(1, width - 1),
        random(1, height - 1),
        1
    );
    dots.push(dot);
    }
    return dots;
}

function latticeDots(rows) {
    let dots = [];
    const spacing = height / rows;
    const paddingTop = 5;
    const cols = Math.floor(width - paddingTop/ spacing);
    for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
        const dot = new Dot(
        j * spacing + paddingTop,
        i * spacing + paddingTop,
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
            reset: false,
        };
        this.values = {
            radiusScaler: 1,
            rotationAngle: Math.PI / 120,
            dotArrangement: "lattice",
            numDots: 80,
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
        this.setState({
            autoRun: !this.state.autoRun,
            reset: false,
        });
    }

    resetButtonClick() {
        const numDots = this.values.numDots;
        this.setState({
            dotsArray: this.values.dotArrangement === "lattice" ? latticeDots(numDots) : randomDots(numDots),
            autoRun: false,
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

    numDotsChanged(value) {
        this.values.numDots = value;
        this.resetButtonClick();
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
                    radiusScalar={this.values.radiusScaler}
                    rotationAngleChanged={(rotationAng) => this.rotationAngleChanged(rotationAng)}
                    rotationAngle={this.values.radiusScaler}
                    dotArrangementChanged={(arrangement) => this.dotArrangementChanged(arrangement)}
                    dotArrangement={this.values.dotArrangement}
                    numDotsChanged={(value) => this.numDotsChanged(value)}
                    numDots={this.values.numDots}
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