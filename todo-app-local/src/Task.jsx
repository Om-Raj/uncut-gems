import checkIcon from "./assets/icon-check.svg"
import crossIcon from "./assets/icon-cross.svg"
import "./Task.css"
// import { Draggable } from "react-beautiful-dnd";

const Task = ({id, task, status, toggleStatus, deleteTask}) => {
  
  return ( 
    // <Draggable>
      <div className="list-item" data-status={status}>
        <div className="status-indicator-wrapper" onClick={() => toggleStatus(id)}>
          <div className="status-indicator">
            <img src={checkIcon} className="status-icon" alt="Status icon"/>
          </div>
        </div>
        <div className="task">
          {task}
        </div>
        <div className="delete-item" onClick={() => deleteTask(id)}>
          <img src={crossIcon} alt="Cross icon" />
        </div>
      </div>
    // </Draggable>
  );
}
 
export default Task;