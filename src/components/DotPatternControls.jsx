import React, { Component } from 'react'

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        }
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        this.props.sendValuesToApp(this.state.value);
    }

    render() {
        return (
            <div className="slider">
                <label htmlFor={this.props.sliderID} className="form-label">{this.props.sliderName}</label>
                <input
                    type="range"
                    className="form-range"
                    id={this.props.sliderID}
                    value={this.state.value} 
                    min={this.props.min} max={this.props.max} step={this.props.step}
                    onChange={this.handleChange.bind(this)}
                ></input>
                <label htmlFor={this.props.sliderID} className="form-label slider-value">{this.state.value}</label>
            </div>
        );
    }
}

function FormCheck(props){   
    return (
        <div className="form-check form-check-inline">
            <input 
                className="form-check-input" 
                type="radio" 
                name="inlineRadioOptions" 
                id={props.id} 
                value={props.value}
                checked={props.checked}
                onChange={props.handleChange}
            ></input>
            <label className="form-check-label" htmlFor="latticeRadio">{props.label}</label>
        </div>
    );  
}

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        this.props.dotArrangementChanged(e.target.value);
    }

    render() {
        return (
            <form>
                <fieldset>
                    <FormCheck
                        id="latticeRadio"
                        value="lattice"
                        label="Lattice"
                        checked={this.state.value === "lattice"}
                        handleChange={this.handleChange}
                    />
                    <FormCheck
                        id="randomRadio"
                        value="random"
                        label="Random"
                        checked={this.state.value === "random"}
                        handleChange={this.handleChange}
                    />
                </fieldset>
            </form>
        );
    }
}

class DotPatternControls extends React.Component {
    render() {
        return (
            <div className="DPControlsCntainer">
                <button
                    id="playButton"
                    onClick={this.props.playButtonClick}
                >
                    Play Next
                </button>
                <button
                    id="autoRunToggle"
                    onClick={this.props.autoRunButtonClick}
                >
                    Auto Run: {this.props.autoRun ? "On" : "Off"}
                </button>
                <button
                    id="resetButton"
                    onClick={this.props.resetButtonClick}
                >
                    Reset
                </button>

                <Slider 
                    sliderID="radiusScalerInput" 
                    sliderName="Radius Scaler" 
                    min="0.9" max="1.1" step="0.01"
                    value="1"
                    sendValuesToApp={this.props.radiusScalarChanged}
                />
                <Slider 
                    sliderID="rotationAngleInput" 
                    sliderName="Rotation Angle" 
                    min="0.1" max="5" step="0.01"
                    value="1.5"
                    sendValuesToApp={this.props.rotationAngleChanged}
                />
                <Form 
                    value="lattice"
                    dotArrangementChanged={this.props.dotArrangementChanged}
                />
                
            </div>
        );
    }
}

export default DotPatternControls;

