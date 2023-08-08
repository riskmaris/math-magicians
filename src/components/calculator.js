import React from "react";

function Calculator() {
    return (
        <div className="calulator-container">
        <div>
          <div className="input-filed">
            0
          </div>
        </div>
        <div className="wrapper-operation">
          <div>
            <button type="button" className="other-operations btn">AC</button>
            <button type="button" className="other-operations btn">+/-</button>
            <button type="button" className="other-operations btn">%</button>
            <button type="button" className="other-operations btn operator">&#247;</button>
          </div>

          <div className="Digits-container">
            <button type="button" className="digits-btn btn">7</button>
            <button type="button" className="digits-btn btn">8</button>
            <button type="button" className="digits-btn btn">9</button>
            <button type="button" className="digits-btn  operator">X</button>
          </div>
          <div className="Digits-container">
            <button type="button" className="digits-btn btn">4</button>
            <button type="button" className="digits-btn btn">5</button>
            <button type="button" className="digits-btn btn">6</button>
            <button type="button" className="digits-btn  operator">-</button>
          </div>
          <div className="Digits-container">
            <button type="button" className="digits-btn btn">1</button>
            <button type="button" className="digits-btn btn">2</button>
            <button type="button" className="digits-btn btn">3</button>
            <button type="button" className="digits-btn  operator">+</button>
          </div>
          <div className="Digits-container">
            <button type="button" className="last-btn btn">0</button>
            <button type="button" className="digits-btn  btn">.</button>
            <button type="button" className="digits-btn operator">=</button>
          </div>
        </div>
      </div>
    )
};

export default Calculator;