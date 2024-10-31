import React from 'react';
import './App.css';
import Header from './components/Header';
import MASCOT from './components/MASCOT';
import About from './components/About';
import Values from './components/Values';
import Participants from './components/Participants';
import Accomodations from './components/Accomodations';

function App() {
  return (
    <>
      <Header />
      <MASCOT />
      <About />
      <Values />
      <Participants />
      <Accomodations />
    </>
  );
}

export default App;
