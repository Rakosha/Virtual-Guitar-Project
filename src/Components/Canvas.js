import React from "react";
import $ from "jquery";
class Canvas extends React.Component {
  componentDidMount(props) {
    this.updateCanvas(props);
  }

  componentDidUpdate(props) {
    this.updateCanvas(props);

    console.log(this.props.fretPressed);
  }

  updateCanvas(props) {
    this.fretPressed = this.props.fretPressed;

    const canvas = this.refs.canvas;
    const fretActive = this.props.fretPressed.isActive;
    //GSTRING main function =====================================================================
    function GString(ref, startPoint, endPoint) {
      //ctor
      this.canvas = ref;
      this.ctx = canvas.getContext("2d");
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      this.startPoint = startPoint;
      this.endPoint = endPoint;
      this.controlPoint = new Point(0, 0);
      this.lastMouseX = this.controlPoint.x;
      this.lastMouseY = this.controlPoint.y;
      this.count = 0;
      this.damping = 0.98;
      this.finishWave = false;
      //add event listener
      var self = this;

      self.click(self);
    }

    const fretPressed = this.props.fretPressed.id;

    //drawArc function =======================================================================
    GString.prototype.drawArc = function (
      startPoint,
      thirdPoint,
      endPoint,
      ctx
    ) {
      var dy1 = thirdPoint.y - startPoint.y;
      var dx1 = thirdPoint.x - startPoint.x;
      var dy2 = endPoint.y - thirdPoint.y;
      var dx2 = endPoint.x - thirdPoint.x;
      var aSlope = dy1 / dx1;
      var bSlope = dy2 / dx2;
      var centerX =
        (aSlope * bSlope * (startPoint.y - endPoint.y) +
          bSlope * (startPoint.x + thirdPoint.x) -
          aSlope * (thirdPoint.x + endPoint.x)) /
        (2 * (bSlope - aSlope));
      var centerY =
        (-1 * (centerX - (startPoint.x + thirdPoint.x) / 2)) / aSlope +
        (startPoint.y + thirdPoint.y) / 2;
      var r = dist(centerX, centerY, startPoint.x, startPoint.y);
      var angle = Math.atan2(centerX - startPoint.x, centerY - startPoint.y);

      ctx.beginPath();

      //MYLINE ----------------------------------------------------=================

      if (fretActive) {
        // Staring point (10,45)
        ctx.strokeStyle = "#FFFFFF";

        ctx.moveTo(0, 20);
        // End point (180,47)
        ctx.lineTo(fretPressed * 41 + 5, 20);
        // Make the line visible
        var gradient = ctx.createLinearGradient(100, 100, 500, 200);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "#23CE6B");
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }

      if (!angle || this.finishWave) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        //updown ANIMATION -----------------------------------------
      } else if (!this.finishWave) {
        if (angle > Math.PI / 2) {
          ctx.beginPath();
          ctx.arc(
            centerX,
            centerY,
            r,
            Math.PI * 1.5 - angle,
            Math.PI * 1.5 + angle,
            true
          );
        } else {
          ctx.beginPath();
          ctx.arc(
            centerX,
            centerY,
            r,
            Math.PI * 1.5 - angle,
            Math.PI * 1.5 + angle,
            false
          );
        }
      }
      //updown ANIMATION --end ---------------------------------
      var gradient = ctx.createLinearGradient(100, 100, 500, 200);
      gradient.addColorStop("0", "magenta");
      gradient.addColorStop("0.5", "blue");
      gradient.addColorStop("1.0", "#23CE6B");
      ctx.strokeStyle = gradient;
      ctx.stroke();
    };
    //drawArc function --end ==================================================================
    //draw function  ==========================================================================
    GString.prototype.draw = function () {
      // draw stuff
      var r = circleCenter(
        new Point(this.startPoint.x, this.startPoint.y),
        new Point(this.controlPoint.x, this.controlPoint.y),
        new Point(this.endPoint.x, this.endPoint.y)
      ).r;
      if (
        r > 2400 &&
        this.controlPoint.x > this.startPoint.x &&
        this.controlPoint.x < this.endPoint.x &&
        fretActive
      ) {
        this.drawArc(
          this.startPoint,
          this.controlPoint,
          this.endPoint,
          this.ctx
        );
        this.lastMouseX = this.controlPoint.x;
        this.lastMouseY = this.controlPoint.y;
        this.count = 0;
        this.finishWave = false;
        this.controlPoint.x = -1;
      } else {
        var x = this.lastMouseX;
        var y =
          this.startPoint.y +
          (this.lastMouseY - this.startPoint.y) *
            Math.cos((this.count / 5) * Math.PI) *
            Math.pow(this.damping, this.count);
        if (Math.pow(this.damping, this.count) < 0.1) {
          this.finishWave = true;
        }
        var wavePoint = new Point(x, y);
        this.drawArc(this.startPoint, wavePoint, this.endPoint, this.ctx);
        this.count++;
      }
    };
    //draw function --end  =====================================================================
    GString.prototype.clear = function () {
      // clear
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    GString.prototype.update = function () {
      // update
    };
    //---------------------------------------------------------------------ACTION LISTENER
    GString.prototype.click = function (self) {
      // self.controlPoint.x = pos.layerX;
      // self.controlPoint.y = pos.layerY;
      self.controlPoint.x = 1074; //CHANGED
      self.controlPoint.y = 32; //CHANGED
    };
    //---------------------------------------------------------------------ACTION LISTENER
    var dist = function (x, y, x0, y0) {
      return Math.sqrt((x -= x0) * x + (y -= y0) * y);
    };
    var circleCenter = function (startPoint, thirdPoint, endPoint) {
      var dy1 = thirdPoint.y - startPoint.y;
      var dx1 = thirdPoint.x - startPoint.x;
      var dy2 = endPoint.y - thirdPoint.y;
      var dx2 = endPoint.x - thirdPoint.x;
      var aSlope = dy1 / dx1;
      var bSlope = dy2 / dx2;
      var centerX =
        (aSlope * bSlope * (startPoint.y - endPoint.y) +
          bSlope * (startPoint.x + thirdPoint.x) -
          aSlope * (thirdPoint.x + endPoint.x)) /
        (2 * (bSlope - aSlope));
      var centerY =
        (-1 * (centerX - (startPoint.x + thirdPoint.x) / 2)) / aSlope +
        (startPoint.y + thirdPoint.y) / 2;
      var r = dist(centerX, centerY, startPoint.x, startPoint.y);
      return {
        x: centerX,
        y: centerY,
        r: r,
      };
    };
    var Point = function (x, y) {
      this.x = x;
      this.y = y;
    };

    if (this.props.fretPressed.isActive) {
      var myString = new GString(
        this.refs.canvas,
        new Point(this.props.fretPressed.id * 41 + 5, 20),
        new Point(2400, 20)
      );
    } else {
      var myString = new GString(
        this.refs.canvas,
        new Point(0, 20),
        new Point(2400, 20)
      );
    }

    (function animate() {
      // update
      myString.update();
      // clear
      myString.clear();

      // draw stuff
      myString.draw();

      // request new frame
      requestAnimationFrame(function () {
        animate();
      });
    })();

    window.onload = () => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    };
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" width={1100} height={32}></canvas>
      </div>
    );
  }
}

export default Canvas;
