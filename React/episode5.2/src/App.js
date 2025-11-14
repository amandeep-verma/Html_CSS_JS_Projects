import './App.css';
import { useState } from 'react';
import { Task } from './Task.js'

function App() {

  // We have array of objects
  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")


  const addTask = () => {
    // we define new object and its id, once done we add it the array using spread operator 
    const newObj = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask
    }

    const newTodoList = [...todoList, newObj]

    setTodoList(newTodoList);
  }


  const deleteTask = (id) => {
    // We use filter function to delete the matches elements
    const newTodoList = todoList.filter((eachVal) => eachVal.id !== id)
    setTodoList(newTodoList);
  }

  return (
    <div className="App">

      <div className="addTask">
        <input type="text" onChange={(event) => {
          setNewTask(event.target.value)
        }} ></input>


        <button onClick={addTask}>Add Task</button>
      </div>

      {/* We have the logic to display is in Task.js */}
      {/* We are simplying importing it using componenets to call it.  */}
      {/* Also notice we are passing deleteTask as parametre to componenet. Anything can be passed as props - variable, functions */}
      <div className="list">
        {todoList.map((task) => {
          return <Task name={task.name} id={task.id} deleteTask={deleteTask} />
        })
        }
      </div>
    </div>
  );
}



export default App;
