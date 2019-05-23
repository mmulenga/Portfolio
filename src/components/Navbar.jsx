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
    this.state = { selectedButton: 'home', colorScheme: props.colorScheme };
  }

  handleClick = (id) => {
    if (id === 'home') {
      console.log(id);
    } else if (id === 'p') {
      console.log(id);
    } else if (id === 'a') {
      console.log(id);
    } else {
      console.log(id);
    }
  }

  render() {
    return (
      <div className="Navbar">
        <NavButton id="home" handleClick={this.handleClick}>
          <HomeIcon />
        </NavButton>
        <NavButton id="projects" handleClick={this.handleClick}>
          <ProjectIcon />
        </NavButton>
        <NavButton id="about" handleClick={this.handleClick}>
          <AboutIcon />
        </NavButton>
        <NavButton id="contact" handleClick={this.handleClick}>
          <ContactIcon />
        </NavButton>
      </div>
    );
  }
}

export default Navbar;
