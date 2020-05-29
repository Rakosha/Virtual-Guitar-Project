import React, { Component } from "react";

export class FretDot extends Component {
  getStyle = (isActive) => {
    return {
      display: isActive ? "block" : "hidden",
    };
  };

  render() {
    return this.props.isActive ? (
      <div className="fretDot" style={this.getStyle(this.props.isActive)}>
        {this.props.isActive ? this.props.note : ""}
      </div>
    ) : (
      ""
    );

    // );
  }
}

export default FretDot;
