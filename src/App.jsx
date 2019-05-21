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
import Footer from './components/Footer';

import ContentArea from './containers/ContentArea';
import Landing from './containers/Landing';
import Section from './containers/Section';

import { ReactComponent as EmailIcon } from './images/envelope.svg';
import { ReactComponent as GitIcon } from './images/github.svg';
import { ReactComponent as LinkedIcon } from './images/linkedin.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorScheme: '#5EDCFF', buttonColorClass: 'BlueIcon' };
  }

  setColor = (color) => {
    this.setState({ colorScheme: color });

    if (color === '#5EDCFF') {
      this.setState({ buttonColorClass: 'BlueIcon'});
    } else if (color === '#FFF056') {
      this.setState({ buttonColorClass: 'YellowIcon'});
    } else {
      this.setState({ buttonColorClass: 'GreenIcon'});
    }
  }

  render() {
    return (
      <div className="App">
        <Background colorScheme={this.state.colorScheme} />
        <Navbar />
        <ContentArea>
          <Landing colorScheme={this.state.colorScheme} />
          <Section type="Section">
            <SectionTitle name="Projects" position="Left" colorScheme={this.state.colorScheme} />
            <ProjectButton name="Project-1" />
            <ProjectButton name="Project-2" />
            <ProjectButton name="Project-3" />
          </Section>
          <Section type="Section">
            <SectionTitle name="About Me" position="Right" colorScheme={this.state.colorScheme} />
            <About />
            <SpotifyTitle />
            <SpotifyWidget />
          </Section>
          <Section type="ContactSection">
            <SectionTitle name="Contact" position="Left" colorScheme={this.state.colorScheme} />
            <Contact colorScheme={this.state.colorScheme} />
            <SocialMediaButton alternative="Send me an email!" label="Email" position="Top">
              <EmailIcon className={`Icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton alternative="My GitHub account!" label="GitHub" position="Middle">
              <GitIcon className={`Icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton alternative="My LinkedIn account!" label="LinkedIn" position="Bottom">
              <LinkedIcon className={`Icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <Footer colorScheme={this.state.colorScheme} />
          </Section>
        </ContentArea>
      </div>
    );
  }
}

export default App;
