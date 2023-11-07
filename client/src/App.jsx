import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import { SegmentosContextProvider, SegmentsContext } from './context/ejemplocontext';


import './CSS/main.css';


const App = () => {
  return (
    <SegmentosContextProvider>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />

          </Routes>
        </Router>
      </div>
    </SegmentosContextProvider>
  );
};

export default App;
