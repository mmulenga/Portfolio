import React from 'react';
import './NavButton.css';

class NavButton extends React.Component {
  handleClickEvent = (target, e) => {
    e.stopPropagation();
    this.props.handleClick(target);
  }

  render() {
    return (
      <button id={this.props.id} onClick={(e) => this.handleClickEvent(e.target, e)} className="NavButton" type="button">
        {this.props.children}
      </button>
    );
  }
}

export default NavButton;
