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
                    Reset Animation
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
                
                <form>
                    <input type="hidden" id="dotArrangement" value="lattice"></input>
                    <fieldset>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="latticeRadio" value="lattice" checked={true}></input>
                            <label className="form-check-label" htmlFor="latticeRadio">Lattice</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="randomRadio" value="random"></input>
                            <label className="form-check-label" htmlFor="randomRadio">Random</label>
                        </div>
                    </fieldset>
                </form> 
            </div>
        );
    }
}

export default DotPatternControls;

