import './App.css';
import styles from './App2.module.css';

function App() {
  const age = 19;
  const isGreen = true;
  return (
    <div className="App">
      {/* We can import CSS files in React components */}
      <h1 className = "name"> Amandeep </h1>

      {/* // We can also import CSS modules */}
      <h1 className={styles.name2}> Amandeep2 </h1>

      Message: <MessageForClub age={age-2} />

      Message2: <MessageForClub2 age={age} />

      {/* Inline styles - Notice the brackets*/}
      <h1 style={{color: isGreen? "green":"red"}} >With a color</h1>

      {isGreen && <button> This is a button</button>}

    </div>
  );
}

// Conditional render
const MessageForClub = (props) => {
  if (props.age >= 18) {
    return <h1>Welcome to the club!</h1>;
  }else {
    return <h1>Sorry, you are not allowed!</h1>;
  }
}

// Conditional render using ternary operator
const MessageForClub2 = (props) => {
  return (
    <div>
      {props.age >= 18 ?  <h1>Welcome to the club!</h1>:<h1>Sorry, you are not allowed!</h1> }
    </div>
  )
}

export default App;
