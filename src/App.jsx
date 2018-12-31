import React from 'react';
import './App.css';
import Landing from './containers/Landing';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Section from './containers/Section';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Landing />
      <Section>
        <SectionTitle />
      </Section>
    </div>
  );
}

export default App;
