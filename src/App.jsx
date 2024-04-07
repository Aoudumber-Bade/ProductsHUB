import { useState } from 'react';
import './App.css';
import HomePage from './components/home/HomePage';
import Contact from './components/contact/Contact';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blogs/Blog';
import About from './components/About/About';
import Sign from './components/signup/Sign';

function App(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
      {/* <HomePage/> */}
      {/* <Blog /> */}
      {/* <About /> */}
      
    </>
  );
}

export default App;
