import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App">
      {currentPage === 'home' && <Home onNavigate={handleNavigation} />}
      {currentPage === 'contact' && <Contact onNavigate={handleNavigation} />}
    </div>
  );
}

export default App;