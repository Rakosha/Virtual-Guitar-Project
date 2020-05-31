import React, { Component } from "react";
import "./main.css";
import GStrings from "./GStrings";

export class GuitarNeck extends Component {
  componentDidMount() {}

  state = {
    guitars: {
      sixString: {
        isActive: true,
        strings: [
          {
            id: 1,
            tuning: "e4",
            isActive: false,
            notePressed: "e4",
            fretPressed: 0,
          },
          {
            id: 2,
            tuning: "b3",
            isActive: false,
            notePressed: "b3",
            fretPressed: 0,
          },
          {
            id: 3,
            tuning: "g3",
            isActive: false,
            notePressed: "g3",
            fretPressed: 0,
          },
          {
            id: 4,
            tuning: "d3",
            isActive: false,
            notePressed: "d3",
            fretPressed: 0,
          },
          {
            id: 5,
            tuning: "a2",
            isActive: false,
            notePressed: "a2",
            fretPressed: 0,
          },
          {
            tuning: "e2",
            isActive: false,
            notePressed: "e2",
            fretPressed: 0,
          },
        ],
      },
    },
  };

  render() {
    return (
      <div className="guitar-neck">
        <GStrings strings={this.state.guitars.sixString.strings}></GStrings>

        <div className="visual">
          <div className="fret fret0"></div>
          <div className="fret fret1"></div>
          <div className="fret fret2"></div>
          <div className="fret fret3">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret4"></div>
          <div className="fret fret5">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret6"></div>
          <div className="fret fret7">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret8"></div>
          <div className="fret fret9">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret10"></div>
          <div className="fret fret11"></div>
          <div className="fret fret12">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret13"></div>
          <div className="fret fret14"></div>
          <div className="fret fret15">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret16"></div>
          <div className="fret fret17">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret18"></div>
          <div className="fret fret19">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret20"></div>
          <div className="fret fret21">
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
          <div className="fret fret22"></div>
          <div className="fret fret23"></div>
          <div className="fret fret24">
            {" "}
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
            <svg
              viewBox="0 0 120 120"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle fill="#ECD444" cx="60" cy="60" r="30" />
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default GuitarNeck;
