import React from "react";
import "./NavButton.css";

class NavButton extends React.Component {
  handleClickEvent = (target, e) => {
    e.stopPropagation();
    this.props.handleClick(target);
  };

  render() {
    return (
      // preventDefault() to get rid of focus when clicking on buttons, maintains accessibility when using keyboard.
      <button
        id={this.props.id}
        onClick={e => this.handleClickEvent(e.target, e)}
        onMouseDown={e => e.preventDefault()}
        className="nav-button"
        type="button"
        style={this.props.style}
      >
        {this.props.children}
      </button>
    );
  }
}

export default NavButton;
