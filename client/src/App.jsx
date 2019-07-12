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
import ProjectModal from './components/ProjectModal';
import Portal from './components/Portal';

import ContentArea from './containers/ContentArea';
import Landing from './containers/Landing';
import Section from './containers/Section';

import { ReactComponent as EmailIcon } from './images/envelope.svg';
import { ReactComponent as GitIcon } from './images/github.svg';
import { ReactComponent as LinkedIcon } from './images/linkedin.svg';

import { byAccidentBot, volunteerize, preop } from './projects.js';

import bab from './images/reddit.jpg';
import volunteer from './images/volunteer.jpg';
import preoper from './images/preoper.jpg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorScheme: '#5EDCFF',
      buttonColorClass: 'blue-icon',
      targetSection: 'home',
      isMobile: window.innerWidth < 768,
      modalVisibility: {
        display: 'none'
      },
      modalParameters: {
        name: '',
        src: '',
        description: '',
      }
    };

    this.appRef = React.createRef();
    this.contentAreaRef = React.createRef();
    this.landingSectionRef = React.createRef();
    this.projectSectionRef = React.createRef();
    this.aboutSectionRef = React.createRef();
    this.contactSectionRef = React.createRef();

    this.dict = new Map();
    this.projectMap = new Map();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();

    this.projectMap.set('b', byAccidentBot);
    this.projectMap.set('p', preop);
    this.projectMap.set('v', volunteerize);

    // This will need to be refactored to some more elegant/efficient process.
    this.dict.set('home', this.landingSectionRef);
    this.dict.set('project', this.projectSectionRef);
    this.dict.set('about', this.aboutSectionRef);
    this.dict.set('contact', this.contactSectionRef);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const m = window.innerWidth < 768;

    if (m !== this.state.isMobile) {
      this.setState({
        isMobile: m
      });
    }
  };

  scrollToSection = section => {
    this.contentAreaRef.current.scrollTo({
      top: this.dict.get(section).current.offsetTop,
      behavior: 'smooth'
    });
  };

  setColor = color => {
    this.setState({ colorScheme: color });

    if (color === "#5EDCFF") {
      this.setState({ buttonColorClass: "blue-icon" });
    } else if (color === "#FFF056") {
      this.setState({ buttonColorClass: "yellow-icon" });
    } else {
      this.setState({ buttonColorClass: "green-icon" });
    }
  };

  setTargetSection = position => {
    if (
      this.inRange(position, 0, this.projectSectionRef.current.offsetTop) &&
      this.state.targetSection !== "home"
    ) {
      this.setState({ targetSection: 'home' });
    } else if (
      this.inRange(
        position,
        this.projectSectionRef.current.offsetTop,
        this.aboutSectionRef.current.offsetTop
      ) &&
      this.state.targetSection !== "project"
    ) {
      this.setState({ targetSection: 'project' });
    } else if (
      this.inRange(
        position,
        this.aboutSectionRef.current.offsetTop,
        this.contactSectionRef.current.offsetTop
      ) &&
      this.state.targetSection !== "about"
    ) {
      this.setState({ targetSection: 'about' });
    } else if (
      this.inRange(
        position,
        this.contactSectionRef.current.offsetTop,
        this.contactSectionRef.current.offsetTop +
          this.contactSectionRef.current.offsetHeight
      ) &&
      this.state.targetSection !== "contact"
    ) {
      this.setState({ targetSection: 'contact' });
    }
  };

  inRange = (value, min, max) => {
    return value >= min / 1.25 && value <= max / 1.25;
  };

  toggleModal = () => {
    if (this.state.modalVisibility.display === "none") {
      this.setState({
        modalVisibility: {
          display: 'flex'
        }
      });
    } else {
      this.setState({
        modalVisibility: {
          display: 'none'
        }
      });
    }
  };

  handleProjectButtonClick = (key, e) => {
    this.setState({
      modalParameters: {
        name: this.projectMap.get(key).name,
        src: this.projectMap.get(key).src,
        description: this.projectMap.get(key).description,
        href: this.projectMap.get(key).href
      }
    });

    this.toggleModal();
  };

  render() {
    return (
      <div id="app" ref={this.appRef} className="app">
        <Background colorScheme={this.state.colorScheme} />
        <Navbar
          scrollToSection={this.scrollToSection}
          targetSection={this.state.targetSection}
          colorScheme={this.state.colorScheme}
          isMobile={this.state.isMobile}
          resize={this.resize}
        />
        <ContentArea
          ref={this.contentAreaRef}
          setTargetSection={this.setTargetSection}
        >
          <Landing
            ref={this.landingSectionRef}
            colorScheme={this.state.colorScheme}
          />
          <Section ref={this.projectSectionRef} type="project-section">
            <SectionTitle
              name="Projects"
              justify="left"
              colorScheme={this.state.colorScheme}
            />
            <ProjectButton
              className="project-1"
              title="By-Accident-Bot"
              src={bab}
              isMobile={this.state.isMobile}
              handleClick={e => this.handleProjectButtonClick("b", e)}
            />
            <ProjectButton
              className="project-2"
              title="Pre-Op App"
              src={preoper}
              isMobile={this.state.isMobile}
              handleClick={e => this.handleProjectButtonClick("p", e)}
            />
            <ProjectButton
              className="project-3"
              title="Volunteerize"
              src={volunteer}
              isMobile={this.state.isMobile}
              handleClick={e => this.handleProjectButtonClick("v", e)}
            />
            <Portal>
              <ProjectModal
                visibility={this.state.modalVisibility}
                projectName={this.state.modalParameters.name}
                src={this.state.modalParameters.src}
                description={this.state.modalParameters.description}
                href={this.state.modalParameters.href}
                justify="center"
                colorScheme={this.state.colorScheme}
                toggleModal={this.toggleModal}
              />
            </Portal>
          </Section>
          <Section ref={this.aboutSectionRef} type="about-section">
            <SectionTitle
              name="About Me"
              justify="right"
              colorScheme={this.state.colorScheme}
            />
            <About />
            <SpotifyTitle />
            <SpotifyWidget />
          </Section>
          <Section ref={this.contactSectionRef} type="contact-section">
            <SectionTitle
              name="Contact"
              justify="left"
              colorScheme={this.state.colorScheme}
            />
            <Contact colorScheme={this.state.colorScheme} />
            <SocialMediaButton
              href="mailto:matt.mulengawoo@gmail.com"
              aria="Open up your favourite email client to send me a message."
              alternative="Send me an email!"
              label="Email"
              position="top"
            >
              <EmailIcon className={`icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton
              href="https://github.com/mmulenga"
              aria="Check out my GitHub account."
              alternative="My GitHub account!"
              label="GitHub"
              position="middle"
            >
              <GitIcon className={`icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <SocialMediaButton
              href="https://www.linkedin.com/in/matthew-mulenga/"
              aria="Take a look at my LinkIn profile."
              alternative="My LinkedIn account!"
              label="LinkedIn"
              position="bottom"
            >
              <LinkedIcon className={`icon ${this.state.buttonColorClass}`} />
            </SocialMediaButton>
            <Footer colorScheme={this.state.colorScheme} />
          </Section>
        </ContentArea>
      </div>
    );
  }
}

export default App;
