import React, { Component } from "react";
import Canvas from "./Canvas";
import Frets from "./Frets";
import GString from "./GString";

export class GStrings extends Component {
  render() {
    return (
      <div className="strings">
        {this.props.strings.map((string) => (
          <GString key={string.id} string={string}></GString>
        ))}
      </div>
    );
  }
}

export default GStrings;
