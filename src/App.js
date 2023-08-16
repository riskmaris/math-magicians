import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import './index.css';
import './App.css';
import Calculator from './components/calculator';
import DatingQuotes from './components/DatingQuotes';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<DatingQuotes />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
