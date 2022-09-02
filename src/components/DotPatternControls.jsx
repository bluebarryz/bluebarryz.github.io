import React, { Component } from 'react'

function degToRad(angle) {
    return angle * Math.PI / 180;
}

function DotPatternControls(props) {
    return (
        <div className="DPControlsCntainer">
            <button
                id="playButton"
                onClick={props.playButtonClick}
            >
                Play Next

            </button>
            <button
                id="autoRunToggle"
            >
                Auto Run: off
            </button>
            <button
                id="resetButton"
            >
                Reset Animation
            </button>
            <label htmlFor="radiusScalerInput" className="form-label">Radius Scaler</label>
            <input
                type="range"
                className="form-range"
                id="radiusScalerInput"
                value="1" min="0.9" max="1.1" step="0.01"
            ></input>
            <output name="radiusScalerOutputName" id="radiusScalerOutput"></output>
            <label htmlFor="rotationAngleInput" className="form-label">Rotation Angle</label>
            <input
                type="range"
                className="form-range"
                id="rotationAngleInput"
                value="1.5" min="0.1" max="5.0" step="0.01"
            ></input>
            <output name="rotationAngleOutputName" id="rotationAngleOutput"></output>
            <form>
                <input type="hidden" id="dotArrangement" value="lattice"></input>
                <fieldset>
                    {/* <legend>Dot Arrangement</legend> */}
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

export default DotPatternControls;