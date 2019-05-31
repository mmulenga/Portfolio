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
    this.state = {
      colorScheme: '#5EDCFF',
      buttonColorClass: 'BlueIcon',
      targetSection: 'home' 
    };

    this.contentAreaRef = React.createRef();
    this.landingSectionRef = React.createRef();
    this.projectSectionRef = React.createRef();
    this.aboutSectionRef = React.createRef();
    this.contactSectionRef = React.createRef();

    this.dict = new Map();
  }

  componentDidMount() {
    // This will need to be refactored to some more elegant/efficient process.
    this.dict.set('home', this.landingSectionRef);
    this.dict.set('project', this.projectSectionRef);
    this.dict.set('about', this.aboutSectionRef);
    this.dict.set('contact', this.contactSectionRef);
  }

  scrollToSection = (section) => {
    this.contentAreaRef.current.scrollTo({ top: this.dict.get(section).current.offsetTop, behavior: 'smooth'});
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

  setTargetSection = (position) => {
    if (this.inRange(position, 0, this.projectSectionRef.current.offsetTop) &&
        this.state.targetSection !== 'home') {
          this.setState({targetSection: 'home'});
    } else if (this.inRange(position, this.projectSectionRef.current.offsetTop, this.aboutSectionRef.current.offsetTop) && 
        this.state.targetSection !== 'project') {
          this.setState({targetSection: 'project'});
    } else if (this.inRange(position, this.aboutSectionRef.current.offsetTop, this.contactSectionRef.current.offsetTop) &&
        this.state.targetSection !== 'about') {
          this.setState({targetSection: 'about'});
    } else if (this.inRange(position, this.contactSectionRef.current.offsetTop, this.contactSectionRef.current.offsetTop +
       this.contactSectionRef.current.offsetHeight) &&
        this.state.targetSection !== 'contact') {
          this.setState({targetSection: 'contact'});
    }
  }
  
  inRange = (value, min, max) => {
    return (value >= min / 1.25 && value <= max / 1.25);
  }

  render() {
    return (
      <div className="App">
        <Background colorScheme={this.state.colorScheme} />
        <Navbar 
          scrollToSection={this.scrollToSection}
          targetSection={this.state.targetSection}
          colorScheme={this.state.colorScheme} />
        <ContentArea ref={this.contentAreaRef} setTargetSection={this.setTargetSection}>
          <Landing ref={this.landingSectionRef} colorScheme={this.state.colorScheme} />
          <Section ref={this.projectSectionRef} type="Section">
            <SectionTitle name="Projects" position="Left" colorScheme={this.state.colorScheme} />
            <ProjectButton name="Project-1" />
            <ProjectButton name="Project-2" />
            <ProjectButton name="Project-3" />
          </Section>
          <Section ref={this.aboutSectionRef} type="Section">
            <SectionTitle name="About Me" position="Right" colorScheme={this.state.colorScheme} />
            <About />
            <SpotifyTitle />
            <SpotifyWidget />
          </Section>
          <Section ref={this.contactSectionRef} type="ContactSection">
            <SectionTitle name="Contact" position="Left" colorScheme={this.state.colorScheme} />
            <Contact colorScheme={this.state.colorScheme} />
            <SocialMediaButton href="mailto:matt.mulengawoo@gmail.com" 
              alternative="Send me an email!" 
              label="Email" 
              position="Top">
              <EmailIcon className={`Icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton 
              href="https://github.com/mmulenga"
              alternative="My GitHub account!"
              label="GitHub"
              position="Middle">
              <GitIcon className={`Icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton
              href="https://www.linkedin.com/in/matthew-mulenga/"
              alternative="My LinkedIn account!"
              label="LinkedIn"
              position="Bottom">
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
