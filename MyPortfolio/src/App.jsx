import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from '../src/Pages/Home';
import About from '../src/Pages/About';
import Projects from '../src/Pages/Projects';
import Experience from '../src/Pages/Experience';
import Contact from '../src/Pages/Contact';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <h1>hello</h1>
    </div>
  );
}

export default App;
