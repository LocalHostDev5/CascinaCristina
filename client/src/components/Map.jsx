import React from 'react';
import { Container, Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Room from './Room';
import './Map.css';

import floor1 from '../img/floor_1.jpg';
import floor2 from '../img/floor_2.jpg';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: floor1 }
  }

  downStairs() {
    this.setState({
      img: floor1
    });
  }

  upStairs() {
    this.setState({
      img: floor2
    });
  }

  render() {
    return (
      <Container fluid>

        <Container fluid className="map text-center">
          <Image src={this.state.img} />
          <Room title="Stanza1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
          </Room>
        </Container>

        <Button>1</Button>
        <Button>2</Button>
      </Container>
    );
  }
}
