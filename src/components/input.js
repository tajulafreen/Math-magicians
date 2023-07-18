import React, { useState } from 'react';
import Buttons from './button';
import calculate from '../logic/calculate';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const { total, next, operation } = result;

  const Handleclick = (e) => {
    const input = e.target.innerHTML;
    setResult(calculate(result, input));
  };
  const data = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];
  return (
    <div className="calculator">
      <h2>Let us do some Maths!</h2>
      <div className="container">
        <div className="input-container">{next || operation || total || 0}</div>
        {data.map((element) => (
          element === '÷' || element === 'x' || element === '-'
            || element === '=' || element === '+'
            ? (
              <Buttons
                className="btn"
                key={element}
                backgroundColor="orange"
                symbol={element}
                onClick={Handleclick}
              />
            )
            : (
              <Buttons
                className="btn"
                key={element}
                backgroundColor="gray"
                symbol={element}
                onClick={Handleclick}
              />
            )
        ))}
      </div>
    </div>
  );
};

export default Calculator;
