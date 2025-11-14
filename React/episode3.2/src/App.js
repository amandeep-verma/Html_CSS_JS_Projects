import './App.css';
// Importing user component from User.js
import { User } from './User'

function App() {

  // array
  const names = ["Pedro", "Jake", "Jessica", "Mike", "Dustin", "Lukas"]

  // object
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ]

  return (
    <div className="App">

      {/* To call array element */}
      <h1> {names[1]}</h1>

      {/* Use map function to loop through whole array */}
      {/* value - the value of the each element, key - is index */}
      <div>
        {names.map((name, key) => {
          return <h1 key={key}>{name} </h1>;
        })}
      </div>


      <div>
        {users.map((user, key) => {
          return <h1 key={key}>{user.name} {user.age} </h1>;
        })}
      </div>


      {/* We are storing the component in a different file and importing it */}
      FROM PROP CALLING: <User allusers={users} />

    </div>
  );
}


export default App;
