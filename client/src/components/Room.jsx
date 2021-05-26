import React from 'react';
import { Button, Modal } from 'react-bootstrap';

import './Room.css';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class Room extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, isDesktop: (window.innerWidth > 600) };
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

  handleResize() {
    this.setState({
      isDesktop: (window.innerWidth > 600)
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize.bind(this));
  }

  render() {
    return (
      <div>
        <div className="room"
          variant="primary" onClick={this.handleShow.bind(this)}
          style={(this.state.isDesktop ? {
            top: this.props.x + 'px',
            left: this.props.y + 'px'
          } : {
            top: this.props.x / 2 + 'px',
            left: this.props.y / 2 + 'px'
          })}>
          <div class="material-icons-round">
            {this.props.icon}
          </div>
        </div>

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
