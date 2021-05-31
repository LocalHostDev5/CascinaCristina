import React from 'react';
import { Container, Row, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import 'bootstrap/dist/css/bootstrap.min.css';

import Room from './Room';
import './Map.css';

import floor0 from '../img/floor_1.jpg';
import floor1 from '../img/floor_2.jpg';
import takeout_dining from '../img/rooms/takeout_dining.jpg';
import flatware from '../img/rooms/flatware.jpg';
import clean_hands from '../img/rooms/clean_hands.jpg';
import hotel from '../img/rooms/hotel.jpg';
import stairs from '../img/rooms/stairs.jpg';
import local_florist from '../img/rooms/local_florist.jpg';
import medical_services from '../img/rooms/medical_services.jpg';
import bakery_dining from '../img/rooms/bakery_dining.jpg';
import local_laundry_service from '../img/rooms/local_laundry_service.jpg';
import fitness_center from '../img/rooms/fitness_center.jpg';
import dashboard from '../img/rooms/dashboard.jpg';
import school from '../img/rooms/school.jpg';
import connect_without_contact from '../img/rooms/connect_without_contact.jpg';
import all_inbox from '../img/rooms/all_inbox.jpg';
import emoji_people from '../img/rooms/emoji_people.jpg';
import checkroom from '../img/rooms/checkroom.jpg';
import weekend from '../img/rooms/weekend.jpg';
import chair from '../img/rooms/chair.jpg';

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
        <Row>
          <Container fluid className="map mx-auto">
            <Row className="justify-content-md-center">
              <TransformWrapper>
                <TransformComponent>
                  <React.Fragment>
                    <Image id="test" src={this.state.img} />

                    {
                      this.state.img === floor0 ?
                        <div>
                          <div>
                            <Room icon="emoji_people" title="Accoglienza" x="60" y="290">
                              <img src={emoji_people} />
								            </Room>
                          </div>
                          <div>
                            <Room icon="all_inbox" title="Sala archivio" x="55" y="190">
                              <img src={all_inbox} />
								            </Room>
                          </div>
                          <div>
                            <Room icon="clean_hands" title="Bagno e spogliatoio personale" x="43" y="120">
                              <img src={clean_hands} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="stairs" title="Scale piano terra 1" x="105" y="50">
                              <img src={stairs} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="medical_services" title="Infermeria" x="185" y="50">
                              <img src={medical_services} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="auto_awesome" title="Sensory Room" x="290" y="50">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								            </Room>
                          </div>
                          <div>
                            <Room icon="bakery_dining" title="Panetteria" x="400" y="50">
                              <img src={bakery_dining} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="local_laundry_service" title="Lavanderia" x="470" y="50">
                              <img src={local_laundry_service} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="clean_hands" title="Bagno 1" x="535" y="37">
                              <img src={clean_hands} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="dashboard" title="Dispensa e ripostiglio 1" x="535" y="100">
                              <img src={dashboard} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="fitness_center" title="Palestra" x="535" y="185">
                              <img src={fitness_center} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="local_florist" title="Serra didattica e bar" x="515" y="365">
                              <img src={local_florist} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="dashboard" title="Dispensa e ripostiglio 2" x="510" y="535">
                              <img src={dashboard} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="clean_hands" title="Bagno 2" x="510" y="620">
                              <img src={clean_hands} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="weekend" title="Sala attesa e relax" x="290" y="535">
                              <img src={weekend} />
							            	</Room>
                          </div>
                          <div>
                            <Room icon="stairs" title="Scale piano terra 2" x="415" y="620">
                              <img src={stairs} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="flatware" title="Sala da pranzo" x="270" y="620">
                              <img src={flatware} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="checkroom" title="Spogliatoio della cucina" x="80" y="535">
                              <img src={checkroom} />
							            	</Room>
                          </div>
                          <div>
                            <Room icon="takeout_dining" title="Cucina" x="80" y="620">
                              <img src={takeout_dining} />
                            </Room>
                          </div>
                        </div>
                        :
                        <div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 1" x="60" y="220">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 2" x="49" y="57">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 3" x="115" y="57">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 4" x="255" y="57">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 5" x="435" y="57">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="school" title="Laboratorio didattico 6" x="538" y="75">
                              <img src={school} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="connect_without_contact" title="Sala riunioni" x="538" y="200">
                              <img src={connect_without_contact} />
						            		</Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Luca" x="510" y="590">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Tommaso" x="510" y="685">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Andrea" x="325" y="685">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Daniele" x="200" y="685">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Martina" x="75" y="685">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="hotel" title="Camera di Giovanni" x="75" y="590">
                              <img src={hotel} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="stairs" title="Scale primo piano" x="417" y="685">
                              <img src={stairs} />
                            </Room>
                          </div>
                          <div>
                            <Room icon="chair" title="Salone" x="300" y="590">
                              <img src={chair} />
					            			</Room>
                          </div>
                        </div>
                    }
                  </React.Fragment>
                </TransformComponent>
              </TransformWrapper>
            </Row>
          </Container>

        </Row>
        <Row className="justify-content-md-center">
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
        </Row>
      </Container>
    );
  }
}
