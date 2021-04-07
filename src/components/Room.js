import React from 'react';
import Modal from 'react-modal';
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
        <Pin onClick={this.openModal.bind(this)} src={this.props.src} alt={this.props.alt}>
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