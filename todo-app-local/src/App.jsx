import './App.css'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import moonIcon from "./assets/icon-moon.svg"
import sunIcon from "./assets/icon-sun.svg"
import checkIcon from "./assets/icon-check.svg"
import Tasklist from './Tasklist';

function App() {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme"))==="dark"? "dark" : "light"; 
  });
  const toggleTheme = () => {
    const newTheme = theme==="light"? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  }
  const [task, setTask] = useState("");
  const [active, setActive] = useState(false);
  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    return storedTasks? storedTasks: [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const handleSubmit = (e) => {
    const status = active ? 1 : 0; 
    const newTask = {
      "id": uuidv4(), 
      "task": task,
      "status": status
    }
    e.preventDefault()
    const items = Array.from(tasks);
    items.push(newTask);
    setTasks(items);
    setActive(false);
    setTask("");
  }

  return (
    <div className='app' data-theme={theme}>
      <div className="main">
        <div className="header">
          <h1 className="brand">TODO</h1>
          <img src={theme==="light"? moonIcon: sunIcon} alt="Theme toggle icon" id="toggle-theme" onClick={toggleTheme} />
        </div>
        <form className="add-task" onSubmit={handleSubmit} data-status={active? 1 : 0}>
          <div className="status-indicator-wrapper" onClick={() => setActive(!active)}>
            <div className="status-indicator">
              <img src={checkIcon} className="status-icon" alt="Status icon"/>
            </div>
          </div>
          <input type="checkbox" checked={active} onChange={() => setActive(!active)} hidden/>
          <input id="task-input" type="text" placeholder='Create a new todo...' value={task} onChange={(e) => setTask(e.target.value)}/>
          <input type="submit" hidden/>
        </form>
        <Tasklist tasks={tasks} setTasks={setTasks}/>
        <div className="footer">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  )
}

export default App
