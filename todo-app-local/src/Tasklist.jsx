import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import "./Tasklist.css"
import { useState } from "react";

const Tasklist = ({tasks, setTasks}) => {
  const [filter, setFilter] = useState(2);
  
  const toggleStatus = (id) => {
    var idx;
    for(var i=0; i<tasks.length; i++) {
      if (tasks[i].id === id) {
        idx = i;
        break;
      }
    }
    const newTasks = Array.from(tasks);
    newTasks.splice(idx, 1, {
      id: id,
      task: tasks[idx].task,
      status: tasks[idx].status ? 0 : 1
    })
    setTasks(newTasks);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id!==id));
  }

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => task.status===0))
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(tasks);
    const [item] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, item);
    setTasks(items);
  }

  return ( 
      <div className="list">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="task-list">
              {(provided) => (
                <div id='task-list' {...provided.droppableProps} ref={provided.innerRef}>
                  {tasks.filter(item => item.status^filter).map(({id, task, status}, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                          <Task  id={id} task={task} status={status} toggleStatus={toggleStatus} deleteTask={deleteTask} key={id}/>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        <div className="list-options">
          <div className="item-count">{ tasks && tasks.filter(task => task.status===0).length } items left</div>
          <div className="filters">
            <div className="filter-all" data-filter-active={filter===2} onClick={() => setFilter(2)}>All</div>
            <div className="filter-active" data-filter-active={filter===1} onClick={() => setFilter(1)}>Active</div>
            <div className="filter-done" data-filter-active={filter===0} onClick={() => setFilter(0)}>Completed</div>
          </div>
          <div className="clear-completed" onClick={clearCompleted}>Clear Completed</div>
        </div>
      </div>
  );
}
 
export default Tasklist;