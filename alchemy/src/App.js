import GeneratorInputsForm from "./generatorInputsForm/generatorInputsForm.js";
import "./App.css";
import { getPotionInfo, NO_INFLUANCE, initCounters } from "./assests/formula.generator.js";
import { useState, useEffect } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

function App() {
  const [formula, setFurmula] = useState("");
  const [counters, setCounters] = useState(initCounters);
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");

  useEffect(() => {
    const countersS = reactLocalStorage.getObject("counters");
    if (typeof countersS === "array" || Object.keys(countersS).length === 0) return;
    if (countersS) setCounters(countersS);
  }, []);

  const onSetFormula = (formula) => {
    if (getPotionInfo(formula) !== NO_INFLUANCE) {
      const counters_ = { ...counters };
      counters_[formula] = counters_[formula] + 1;
      setCounters(counters_);
      reactLocalStorage.setObject("counters", counters_);
      setNotes(reactLocalStorage.getObject(formula).notes || []);
      setFurmula(formula);
    } else {
      setFurmula(null);
      setNotes([]);
    }
  };

  const counterDisplay = () => {
    if (!counters) return null;
    return Object.keys(counters).map((c) => {
      return <div className="counterItme">{`${c}: ${counters[c]}`}</div>;
    });
  };

  const onSaveNote = () => {
    if (formula === "") return;
    console.log(reactLocalStorage.getObject(formula));
    const notes_ = reactLocalStorage.getObject(formula).notes || [];
    console.log("notes_", notes_);
    notes_.push(curNote);
    reactLocalStorage.setObject(formula, { notes: notes_ });
    setNotes(notes_);
    setCurNote("");
  };

  return (
    <div className="App">
      <div className="mainCon">
        <div className="generatorCon">
          <div className="generator">
            <div className="generatorInputs">
              <GeneratorInputsForm setFormula={(formula) => onSetFormula(formula)} />
            </div>
            <div className="generatorOutputs">{formula ? getPotionInfo(formula) : ""}</div>
          </div>
          <div className="counters">
            <div>{counterDisplay()}</div>
          </div>
        </div>

        <div className="styleCol">
          <div></div>
          <div>
            <img src=""></img>
          </div>
        </div>

        <div className="notes">
          <div className="notesHistory">
            {notes.map((n) => {
              return <div>{n}</div>;
            })}
          </div>
          <textarea className="notesInput" value={curNote} onChange={(e) => setCurNote(e.target.value)} />
          <button
            disabled={!formula}
            className="notesBtn"
            onClick={() => {
              onSaveNote();
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
