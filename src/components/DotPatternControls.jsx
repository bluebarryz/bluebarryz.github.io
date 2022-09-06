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
        this.props.sendValuesToApp(e.target.value);
    }

    render() {
        //console.log("Slider");
        console.log(this.state.value);
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

function FormCheck(props) {
    //console.log("FormCheck");
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
    render() {
        //console.log("Form");
        return (
            <form>
                <fieldset>
                    <FormCheck
                        id="latticeRadio"
                        value="lattice"
                        label="Lattice"
                        checked={this.props.dotArrangement === "lattice"}
                        handleChange={this.props.handleChange}
                    />
                    <FormCheck
                        id="randomRadio"
                        value="random"
                        label="Random"
                        checked={this.props.dotArrangement === "random"}
                        handleChange={this.props.handleChange}
                    />
                </fieldset>
            </form>
        );
    }
}

class DotPatternControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dotArrangement: this.props.dotArrangement,
            numDots: this.props.numDots,
            errMsg: null,
        };
    }

    handleChangeForm(e) {
        this.setState({ 
            dotArrangement: e.target.value,
            numDots: e.target.value === "lattice" ? 80 : 2000, 
        })
        this.props.dotArrangementChanged(e.target.value);       
    }

    render() {
        //console.log("DotPatternControls");
        //console.log(this.state.numDots)
        let numDotsSlider;
        if (this.state.dotArrangement === "lattice") {
            numDotsSlider = {
                sliderName: "Number of Rows of Dots",
                min: "1", max: "200", step: "1",
                sendValuesToApp: this.props.numDotsChanged
            };
        } else {
            numDotsSlider = {
                sliderName: "Number of Dots",
                min: "1", 
                max: "5000",
            };
        }
        return (
            <div className="DPControlsCntainer">
                <div>
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
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Parameters
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
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
                                    dotArrangement={this.state.dotArrangement}
                                    handleChange={this.handleChangeForm.bind(this)}
                                />
                                <Slider
                                    sliderID="numDotsInput"
                                    sliderName={numDotsSlider.sliderName}
                                    min={numDotsSlider.min} 
                                    max={numDotsSlider.max} 
                                    step="1"
                                    value={this.state.numDots}
                                    sendValuesToApp={this.props.numDotsChanged}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default DotPatternControls;

