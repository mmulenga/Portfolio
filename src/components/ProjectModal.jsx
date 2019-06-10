import React from 'react';
import ColouredLine from './ColouredLine';
import './ProjectModal.css';

import { ReactComponent as ExitIcon} from '../images/exit.svg';
import { ReactComponent as ExternalLinkIcon } from '../images/external-link.svg';

class ProjectModal extends React.Component {
  toggleModal = () => {
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="project-modal" style={this.props.visibility}>
        <div className="modal-box">
          <ExitIcon className="modal-exit" onClick={this.toggleModal} />
          <div className="modal-image-box">
            <img className="modal-image" src={this.props.src} alt={this.props.alt} />
          </div>
          <div className="modal-project-info">
            <h2 className="modal-project-name">
              {this.props.projectName}
              <ColouredLine justify={this.props.justify} colorScheme={this.props.colorScheme} />
            </h2>
            <p>
              {this.props.description}
            </p>
          </div>
          <a className="modal-button" href={this.props.href} type="button">
            <ExternalLinkIcon className="modal-button-image" />
            <p className="modal-button-text">View</p>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
