import React from 'react';
import { Container, Row, Col, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Room from './Room';
import './Map.css';

import floor0 from '../img/floor_1_local.png';
import floor1 from '../img/floor_2_local.png';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: floor0 }
  }

  changeFloor(value) {
    this.setState({
      img: (value === 0 ? floor0 : floor1),
    });
  }

  render() {
    return (
      <Container fluid>

        <Container fluid className="map text-center">
          <Image id="test" src={this.state.img} />

          {
            this.state.img === floor0 ?
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
          <ToggleButtonGroup type="radio" name="floor"
            defaultValue={0} onChange={this.changeFloor.bind(this)}>
            <ToggleButton value={0}>
              1° Piano
            </ToggleButton>
            <ToggleButton value={1}>
              2° Piano
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </Container>
    );
  }
}
