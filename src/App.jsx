import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Background from './components/Background';
import SectionTitle from './components/SectionTitle';
import ProjectButton from './components/ProjectButton';
import About from './components/About';
import SpotifyTitle from './components/SpotifyTitle';
import SpotifyWidget from './components/SpotifyWidget';
import Contact from './components/Contact';
import SocialMediaButton from './components/SocialMediaButton';

import ContentArea from './containers/ContentArea';
import Landing from './containers/Landing';
import Section from './containers/Section';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentArea>
        <Background />
        <Landing />
        <Section type="Section">
          <SectionTitle name="Projects" position="Left" />
          <ProjectButton name="Project-1" />
          <ProjectButton name="Project-2" />
          <ProjectButton name="Project-3" />
        </Section>
        <Section type="Section">
          <SectionTitle name="About Me" position="Right" />
          <About />
          <SpotifyTitle />
          <SpotifyWidget />
        </Section>
        <Section type="ContactSection">
          <SectionTitle name="Contact" position="Left" />
          <Contact />
          <SocialMediaButton alternative="Send me an email!" label="Email" position="Top" />
          <SocialMediaButton alternative="My GitHub account!" label="GitHub" position="Middle" />
          <SocialMediaButton alternative="My LinkedIn account!" label="LinkedIn" position="Bottom" />
        </Section>
      </ContentArea>
    </div>
  );
}

export default App;
