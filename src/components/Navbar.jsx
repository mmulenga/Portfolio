import React from 'react';
import NavButton from './NavButton';
import './Navbar.css';

import { ReactComponent as BarIcon} from '../images/bar.svg';
import { ReactComponent as ExitIcon} from '../images/exit.svg';
import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as ProjectIcon } from '../images/scatter.svg';
import { ReactComponent as AboutIcon } from '../images/person.svg';
import { ReactComponent as ContactIcon } from '../images/email.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      selectedButton: 'home',
      isMobile: window.innerWidth < 768,
      navbarDisplay: {
        display: '',
      },
      menuBarDisplay: {
        display: 'block',
        color: this.props.colorScheme, 
      },
      closeButtonDisplay: {
        display: 'none',
      }
    };

    this.homeRef = React.createRef();
    this.projectRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();

    // A dictionary for associating, ids and refs. (Bruteforce method)
    this.dict = new Map();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();

    this.dict.set('home', this.homeRef);
    this.dict.set('project', this.projectRef);
    this.dict.set('about', this.aboutRef);
    this.dict.set('contact', this.contactRef);
    
    this.homeRef.current.style.fill = this.props.colorScheme;
  }

  componentDidUpdate() {
    if (this.props.targetSection !== this.state.selectedButton) {
      this.setSelectedButton(this.props.targetSection);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    const m = (window.innerWidth < 768);

    if (m !== this.state.isMobile) {
        this.setState({isMobile: m});
    }
    
    if (this.state.isMobile) {
      this.setState({
        navbarDisplay: {
          display: 'none'
        },
        menuBarDisplay: {
          display: 'block',
          color: this.props.colorScheme,
        },
        closeButtonDisplay: {
          display: 'none',
        }
      });
    } else {
      this.setState({ 
        navbarDisplay: {
          display: 'block'
        },
        menuBarDisplay: {
          display: 'none'
        },
        closeButtonDisplay: {
          display: 'none',
        } 
      });
    }
  }


  // Takes the id of the target and it's color
  setSelectedButton = (target) => {
    // Reset the color of the old button.
    this.dict.get(this.state.selectedButton).current.style.fill = "black";
    // Update the color of the selected button.
    this.dict.get(target).current.style.fill = this.props.colorScheme;

    this.setState({ selectedButton: target});
  }

  handleClick = (target) => {
    this.setSelectedButton(target.id);
    this.props.scrollToSection(target.id);
  }

  handleBarClick = (e) => {
    e.stopPropagation();

    if (this.state.navbarDisplay.display === 'block') {
      this.setState({ 
        navbarDisplay: {
          display: 'none'
        },
        menuBarDisplay: {
          display: 'block',
          color: this.props.colorScheme,
        },
        closeButtonDisplay: {
          display: 'none'
        } 
      });
    } else {
      this.setState({ 
        navbarDisplay: {
          display: 'block'
        },
        menuBarDisplay: {
          display: 'none'
        },
        closeButtonDisplay: {
          display: 'block',
          fill: this.props.colorScheme,
        } 
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="Navbar">
          <BarIcon className="Menubar" onClick={(e) => this.handleBarClick(e)} style={this.state.menuBarDisplay} />
          <ExitIcon className="CloseButton" onClick={(e) => this.handleBarClick(e)} style={this.state.closeButtonDisplay} />
          <NavButton id="home" handleClick={this.handleClick} style={this.state.navbarDisplay}>
            <HomeIcon ref={this.homeRef} />
          </NavButton>
          <NavButton id="project" handleClick={this.handleClick} style={this.state.navbarDisplay}>
            <ProjectIcon ref={this.projectRef} />
          </NavButton>
          <NavButton id="about" handleClick={this.handleClick} style={this.state.navbarDisplay}>
            <AboutIcon ref={this.aboutRef} />
          </NavButton>
          <NavButton id="contact" handleClick={this.handleClick} style={this.state.navbarDisplay}>
            <ContactIcon ref={this.contactRef} />
          </NavButton>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
