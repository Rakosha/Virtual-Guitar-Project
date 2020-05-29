import React, { Component } from "react";
import Fret from "./Fret";
import anime from "animejs/lib/anime.es.js";
export class Frets extends Component {
  notes = [
    "c1",
    "c#1",
    "d1",
    "d#1",
    "e1",
    "f1",
    "f#1",
    "g1",
    "g#1",
    "a1",
    "a#1",
    "b1",

    "c2",
    "c#2",
    "d2",
    "d#2",
    "e2",
    "f2",
    "f#2",
    "g2",
    "g#2",
    "a2",
    "a#2",
    "b2",

    "c3",
    "c#3",
    "d3",
    "d#3",
    "e3",
    "f3",
    "f#3",
    "g3",
    "g#3",
    "a3",
    "a#3",
    "b3",

    "c4",
    "c#4",
    "d4",
    "d#4",
    "e4",
    "f4",
    "f#4",
    "g4",
    "g#4",
    "a4",
    "a#4",
    "b4",

    "c5",
    "c#5",
    "d5",
    "d#5",
    "e5",
    "f5",
    "f#5",
    "g5",
    "g#5",
    "a5",
    "a#5",
    "b5",

    "c6",
    "c#6",
    "d6",
    "d#6",
    "e6",
    "f6",
    "f#6",
    "g6",
    "g#6",
    "a6",
    "a#6",
    "b6",

    "c7",
    "c#7",
    "d7",
    "d#7",
    "e7",
    "f7",
    "f#7",
    "g7",
    "g#7",
    "a7",
    "a#7",
    "b7",
  ];

  getFretNotes = (note) => {
    const index = this.notes.indexOf(note);
    return this.notes.slice(index, index + 25);
  };

  setActive = (id) => {
    this.props.fretPressed(id);
    this.setState({
      fret: this.state.frets.map((cfret) => {
        if (cfret.id === id) {
          if (cfret.isActive) {
            cfret.isActive = !cfret.isActive;
          } else {
            cfret.isActive = !cfret.isActive;
          }
        } else {
          if (cfret.isActive) {
            cfret.isActive = !cfret.isActive;
          }
        }
        return cfret;
      }),
    });
  };

  fretNotes = this.getFretNotes(this.props.string.notePressed);

  state = {
    frets: [
      { id: 0, note: this.fretNotes[0], isActive: true },
      { id: 1, note: this.fretNotes[1], isActive: false },
      { id: 2, note: this.fretNotes[2], isActive: false },
      { id: 3, note: this.fretNotes[3], isActive: false },
      { id: 4, note: this.fretNotes[4], isActive: false },
      { id: 5, note: this.fretNotes[5], isActive: false },
      { id: 6, note: this.fretNotes[6], isActive: false },
      { id: 7, note: this.fretNotes[7], isActive: false },
      { id: 8, note: this.fretNotes[8], isActive: false },
      { id: 9, note: this.fretNotes[9], isActive: false },
      { id: 10, note: this.fretNotes[10], isActive: false },
      { id: 11, note: this.fretNotes[11], isActive: false },
      { id: 12, note: this.fretNotes[12], isActive: false },
      { id: 13, note: this.fretNotes[13], isActive: false },
      { id: 14, note: this.fretNotes[14], isActive: false },
      { id: 15, note: this.fretNotes[15], isActive: false },
      { id: 16, note: this.fretNotes[16], isActive: false },
      { id: 17, note: this.fretNotes[17], isActive: false },
      { id: 18, note: this.fretNotes[18], isActive: false },
      { id: 19, note: this.fretNotes[19], isActive: false },
      { id: 20, note: this.fretNotes[20], isActive: false },
      { id: 21, note: this.fretNotes[21], isActive: false },
      { id: 22, note: this.fretNotes[22], isActive: false },
      { id: 23, note: this.fretNotes[23], isActive: false },
      { id: 24, note: this.fretNotes[24], isActive: false },
    ],
  };

  render() {
    return (
      <div className="frets">
        {this.state.frets.map((fret) => (
          <Fret
            className={"fret" + fret.id}
            setActive={this.setActive}
            key={fret.id}
            fret={fret}
          />
        ))}
      </div>
    );
  }
}

export default Frets;
