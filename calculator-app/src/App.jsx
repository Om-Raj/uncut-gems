import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [screenText, setScreenText] = useState("");
  const [theme, setTheme] = useState(() => {
    const themeStored = JSON.parse(localStorage.getItem("theme"));
    return themeStored ? themeStored : "default";
  })
  useEffect(() => {
    localStorage.setItem("theme",JSON.stringify(theme));
  }, [theme]);
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
    <div className="container" data-theme={theme==="default"? null: theme}>
      <div className='app'>
        <div className="header">
          <div className='brand'>calc</div>
          <div className='toggle-theme'>
            <p>THEME</p>
            <div className='toggler'>
              {/* Maybe use radio button */}
              <div className="theme-labels">
                <label htmlFor="theme-choice-1">1</label>
                <label htmlFor="theme-choice-2">2</label>
                <label htmlFor="theme-choice-3">3</label>
              </div>
              <div className="toggle-switch">
                <input type="radio" name="theme" className="theme-switch" id='theme-choice-1' checked={theme==="default"} onClick={() => setTheme("default")} value="default"/>
                <input type="radio" name="theme" className="theme-switch" id='theme-choice-2' checked={theme==="light"} onClick={() => setTheme("light")} value="light"/>
                <input type="radio" name="theme" className="theme-switch" id='theme-choice-3' checked={theme==="night"} onClick={() => setTheme("night")} value="night"/>
              </div>
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
    </div>
  )
}

export default App
