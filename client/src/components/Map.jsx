import React from 'react';
import { Container, Row, Col, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'bootstrap/dist/css/bootstrap.min.css';

import Room from './Room';
import './Map.css';

import floor0 from '../img/floor_1.jpg';
import floor1 from '../img/floor_2.jpg';

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

        <Container fluid className="map w-75 text-center">
			<TransformWrapper>
				<TransformComponent>
					<React.Fragment>
					  <Image id="test" src={this.state.img} />

					  {
						this.state.img === floor0 ?
						  <div>
							<Room icon="shower" title="Doccia">
							  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
							</Room>
						  </div>
						  :
						  <div>
							<Room icon="extension" title="Ricreativa">
							  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
							</Room>
						  </div>
					  }
					</React.Fragment>
				</TransformComponent>
			</TransformWrapper>
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
