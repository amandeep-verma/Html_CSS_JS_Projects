import './App.css';
import Axios from "axios";

function App() {

  // this is how we fetch data from an API and converts it to json and display it on console
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  // We use Axios to fetch the data and display it on console
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data);
  })

  return (
    <div className="App">
      <button> Generate Cat Fact</button>
      <p> </p>
    </div>
  );
}

export default App;
