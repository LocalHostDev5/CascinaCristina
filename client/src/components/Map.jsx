import React from 'react';
import { Container, Row, Col, Image, ButtonGroup, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Room from './Room';
import './Map.css';

import floor0 from '../img/floor_1.jpg';
import floor1 from '../img/floor_2.jpg';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: floor0, floor: 0 }
  }

  downStairs() {
    this.setState({
      img: floor0,
      floor: 0
    });
  }

  upStairs() {
    this.setState({
      img: floor1,
      floor: 1
    });
  }

  render() {
    return (
      <Container fluid>

        <Container fluid className="map text-center">
          <Image src={this.state.img} />

          {
            this.state.floor === 0 ?
              <div>
                <Room title="Stanza1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
                </Room>
              </div>
              :
              <div>
                <Room title="Stanza2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
                </Room>
              </div>
          }
        </Container>

        <div className="stairs">
          <Button onClick={this.downStairs.bind(this)}>
            1° Piano
          </Button>
          <Button onClick={this.upStairs.bind(this)}>
            2° Piano
          </Button>
        </div>
      </Container>
    );
  }
}
