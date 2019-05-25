import React from 'react';
import Portrait from '../components/Portrait';
import Name from '../components/Name';
import './Landing.css';

class Landing extends React.Component {
  render() {
    return (
      <div className="Landing">
        <Portrait />
        <Name colorScheme={this.props.colorScheme} />
      </div>
    );
  }
}

export default Landing;
