import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Gallery from './pages/Gallery';
import Faculty from './pages/Faculty';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'achievements':
        return <Achievements />;
      case 'gallery':
        return <Gallery />;
      case 'faculty':
        return <Faculty />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;