import React from "react";
import "../stylesheets/buttons.css";

function Buttons(props) {
  return (
    <div className="buttonContainer">
      <button className="buttons" onClick={() => props.SetCurrentNumber(1)}>
        1
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(2)}>
        2
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(3)}>
        3
      </button>
      <button className="buttons" onClick={() => props.SetOperator("+")}>
        +
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(4)}>
        4
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(5)}>
        5
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(6)}>
        6
      </button>
      <button className="buttons" onClick={() => props.SetOperator("-")}>
        -
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(7)}>
        7
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(8)}>
        8
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(9)}>
        9
      </button>
      <button className="buttons" onClick={() => props.SetOperator("x")}>
        x
      </button>
      <button className="buttons" onClick={() => props.SetCurrentNumber(0)}>
        0
      </button>
      <button className="buttons" onClick={()=>props.Result()}>=</button>
      <button className="buttons" onClick={() => props.AllClear()}>
        AC
      </button>
      <button className="buttons" onClick={() => props.SetOperator("/")}>
        ÷
      </button>
    </div>
  );
}

export default Buttons;
