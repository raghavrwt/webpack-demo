import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dynamic" element={<DynamicPage />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;