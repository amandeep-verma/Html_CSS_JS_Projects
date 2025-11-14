import './App.css';
// We import BrowserRouter, Routes, Route from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { Navbar } from './Navbar';

function App() {

  return (
    <div className="App">

      <Router>
        {/* We define nav bar inside Router */}
        <Navbar />

        {/* Routes is use to define all the route */}
        <Routes>

          {/* This is how we define Route path and elements is the imported page */}
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          {/* We use path = * , for path not defined */}
          <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;