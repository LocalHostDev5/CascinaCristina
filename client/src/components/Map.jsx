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
        <Container fluid className="map mx-auto">
          <TransformWrapper>
            <TransformComponent>
              <React.Fragment>
                <Image id="test" src={this.state.img} />

                {
                  this.state.img === floor0 ?
                    <div>
                      <div>
                        <Room icon="emoji_people" title="Accoglienza" x="60px" y="290px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Sala archivio" x="55px" y="190px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Bagno e spogliatoio personale" x="43px" y="120px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Scale piano terra 1" x="105px" y="50px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="medical_services" title="Infermeria" x="185px" y="50px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Sensory Room" x="290px" y="50px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="bakery_dining" title="Panetteria" x="400px" y="50px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="local_laundry_service" title="Lavanderia" x="470px" y="50px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Bagno 1" x="535px" y="37px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Dispensa e ripostiglio 1" x="535px" y="100px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="fitness_center" title="Palestra" x="535px" y="185px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Serra didattica e bar" x="515px" y="365px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Dispensa e ripostiglio 2" x="510px" y="535px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Bagno 2" x="510px" y="620px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Sala attesa e relax" x="290px" y="535px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Scale piano terra 2" x="415px" y="620px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="restaurant" title="Sala da pranzo" x="270px" y="620px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="checkroom" title="Spogliatoio della cucina" x="80px" y="535px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Cucina" x="80px" y="620px">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum maiores, sapiente consequuntur voluptates quisquam ipsam dolorem error commodi aliquam, est non quasi, aut reprehenderit porro officia odio! Necessitatibus, animi iusto.
								</Room>
                      </div>
                    </div>
                    :
                    <div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 1" x="60px" y="220px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 2" x="49px" y="57px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 3" x="115px" y="57px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 4" x="255px" y="57px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 5" x="435px" y="57px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="school" title="Laboratorio didattico 6" x="538px" y="75px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="extension" title="Sala riunioni" x="538px" y="200px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="bedroom_parent" title="Camera di Luca" x="510px" y="590px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
                      <div>
                        <Room icon="bedroom_parent" title="Camera di Tommaso" x="510px" y="685px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="bedroom_parent" title="Camera di Andrea" x="325px" y="685px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="bedroom_parent" title="Camera di Daniele" x="200px" y="685px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="bedroom_parent" title="Camera di Martina" x="75px" y="685px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="bedroom_parent" title="Camera di Giovanni" x="75px" y="590px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="extension" title="Scale primo piano" x="417px" y="685px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
					  <div>
                        <Room icon="extension" title="Salone" x="300px" y="590px">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta eum odio quos. Facilis, labore voluptatem fuga eum aperiam iste, quae aliquam aut sit itaque accusantium ab laudantium repudiandae esse nihil.
								</Room>
                      </div>
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
