// @flow

import  * as React from 'react';
import { useState } from 'react';
import Tooltip from './Tooltip';
import Portal from './Portal';
import './About.css';

function About() {
  const [tooltipVisibility, setTooltipVisibility] = useState({ visibility: 'hidden' });

  return (
    <React.Fragment>
      <div className="about-text">
        Inspired by all things tech, I grew up to develop a passion for programming.
        As an aspiring full-stack software engineer I&apos;ve taken an interest in learning
        a wide variety of subjects, ranging from front-end technologies like&nbsp;
        <span
          className="underline"
          onMouseEnter={() => setTooltipVisibility({ visibility: 'visible' })}
          onMouseLeave={() => setTooltipVisibility({ visibility: 'hidden' })}
        >
        React
        </span>
         , to back-end technologies like PostgreSQL.
        When I&apos;m not programming you can find me playing video-games, planning my next
        trip around the world, or just flat out enjoying the outdoors. If I sound like the
        kind of person you&apos;re looking for to join your team, give me a shout below!
      </div>
      <Portal>
        <Tooltip style={tooltipVisibility}> This site was created using React! </Tooltip>
      </Portal>
    </React.Fragment>
  );
}

export default About;
