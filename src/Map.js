import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import floor0 from './floor_0.png';
import floor1 from './floor_1.png';
import floor2 from './floor_2.png';

//reference da cui ho 'preso spunto': https://codesandbox.io/s/serene-lalande-yjmol?file=/src/App.js -piro

export class Map extends React.Component {
	constructor() {
		super();
		this.slideRef = React.createRef();
		/*this.back = this.back.bind(this);
		this.next = this.next.bind(this);*/
	}
  
	render() {
		const properties = {
			autoplay: false,
			infinite: false //perché si cliccherá sulle scale
		};
		
		const floors = [floor0, floor1, floor2];
				
		const floorStyle = {
			backgroundSize: "cover",
			height: "100vh"
		};
		
		return (
			<div className="slide-container">
				<Slide ref={this.slideRef} {...properties}>
					<div className="each-slide">
						<img src={floor0} style={floorStyle}/>
					</div>
					<div className="each-slide">
						<img src={floor1} style={floorStyle}/>
					</div>
					<div className="each-slide">
						<img src={floor2} style={floorStyle}/>
					</div>
				</Slide>
			</div>
		)
	}
}