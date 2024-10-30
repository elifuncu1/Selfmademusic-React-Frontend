
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Edu from './components/Edu';


function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Edu/>
    </div>
  );
}

export default App;