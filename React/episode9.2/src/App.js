import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { Navbar } from './Navbar';
// We use newHook here createContext
import { useState, createContext } from 'react';

// This is how we createContext and we use it for 
export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Alpha")

  return (
    <div className="App">

      {/*  We define AppContext as an outer tag so all members inside can have access to it */}
      {/* As as we are not passing the states - variable and function to the component but we can still access them */}
      <AppContext.Provider value={{ userName, setUserName }}>
        
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;