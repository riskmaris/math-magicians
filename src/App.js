// import React from 'react';
// import './index.css';
// import Calculator from './components/calculator';
// import DatingQuotes from './components/DatingQuotes';

// function App() {
//   return (
//     <div>
//       <Calculator />
//       <DatingQuotes />
//     </div>

//   );
// }

// export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Quote from './components/Quote';
import './index.css';
import './App.css';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
