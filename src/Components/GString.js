import React, { Component } from "react";
import Frets from "./Frets";
import Canvas from "./Canvas";
import Tone from "tone";

import acousticC1 from "../GuitarSamples/Acoustic/c1.mp3";
import acousticCsharp1 from "../GuitarSamples/Acoustic/csharp1.mp3";
import acousticD1 from "../GuitarSamples/Acoustic/d1.mp3";
import acousticDsharp1 from "../GuitarSamples/Acoustic/dsharp1.mp3";
import acousticE1 from "../GuitarSamples/Acoustic/e1.mp3";
import acousticF1 from "../GuitarSamples/Acoustic/f1.mp3";
import acousticFsharp1 from "../GuitarSamples/Acoustic/fsharp1.mp3";
import acousticG1 from "../GuitarSamples/Acoustic/g1.mp3";
import acousticGsharp1 from "../GuitarSamples/Acoustic/gsharp1.mp3";
import acousticA1 from "../GuitarSamples/Acoustic/a1.mp3";
import acousticAsharp1 from "../GuitarSamples/Acoustic/asharp1.mp3";
import acousticB1 from "../GuitarSamples/Acoustic/b1.mp3";
import acousticC2 from "../GuitarSamples/Acoustic/c2.mp3";
import acousticCsharp2 from "../GuitarSamples/Acoustic/csharp2.mp3";
import acousticD2 from "../GuitarSamples/Acoustic/d2.mp3";
import acousticDsharp2 from "../GuitarSamples/Acoustic/dsharp2.mp3";
import acousticE2 from "../GuitarSamples/Acoustic/e2.mp3";
import acousticF2 from "../GuitarSamples/Acoustic/f2.mp3";
import acousticFsharp2 from "../GuitarSamples/Acoustic/fsharp2.mp3";
import acousticG2 from "../GuitarSamples/Acoustic/g2.mp3";
import acousticGsharp2 from "../GuitarSamples/Acoustic/gsharp2.mp3";
import acousticA2 from "../GuitarSamples/Acoustic/a2.mp3";
import acousticAsharp2 from "../GuitarSamples/Acoustic/asharp2.mp3";
import acousticB2 from "../GuitarSamples/Acoustic/b2.mp3";
import acousticC3 from "../GuitarSamples/Acoustic/c3.mp3";
import acousticCsharp3 from "../GuitarSamples/Acoustic/csharp3.mp3";
import acousticD3 from "../GuitarSamples/Acoustic/d3.mp3";
import acousticDsharp3 from "../GuitarSamples/Acoustic/dsharp3.mp3";
import acousticE3 from "../GuitarSamples/Acoustic/e3.mp3";
import acousticF3 from "../GuitarSamples/Acoustic/f3.mp3";
import acousticFsharp3 from "../GuitarSamples/Acoustic/fsharp3.mp3";
import acousticG3 from "../GuitarSamples/Acoustic/g3.mp3";
import acousticGsharp3 from "../GuitarSamples/Acoustic/gsharp3.mp3";
import acousticA3 from "../GuitarSamples/Acoustic/a3.mp3";
import acousticAsharp3 from "../GuitarSamples/Acoustic/asharp3.mp3";
import acousticB3 from "../GuitarSamples/Acoustic/b3.mp3";
import acousticC4 from "../GuitarSamples/Acoustic/c4.mp3";
import acousticCsharp4 from "../GuitarSamples/Acoustic/csharp4.mp3";
import acousticD4 from "../GuitarSamples/Acoustic/d4.mp3";
import acousticDsharp4 from "../GuitarSamples/Acoustic/dsharp4.mp3";
import acousticE4 from "../GuitarSamples/Acoustic/e4.mp3";
import acousticF4 from "../GuitarSamples/Acoustic/f4.mp3";
import acousticFsharp4 from "../GuitarSamples/Acoustic/fsharp4.mp3";
import acousticG4 from "../GuitarSamples/Acoustic/g4.mp3";
import acousticGsharp4 from "../GuitarSamples/Acoustic/gsharp4.mp3";
import acousticA4 from "../GuitarSamples/Acoustic/a4.mp3";
import acousticAsharp4 from "../GuitarSamples/Acoustic/asharp4.mp3";
import acousticB4 from "../GuitarSamples/Acoustic/b4.mp3";
import acousticC5 from "../GuitarSamples/Acoustic/c5.mp3";
import acousticCsharp5 from "../GuitarSamples/Acoustic/csharp5.mp3";
import acousticD5 from "../GuitarSamples/Acoustic/d5.mp3";
import acousticDsharp5 from "../GuitarSamples/Acoustic/dsharp5.mp3";
import acousticE5 from "../GuitarSamples/Acoustic/e5.mp3";
import acousticF5 from "../GuitarSamples/Acoustic/f5.mp3";
import acousticFsharp5 from "../GuitarSamples/Acoustic/fsharp5.mp3";
import acousticG5 from "../GuitarSamples/Acoustic/g5.mp3";
import acousticGsharp5 from "../GuitarSamples/Acoustic/gsharp5.mp3";
import acousticA5 from "../GuitarSamples/Acoustic/a5.mp3";
import acousticAsharp5 from "../GuitarSamples/Acoustic/asharp5.mp3";
import acousticB5 from "../GuitarSamples/Acoustic/b5.mp3";
import acousticC6 from "../GuitarSamples/Acoustic/c6.mp3";
import acousticCsharp6 from "../GuitarSamples/Acoustic/csharp6.mp3";
import acousticD6 from "../GuitarSamples/Acoustic/d6.mp3";
import acousticDsharp6 from "../GuitarSamples/Acoustic/dsharp6.mp3";
import acousticE6 from "../GuitarSamples/Acoustic/e6.mp3";
export class GString extends Component {
  constructor(props) {
    super(props);
    this.state = { fretPressed: 0, fretCoords: 0, isFretActive: false };
    this.guitarAcousticSampler = new Tone.Sampler(
      {
        C1: acousticC1,
        "C#1": acousticCsharp1,
        D1: acousticD1,
        "D#1": acousticDsharp1,
        E1: acousticE1,
        F1: acousticF1,
        "F#1": acousticFsharp1,
        G1: acousticG1,
        "G#1": acousticGsharp1,
        A1: acousticA1,
        "A#1": acousticAsharp1,
        B1: acousticB1,
        C2: acousticC2,
        "C#2": acousticCsharp2,
        D2: acousticD2,
        "D#2": acousticDsharp2,
        E2: acousticE2,
        F2: acousticF2,
        "F#2": acousticFsharp2,
        G2: acousticG2,
        "G#2": acousticGsharp2,
        A2: acousticA2,
        "A#2": acousticAsharp2,
        B2: acousticB2,
        C3: acousticC3,
        "C#3": acousticCsharp3,
        D3: acousticD3,
        "D#3": acousticDsharp3,
        E3: acousticE3,
        F3: acousticF3,
        "F#3": acousticFsharp3,
        G3: acousticG3,
        "G#3": acousticGsharp3,
        A3: acousticA3,
        "A#3": acousticAsharp3,
        B3: acousticB3,
        C4: acousticC4,
        "C#4": acousticCsharp4,
        D4: acousticD4,
        "D#4": acousticDsharp4,
        E4: acousticE4,
        F4: acousticF4,
        "F#4": acousticFsharp4,
        G4: acousticG4,
        "G#4": acousticGsharp4,
        A4: acousticA4,
        "A#4": acousticAsharp4,
        B4: acousticB4,
        C5: acousticC5,
        "C#5": acousticCsharp5,
        D5: acousticD5,
        "D#5": acousticDsharp5,
        E5: acousticE5,
        F5: acousticF5,
        "F#5": acousticFsharp5,
        G5: acousticG5,
        "G#5": acousticGsharp5,
        A5: acousticA5,
        "A#5": acousticAsharp5,
        B5: acousticB5,
        C6: acousticC6,
        "C#6": acousticCsharp6,
        D6: acousticD6,
        "D#6": acousticDsharp6,
        E6: acousticE6,
      },
      function () {}
    ).toMaster();
  }

  render() {
    const fretPressed = (data) => {
      if (data != null) {
        this.guitarAcousticSampler.triggerAttackRelease(data.note, "2n");

        this.setState({ fretPressed: data });
      }
      // this.props.srtring.isActive = !this.props.string.isActive;

      // this.props.string.isActive = !this.props.string.isActive;
    };

    return (
      <div className="gString">
        <Frets string={this.props.string} fretPressed={fretPressed}></Frets>
        <Canvas
          string={this.props.string}
          fretPressed={this.state.fretPressed}
        ></Canvas>
        {/* <CanvasTry /> */}
      </div>
    );
  }
}

export default GString;
