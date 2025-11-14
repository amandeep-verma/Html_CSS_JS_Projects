import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {

  // The program sends request to a url from input as name. The response from url contains json

  const [name, setName] = useState("");

  const [personData, setPersonData] = useState(null);

  // the component here calls to the url. We pass the object in the request body. We use backtick here to add the parametre to get request.
  const fetchAtrributes = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      setPersonData(res.data);
      setName("")
    })
  }

  return (
    <div className="App">

      <input value={name} placeholder='name' onChange={(event) => {
        setName(event.target.value)
      }}></input>

      <br></br>

      <button onClick={fetchAtrributes}>Predicat Age</button>

      {/* ? here displays data only when the object is not null/empty */}
      <h2> Name: {personData?.name}</h2>
      <h2> Age: {personData?.age}</h2>
      <h2> Count: {personData?.count}</h2>

    </div>
  );
}

export default App;
