import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MTB from './pages/MTB';
import Skiing from './pages/Skiing';
import Tramping from './pages/Tramping';
import Motorcycling from './pages/Motorcycling';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/mtb" element={<MTB />} />
          <Route path="/about/skiing" element={<Skiing />} />
          <Route path="/about/tramping" element={<Tramping />} />
          <Route path="/about/motorcycling" element={<Motorcycling />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
