import { useState } from 'react'
import './App.css'

function App() {
  const [screenText, setScreenText] = useState("");
  const handleClick = (e) => {
    const literal = e.currentTarget.innerText;
    const last = screenText.at(-1);
    if (('0' <= literal && literal <= '9') || ('0' <= last && last <= '9'))
      setScreenText(screenText+literal);
    else if (last)
      setScreenText(screenText.slice(0, screenText.length-1)+literal);
    else if (literal === '.')
      setScreenText(".");
  }

  const handleDelete = () => {
    setScreenText(screenText.slice(0, screenText.length-1));
  }

  const handleReset = () => {
    setScreenText("");
  }

  const calculate = () => {
    // eslint-disable-next-line no-useless-escape
    var nums = screenText.split(/\/|\×|\-|\+/g);
    var operators = screenText.replace(/[0-9]|\./g, "").split("");
    if (nums.length !== operators.length + 1)
      operators = operators.slice(0, nums.length-1);

    var op = operators.indexOf("/");
    while (op != -1) {
      nums.splice(op, 2, nums[op]/nums[op+1]);
      operators.splice(op, 1);
      op = operators.indexOf("/");
    }

    op = operators.indexOf("×");
    while (op != -1) {
      nums.splice(op, 2, nums[op]*nums[op+1]);
      operators.splice(op, 1);
      op = operators.indexOf("×");
    }

    op = operators.indexOf("-");
    while (op != -1) {
      nums.splice(op, 2, nums[op]-nums[op+1]);
      operators.splice(op, 1);
      op = operators.indexOf("-");
    }
    op = operators.indexOf("+");
    while (op != -1) {
      nums.splice(op, 2, parseFloat(nums[op])+parseFloat(nums[op+1]));
      operators.splice(op, 1);
      op = operators.indexOf("+");
    }

    setScreenText(nums[0].toString());
  }

  return (
    <div className='app'>
      <div className="header">
        <div className='brand'>calc</div>
        <div className='toggle-theme'>
          <p>THEME</p>
          <div className='toggle-switch'>
            {/* Maybe use radio button */}
          </div> 
        </div>
      </div>
      <div className="screen">{ screenText }</div>
      <div className="keypad">
        <button className="btn-1" onClick={ (e) => handleClick(e) }>7</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>8</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>9</button>
        <button className="btn-2" id="delete" onClick={ handleDelete }>DEL</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>4</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>5</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>6</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>+</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>1</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>2</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>3</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>-</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>.</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>0</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>/</button>
        <button className="btn-1" onClick={ (e) => handleClick(e) }>×</button>
        <button className="btn-2" id='reset' onClick={ handleReset }>RESET</button>
        <button className="btn-3" id='equal' onClick={ calculate }>=</button>
      </div>
    </div>
  )
}

export default App
