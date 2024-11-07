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
import { Helmet } from 'react-helmet';
import metaPhoto from '../src/img/header/1.jpg'

function App() {
  return (
    <>
      <Helmet>
        <title>MASCOT 2010-2025 | Summer Camp of Teamwork</title>
        <meta
          name="description"
          content="Camp MASCOT is a 10-day program for Ukrainian proactive teenagers aimed to build a bright future in Ukraine."
        />
        <meta property="og:image" content={metaPhoto} />
      </Helmet>
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
