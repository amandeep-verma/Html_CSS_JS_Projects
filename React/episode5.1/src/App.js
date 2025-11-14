import './App.css';
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([])

  const [newTask, setNewTask] = useState("")

  // When you change the primitive data types their reference in memory changes which is why React re renders it
  // But when it comes to non-primitive data types (array, object) when you try to modify the original dataType, the reference remains the same, so although the object is changed but react won't re-render it. Which is why you should change the reference itself for non-primitive data types (array, object)
  const addTask = () => {
    // Spread operator - takes all the elements from this array and spread them into new array
    // We are creating an array composed of todoList with newTask element
    const newTodoList = [...todoList, newTask]
    setTodoList(newTodoList);
  }

  // As similar to above concept, we are going to create a new reference for react so as it re renders it
  const deleteTask = (value) => {
    // We use filter function to delete the matches elements
    const newTodoList = todoList.filter((eachVal) => eachVal !== value)
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


      <div className="list">
        {todoList.map((value, key) => {
          return (
            <div>
              <h1>{value}</h1>
              <button onClick={() => deleteTask(value)}>X</button>
            </div>
          )
        })
        }


      </div>
    </div>
  );
}



export default App;
