import React from 'react';
import { Container, Row, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Map from './components/Map';

export default class App extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Container fluid>
            <Navbar bg="light">
              <Navbar.Brand>Cascina Cristina</Navbar.Brand>
            </Navbar>
          </Container>
        </Row>
        <Row>
          <Container fluid>
            <Map />
          </Container>
        </Row>
      </Container>
    );
  }
}
