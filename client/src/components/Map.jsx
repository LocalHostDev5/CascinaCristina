import React from 'react';
import { Container, Row, Image, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="all_inbox" title="Sala archivio" x="55" y="190">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="clean_hands" title="Bagno e spogliatoio personale" x="43" y="120">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="stairs" title="Scale piano terra 1" x="105" y="50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="medical_services" title="Infermeria" x="185" y="50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="auto_awesome" title="Sensory Room" x="290" y="50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="bakery_dining" title="Panetteria" x="400" y="50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="local_laundry_service" title="Lavanderia" x="470" y="50">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="clean_hands" title="Bagno 1" x="535" y="37">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="dashboard" title="Dispensa e ripostiglio 1" x="535" y="100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="fitness_center" title="Palestra" x="535" y="185">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="local_florist" title="Serra didattica e bar" x="515" y="365">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="dashboard" title="Dispensa e ripostiglio 2" x="510" y="535">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="clean_hands" title="Bagno 2" x="510" y="620">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="weekend" title="Sala attesa e relax" x="290" y="535">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="stairs" title="Scale piano terra 2" x="415" y="620">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="flatware" title="Sala da pranzo" x="270" y="620">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="checkroom" title="Spogliatoio della cucina" x="80" y="535">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                        <div>
                          <Room icon="takeout_dining" title="Cucina" x="80" y="620">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                        </div>
                      </div>
                      :
                      <div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 1" x="60" y="220">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 2" x="49" y="57">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 3" x="115" y="57">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 4" x="255" y="57">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 5" x="435" y="57">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="school" title="Laboratorio didattico 6" x="538" y="75">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="connect_without_contact" title="Sala riunioni" x="538" y="200">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Luca" x="510" y="590">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Tommaso" x="510" y="685">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Andrea" x="325" y="685">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Daniele" x="200" y="685">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Martina" x="75" y="685">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="hotel" title="Camera di Giovanni" x="75" y="590">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="stairs" title="Scale primo piano" x="417" y="685">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                        </div>
                        <div>
                          <Room icon="chair" title="Salone" x="300" y="590">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
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
