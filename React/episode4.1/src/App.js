import './App.css';

function App() {
  // define as let instead of const
  let age = 0

  const increaseAge = () => {
    age = age + 1;
    console.log(age);
  };

  return (
    // age increases on button click as it can be seen on console but not the display
    <div className="App">
      {/*  the age is not changing here, why? Because we are not rerendering it */}
      {age}
      <br></br>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default App;
