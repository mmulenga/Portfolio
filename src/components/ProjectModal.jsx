import React from 'react';
import ColouredLine from './ColouredLine';
import './ProjectModal.css';

import { ReactComponent as ExitIcon} from '../images/exit.svg';
import { ReactComponent as ExternalLinkIcon } from '../images/external-link.svg';

function ProjectModal(props) {
  const { src, alt, projectName, position, description, colorScheme } = props;

  return (
    <div className="project-modal">
      <div className="modal-box">
        <ExitIcon className="modal-exit" />
        <div className="modal-image-box">
          <img className="modal-image" src={src} alt={alt} />
        </div>
        <div className="modal-project-info">
          <h2 className="modal-project-name">
            {projectName}
            <ColouredLine position={position} colorScheme={colorScheme} />
          </h2>
          <p>
            {description}
          </p>
        </div>
        <a className="modal-button" href="localhost:3000" type="button">
          <ExternalLinkIcon className="modal-button-image" />
          <p className="modal-button-text">View</p>
        </a>
      </div>
    </div>
  );
}

export default ProjectModal;
