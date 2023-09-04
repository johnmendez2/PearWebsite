import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrismPage from './pages/pearphone';
import PearbookPage from './pages/pearbook';
import Homepage from './pages/home';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
    
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setShowScrollToTop(scrollTop > 0);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
          <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products/pearphone" element={<PrismPage />} />
        <Route path="/products/pearbook" element={<PearbookPage />} />
      </Routes>
    </Router>
                  {showScrollToTop && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} height={'1em'}/>
        </div>
      )}
    </div>
    
  );
}

export default App;
