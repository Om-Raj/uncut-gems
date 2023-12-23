import './App.css'

function App() {

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
      <div className="screen">399,981</div>
      <div className="keypad">
        <button className="btn-1">7</button>
        <button className="btn-1">8</button>
        <button className="btn-1">9</button>
        <button className="btn-2" id="delete">DEL</button>
        <button className="btn-1">4</button>
        <button className="btn-1">5</button>
        <button className="btn-1">6</button>
        <button className="btn-1">+</button>
        <button className="btn-1">1</button>
        <button className="btn-1">2</button>
        <button className="btn-1">3</button>
        <button className="btn-1">-</button>
        <button className="btn-1">.</button>
        <button className="btn-1">0</button>
        <button className="btn-1">/</button>
        <button className="btn-1">x</button>
        <button className="btn-2" id='reset'>RESET</button>
        <button className="btn-3" id='equal'>=</button>
      </div>
    </div>
  )
}

export default App
