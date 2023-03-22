import React, { useState } from 'react';
import Button from './Button';
import './Calculator.css'

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState(null);
  

  const handleClear = () => {
    setInputValue('0');
    setOperator(null);
    setFirstValue(null);
  };

  const handleClick = (event) => {
    const value = event.target.innerHTML;

    if (inputValue === '0') {
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };

  const handleDecimal = () => {
    if (!inputValue.includes('.')) {
      setInputValue(inputValue + '.');
    }
  };

  const handleOperator = (event) => {
    setOperator(event.target.innerHTML);
    setFirstValue(parseFloat(inputValue));
    setInputValue('');
  };

  const handleEquals = () => {
    if (operator && firstValue !== null) {
      switch (operator) {
        case '+':
          setInputValue(firstValue + parseFloat(inputValue));
          break;
        case '-':
          setInputValue(firstValue - parseFloat(inputValue));
          break;
        case '*':
          setInputValue(firstValue * parseFloat(inputValue));
          break;
        case '/':
          setInputValue(firstValue / parseFloat(inputValue));
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="calculator">
      <input id="display" readOnly value={inputValue} />

      <Button id="clear" onClick={handleClear}>
        AC
      </Button>
      <Button id="divide" className="operation" onClick={handleOperator}>
        /
      </Button>
      <Button id="seven" onClick={handleClick}>
        7
      </Button>
      <Button id="eight" onClick={handleClick}>
        8
      </Button>
      <Button id="nine" onClick={handleClick}>
        9
      </Button>
      <Button id="multiply" className="operation" onClick={handleOperator}>
        *
      </Button>
      <Button id="four" onClick={handleClick}>
        4
      </Button>
      <Button id="five" onClick={handleClick}>
        5
      </Button>
      <Button id="six" onClick={handleClick}>
        6
      </Button>
      <Button id="subtract" className="operation" onClick={handleOperator}>
        -
      </Button>
      <Button id="one" onClick={handleClick}>
        1
      </Button>
      <Button id="two" onClick={handleClick}>
        2
      </Button>
      <Button id="three" onClick={handleClick}>
        3
      </Button>
      <Button id="add" className="operation" onClick={handleOperator}>
        +
      </Button>
      <Button id="zero" onClick={handleClick}>
        0
      </Button>
      <Button id="decimal" onClick={handleDecimal}>
        .
      </Button>
      <Button id="equals" className="operation" onClick={handleEquals}>
        =
      </Button>
    </div>
  );
};

export default Calculator;

