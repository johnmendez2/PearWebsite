import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Opalpage from './pages/home';
import PrismPage from './pages/prism';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Opalpage />} />
        <Route path="/prism" element={<PrismPage />} />
      </Routes>
    </Router>
  );
}

export default App;
