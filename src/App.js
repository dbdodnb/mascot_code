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
import metaPhoto from '../src/img/header/1.jpg';
import ScrollToTop from 'react-scroll-to-top';

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
      <ScrollToTop
        style={{
          borderRadius: '50%',
          boxShadow: 'none',
          backgroundColor: '#73AF0E',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        smooth
        component={
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 15L12 9L18 15"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />
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
