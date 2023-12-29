import './App.css'
import { useEffect, useState } from 'react'
import moonIcon from "./assets/icon-moon.svg"
import sunIcon from "./assets/icon-sun.svg"
import checkIcon from "./assets/icon-check.svg"
import Tasklist from './Tasklist';
// import { DragDropContext } from 'react-beautiful-dnd';

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
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    if (isPending) {
      console.log("fetch called")
      fetch("http://localhost:8000/tasks")
        .then(response => {
          if (!response.ok) {
            throw Error('Could not fetch the data from the resource.');
          }
          return response.json();
        })
        .then(data => {
          setIsPending(false);
          setTasks(data);
          setError(null);
        })
        .catch(err => {
          setIsPending(false);
          setError(err.message);
        })
    }
  })

  const handleSubmit = (e) => {
    const status = active ? 1 : 0; 
    const newTask = {task, status}
    e.preventDefault()
    fetch("http://localhost:8000/tasks", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newTask)
    })
      .then((data) => data.json())
      .then((task) => {
        setTasks([
          ...tasks,
          task
        ])    
      })
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
        {/* <DragDropContext> */}
          <Tasklist isPending={isPending} error={error} tasks={tasks} setTasks={setTasks}/>
        {/* </DragDropContext> */}
        <div className="footer">
          Drag and drop to reorder list
        </div>
      </div>
    </div>
  )
}

export default App
