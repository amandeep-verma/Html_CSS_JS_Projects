import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home';
import { Menu } from './Pages/Menu';
import { Contact } from './Pages/Contact';
import { Navbar } from './Navbar';
// We are importing QueryClient, QueryClientProvider from @tanstack/react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// StrictMode makes the request fetch data twice. As we saw in episode7
// So react suggests to use react-query

//  We create a variable of this client
//  We can pass on configuration here or leave it blank
// By default everytime you switch the page, the request to the api is made again unless we mention it to not to
const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
}
);

function App() {

  return (
    <div className="App">
      {/* We set react query to highest level, so we can have access to react query everywhere. It can be changed as per need */}
      <QueryClientProvider client={client}>

        <Router>
          <Navbar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
          </Routes>
        </Router>

      </QueryClientProvider>
    </div>
  );
}

export default App;