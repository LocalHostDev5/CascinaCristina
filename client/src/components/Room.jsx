import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow.bind(this)}>
          {this.props.title}
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.children}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose.bind(this)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}