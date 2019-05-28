import React from 'react';
import NavButton from './NavButton';
import './Navbar.css';

import { ReactComponent as HomeIcon } from '../images/home.svg';
import { ReactComponent as ProjectIcon } from '../images/scatter.svg';
import { ReactComponent as AboutIcon } from '../images/person.svg';
import { ReactComponent as ContactIcon } from '../images/email.svg';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { selectedButton: 'home' };

    this.homeRef = React.createRef();
    this.projectRef = React.createRef();
    this.aboutRef = React.createRef();
    this.contactRef = React.createRef();

    // A dictionary for associating, ids and refs. (Bruteforce method)
    this.dict = new Map();
  }

  componentDidMount() {
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

  render() {
    return (
      <div className="Navbar">
        <NavButton id="home" handleClick={this.handleClick}>
          <HomeIcon ref={this.homeRef} />
        </NavButton>
        <NavButton id="project" handleClick={this.handleClick}>
          <ProjectIcon ref={this.projectRef} />
        </NavButton>
        <NavButton id="about" handleClick={this.handleClick}>
          <AboutIcon ref={this.aboutRef} />
        </NavButton>
        <NavButton id="contact" handleClick={this.handleClick}>
          <ContactIcon ref={this.contactRef} />
        </NavButton>
      </div>
    );
  }
}

export default Navbar;
