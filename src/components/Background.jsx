// @flow

import * as React from 'react';
import Particles from 'react-particles-js';
import './Background.css';

type Props = {
  colorScheme: string,
}

function Background(props: Props) {
  const { colorScheme } = props;

  // Potential colours: #5edcff, #fff056
  const particleParameters = {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: colorScheme,
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000',
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: colorScheme,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 125,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 100,
          size: 5,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 3,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <Particles canvasClassName="particle-canvas" params={particleParameters} />
  );
}

export default Background;
