import React, { Component } from "react";
import FretDot from "./FretDot";

export class Fret extends Component {
  fretId = this.props.fret.id;
  fretNote = this.props.fret.note;

  render() {
    const fret = this.props.fret;

    // const fretCoords = this.fretCoords;
    // console.log
    return (
      <div onClick={this.props.setActive.bind(this, fret)} className="fret">
        <FretDot
          isActive={this.props.fret.isActive}
          note={this.props.fret.note}
        ></FretDot>
      </div>
    );
  }
}

export default Fret;
