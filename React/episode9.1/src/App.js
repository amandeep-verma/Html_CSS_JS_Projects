import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { Navbar } from './Navbar';
import { useState } from 'react';

function App() {
  // We use the userName and setUserName here and pass it onto the child and grand child pages as argument through props.
  // The idea is to make it better in next lesson
  const [userName, setUserName] = useState("Alpha")

  return (
    <div className="App">

      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home username={userName} />} />
          <Route path="/menu" element={<Menu username={userName} />} />
          {/* check here on the contact page */}
          <Route path="/contact" element={<Contact username={userName} setUserName={setUserName} />} />
          <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;