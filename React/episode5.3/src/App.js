import './App.css';
import { useState } from 'react';
import { Task } from './Task.js'

function App() {

  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")


  const addTask = () => {
    if (newTask.trim() === "") return; // optional: prevent adding empty tasks

    const newObj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      taskCompleted: false
    }

    const newTodoList = [...todoList, newObj]

    setTodoList(newTodoList);
    setNewTask("") // to set the input as empty
  }


  const deleteTask = (id) => {
    const newTodoList = todoList.filter((eachVal) => eachVal.id !== id)
    setTodoList(newTodoList);
  }

  // We mark the tasks as complete
  const markComplete = (id) => {
    const newTodoList = todoList.map((value, key) => {
      if (id === value.id)
        // again we use spread operator so react can render it. Spread operator can be used for objects too
        return { ...value, taskCompleted: true };
      else
        return value;
    })
    setTodoList(newTodoList);
  }

  return (
    <div className="App">

      <div className="addTask">
        {/* we set the value as newTask to keep it empty */}
        <input type="text" value={newTask} onChange={(event) => {
          setNewTask(event.target.value)
        }} ></input>


        <button onClick={addTask}>Add Task</button>
      </div>


      <div className="list">
        {todoList.map((task) => {
          return <Task name={task.name} id={task.id} taskCompleted={task.taskCompleted} deleteTask={deleteTask} markComplete={markComplete} />
        })
        }
      </div>
    </div>
  );
}


export default App;
