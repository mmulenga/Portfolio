import React from 'react';
import './Section.css';

class Section extends React.Component {
  render() {
    return (
      <div className={this.props.type}>
        {this.props.children}
      </div>
    );
  }
}

export default Section;
