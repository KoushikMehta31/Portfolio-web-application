
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Skills from './Components/Skills';
import MyProject from './Components/MyProject';
import Certifications from './Components/Certifications';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/myproject" element={<MyProject />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications/>} />
      </Routes>
    </Router>
  );
};

export default App;
