import React from 'react';
//import { Carousel } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import Room from './Room';

import 'bootstrap/dist/css/bootstrap.min.css';
//import './styles/Map.css';

import floor0 from './floor_0.png';
import plan from './plan.jpg';
import floor1 from './floor_1.png';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgIndex: 0 }
  }

  /*render() {
    return (
      <Carousel interval={null}>
        <Carousel.Item style={{textAlign: 'center'}}>
          <img src={floor0} />
          <Room title="Test0"></Room>
        </Carousel.Item>
        <Carousel.Item>
          <img src={floor1} />
        </Carousel.Item>
      </Carousel>
    );
  }*/

  downStairs() {
    this.setState({
      imgIndex: plan
    });
  }

  upStairs() {
    this.setState({
      imgIndex: floor1
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col lg={{ span: 12 }} className="text-center border">
            <div style={{ backgroundImage: `url(${plan})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', resize: 'both' }}>
              <img src={plan} style={{visibility: 'hidden', width: '100%'}}/>
              <Room title="Bedroom">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Room>
            </div>

          </Col>
        </Row>
        <button onClick={this.upStairs.bind(this)}>Up</button>
        <button onClick={this.downStairs.bind(this)}>Down</button>
      </Container>
    );
  }
}
