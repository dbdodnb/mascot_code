import React from 'react';
import './App.css';
import Header from './components/Header';
import MASCOT from './components/MASCOT';
import About from './components/About';
import Values from './components/Values';
import Participants from './components/Participants';
import Accomodations from './components/Accomodations';
import Team from './components/Team';
import Feedback from './components/Feedback';
import Partners from './components/Partners';
import Faq from './components/Faq';
import Footer from './components/Footer';

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
      <Feedback />
      <Partners />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
