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
        className="AspectRatio" 
        onClick={(e) => this.handleClick(e)} 
        onMouseEnter={this.handleHover} 
        onMouseLeave={this.handleHover} 
        onFocus={this.handleHover}
        onBlur={this.handleHover}
      >
        <button type="button" className="ProjectInfo" style={this.state.toggleInfoDisplay}>
          <p> Hello, how are you doing? </p>
        </button>
        <img className={this.props.className} src={this.props.src} alt="It's me Matt!" />
      </div>
    );
  }
}

export default ProjectButton;
