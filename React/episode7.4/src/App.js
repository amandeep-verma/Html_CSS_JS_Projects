import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {

  const [excuse, setExcuse] = useState("");

  const fetchExcuse = (reason) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}/`).then((res) => {
      // console.log(res.data)
      setExcuse(res.data[0].excuse)
    })
  }



  return (
    <div className="App">
      <h1>Generate an Excuse</h1>
      <button onClick={() => {
        fetchExcuse('party')
      }
      }>Party</button>

      <button onClick={() => {
        fetchExcuse('family')
      }
      }>Family</button>

      <button onClick={() => {
        fetchExcuse('office')
      }
      }>Office</button>

      <h3>{excuse}</h3>
    </div>
  );
}

export default App;
