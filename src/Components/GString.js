import React, { Component } from "react";
import Frets from "./Frets";
import Canvas from "./Canvas";

export class GString extends Component {
  state = { fretPressed: 0, fretCoords: 0, isFretActive: false };

  render() {
    const fretPressed = (data) => {
      if (data != null) {
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
