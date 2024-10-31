import React from 'react';
import './App.css';
import Header from './components/Header';
import MASCOT from './components/MASCOT';
import About from './components/About';
import Values from './components/Values';
import Participants from './components/Participants';
import Accomodations from './components/Accomodations';
import Team from './components/Team';

function App() {
  return (
    <>
      <Header />
      <MASCOT />
      <About />
      <Values />
      <Participants />
      <Accomodations />
      <Team />
    </>
  );
}

export default App;
