import './App.css';
import { useState } from 'react';
import { Text } from './Text'

// when you run the app, open the inspect mode and see html component text being mounted, updated and unmounted
function App() {


  const [showText, setShowText] = useState(false)

  return (
    <div className="App">
      <button onClick={() => {
        setShowText(!showText)
      }}>
        Show Text
      </button>

      {showText && <Text />}


    </div>
  );
}


export default App;
