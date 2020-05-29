import React from "react";
class PureCanvas extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <canvas
        width={1100}
        height={32}
        ref={(node) =>
          node ? this.props.contextRef(node.getContext("2d")) : null
        }
      />
    );
  }
}

export default PureCanvas;
