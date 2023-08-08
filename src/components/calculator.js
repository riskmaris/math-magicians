import React, { useState } from 'react';
import Result from './result';
import calculate from '../logic/calculate';

function Calculator() {
  const [state, setState] = useState({ total: 0 });
  const btnClickHandler = (e) => {
    const math = calculate(state, e.target.innerHTML);
    setState(math);
  };

  return (
    <div className="calulator-container">
      <Result />
      <div className="wrapper-operation">
        <div>
          <button onClick={btnClickHandler} type="button" className="other-operations btn">AC</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn">+/-</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn">%</button>
          <button onClick={btnClickHandler} type="button" className="other-operations btn operator">&#247;</button>
        </div>

        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">7</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">8</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">9</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">X</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">4</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">5</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">6</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">-</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">1</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">2</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn btn">3</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  operator">+</button>
        </div>
        <div className="Digits-container">
          <button onClick={btnClickHandler} type="button" className="last-btn btn">0</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn  btn">.</button>
          <button onClick={btnClickHandler} type="button" className="digits-btn operator">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
