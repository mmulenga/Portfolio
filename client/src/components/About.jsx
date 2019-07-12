// @flow

import * as React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import './About.css';

function About() {
  return (
    <div className="about-text">
      Inspired by all things tech, I grew up to develop a passion for programming.
      As an aspiring full-stack software engineer I&apos;ve taken an interest in learning
      a wide variety of subjects, ranging from front-end technologies like&nbsp;
      <Tooltip title="This site was created using React!" placement="top">
        <span className="underline">React</span>
      </Tooltip>
       , to back-end technologies like PostgreSQL.
      When I&apos;m not programming you can find me playing video-games, planning my next
      trip around the world, or just flat out enjoying the outdoors. If I sound like the
      kind of person you&apos;re looking for to join your team, give me a shout below!
    </div>
  );
}

export default About;
