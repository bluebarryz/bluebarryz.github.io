import React, { Component } from 'react'

function Slider(props) {
    //console.log("Slider");
    return (
        <div className="slider">
            <label htmlFor={props.sliderID} className="form-label">{props.sliderName}</label>
            <input
                type="range"
                className="form-range"
                id={props.sliderID}
                value={props.value}
                min={props.min} max={props.max} step={props.step}
                onChange={props.handleChange}
            ></input>
            <label htmlFor={props.sliderID} className="form-label slider-value">{props.value}</label>
        </div>
    );
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
            <form className="dot-arrangement-form">
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
            radiusScalar: this.props.radiusScalar,
            rotationAngle: this.props.rotationAngle,
            dotArrangement: this.props.dotArrangement,
            numDots: this.props.numDots,
            errMsg: null,
        };
    }

    handleChangeSlider(e, sendValuesToApp) {
        this.setState({ [e.target.id]: e.target.value });
        sendValuesToApp(e.target.value);
    }

    handleChangeForm(e) {
        const radiusScalarNew = (e.target.value === "lattice" ? 1 : 1.04);
        const dotArrangementNew = e.target.value;
        const numDotsNew = (e.target.value === "lattice" ? 80 : 2000);
        this.setState({
            radiusScalar: radiusScalarNew,
            dotArrangement: dotArrangementNew,
            numDots: numDotsNew,
        })
        this.props.radiusScalarChanged(radiusScalarNew);
        this.props.dotArrangementChanged(dotArrangementNew);
        this.props.numDotsChanged(numDotsNew);
    }

    render() {
        //console.log("DotPatternControls");
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
                </div>

                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Controls
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
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
                                    sliderID="radiusScalar"
                                    sliderName="Radius Scaler"
                                    min="0.9" max="1.1" step="0.01"
                                    value={this.state.radiusScalar}
                                    sendValuesToApp={this.props.radiusScalarChanged}
                                    handleChange={(e) => this.handleChangeSlider(e, this.props.radiusScalarChanged)}
                                />
                                <Slider
                                    sliderID="rotationAngle"
                                    sliderName="Rotation Angle"
                                    min="0.1" max="5" step="0.01"
                                    value={this.state.rotationAngle}
                                    sendValuesToApp={this.props.rotationAngleChanged}
                                    handleChange={(e) => this.handleChangeSlider(e, this.props.rotationAngleChanged)}
                                />
                                <Form
                                    dotArrangement={this.state.dotArrangement}
                                    handleChange={this.handleChangeForm.bind(this)}
                                />
                                <Slider
                                    sliderID="numDots"
                                    sliderName={numDotsSlider.sliderName}
                                    min={numDotsSlider.min}
                                    max={numDotsSlider.max}
                                    step="1"
                                    value={this.state.numDots}
                                    sendValuesToApp={this.props.numDotsChanged}
                                    handleChange={(e) => this.handleChangeSlider(e, this.props.numDotsChanged)}
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

