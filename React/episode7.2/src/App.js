import './App.css';
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [catFact, setCatFact] = useState("");

  // We are going to use Axios since its smaller 
  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    })
  }

  // useEffect is just here to show how it can be used. This program is not using it.
  useEffect(() => fetchCatFact, []);


  return (
    <div className="App">
      <button onClick={fetchCatFact}> Generate Cat Fact</button>
      <p> </p>
      {catFact}
    </div>
  );
}

export default App;
