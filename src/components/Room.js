import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

import Pin from './Pin';

export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    return (
      <div>
        <Pin alt={this.props.alt} onClick={this.openModal.bind(this)} src={this.props.src}>
          {this.props.name}
        </Pin>
        <Modal isOpen={this.state.modalIsOpen}>
          <button onClick={this.closeModal.bind(this)}>X</button>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

Room.propTypes = {
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}
