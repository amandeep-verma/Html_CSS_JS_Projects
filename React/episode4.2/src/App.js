import './App.css';
// We import useState from react library. useState is hook
import { useState } from 'react';

function App() {
  // Example 1
  // we are defining a variable age, which can be changed by setAge function and its default value is passed in useState
  const [age, setAge] = useState(0)

  // Here we call setFunction to set the newAge
  const increaseAge = () => {
    setAge(age + 1)
  };

  // Example 2
  const [input, changeInput] = useState("")

  // for onChange we have default parametre event
  const handleInputChange = (event) => {
    // event.target.value fetches the value of the input
    changeInput(event.target.value)
  }


  // Example 3
  const [isVisible, changeVisibility] = useState(true)

  // Example 4
  const [textColor, changeColor] = useState("red")


  // Example 5
  const [number, changeValue] = useState(0)



  return (
    <div className="App">
      {/* Example 1 */}
      <h1>{age}</h1>
      {/* On clicking button we call the function increaseAge */}
      <button onClick={increaseAge}>Increase Age</button>

      <br></br><br></br>

      {/* Example 2 */}
      {/* we are printing the input as we type in by using onChange */}
      <input type="text" onChange={handleInputChange}></input>
      <h2>{input}</h2>

      <br></br><br></br>

      {/* Example 3 */}
      {/* We make string appear/disappear with click of button */}
      {/* Here we are defining the anonymous function instead of creating function */}
      <button onClick={() => {
        changeVisibility(isVisible === true ? false : true)
      }}
      >
        Magic
      </button>
      {isVisible && <h1>Hi, my name is pedro</h1>}

      <br></br><br></br>


      {/* Example 4 */}
      {/* We are changing color of string by click*/}
      {/* As we did in example 3, we have anonymous/inline function */}
      <button onClick={() => {
        changeColor(textColor === "green" ? "red" : "green")
      }}
      >
        Magic
      </button>
      <h1 style={{ color: textColor }} >Hi, my name is pedro</h1>

      <br></br><br></br>

      {/* Example 4 */}
      {/* We have 3 buttons to inc/dec/set to zero the value of number*/}
      <button onClick={() => {
        changeValue(number + 1)
      }}>
        Increase
      </button>
      <button onClick={() => {
        changeValue(number - 1)
      }}>
        Decrease
      </button>
      <button onClick={() => {
        changeValue(0)
      }}>
        SetToZero
      </button>
      <h2>{number}
      </h2>


    </div>
  );
}



export default App;
