import React from 'react';
import './ProjectButton.css';


class ProjectButton extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      toggleInfoDisplay: {
        visibility: 'hidden',
      },
    }
  }

  handleHover = () => {
    if (this.state.toggleInfoDisplay.visibility === 'hidden') {
      this.setState({
        toggleInfoDisplay: {
          visibility: 'visible',
        },
      });
    } else {
      this.setState({
        toggleInfoDisplay: {
          visibility: 'hidden',
        },
      });
    }
  }

  handleClick = (e) => {
    e.stopPropagation();
  }

  render() {
    return (
      <div 
      className={`${this.props.className} project project-button`} 
      onClick={(e) => this.handleClick(e)} 
      onMouseEnter={this.handleHover} 
      onMouseLeave={this.handleHover} 
      onFocus={this.handleHover}
      onBlur={this.handleHover}>
        <button type="button" className="project-name" style={this.state.toggleInfoDisplay}>
          <p> {this.props.title} </p>
        </button>
        <img className="project" src={this.props.src} alt="It's me Matt!" />
      </div>
    );
  }
}

export default ProjectButton;
