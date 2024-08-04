import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects /> */}
      <Router>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
      <Contact />
    
    </div>
    
  );
};

export default App;
