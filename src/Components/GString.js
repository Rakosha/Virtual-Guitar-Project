import React, { Component } from "react";
import Frets from "./Frets";
import Canvas from "./Canvas";
import GStringCanvas from "./GStringCanvas";
import CanvasTry from "./CanvasTry";
export class GString extends Component {
  state = { fretPressed: 0 };

  render() {
    const fretPressed = (data) => {
      if (data != null) this.setState({ fretPressed: data });
    };
    return (
      <div className="gString">
        {/* <Frets string={this.props.string} fretPressed={fretPressed}></Frets> */}
        <GStringCanvas
          string={this.props.string}
          fretPressed={this.state.fretPressed}
        ></GStringCanvas>
        {/* <CanvasTry /> */}
      </div>
    );
  }
}

export default GString;
