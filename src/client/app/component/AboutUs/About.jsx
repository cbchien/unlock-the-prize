import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './about-styles.global.css';
import Header from '../header';
import Footer from '../footer';

import dunkel from '../../../../../assets/images/dunkel.png';
import munichlager from '../../../../../assets/images/munichlager.png';
import naturtrub from '../../../../../assets/images/naturtrub.png';
import oktoberfest from '../../../../../assets/images/oktoberfest.png';
import beanbag from '../../../../../assets/images/beanbag.png';
import coffeebean from '../../../../../assets/images/coffeebean.png';

class About extends Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="about-title">
				</div>
				<div className="about-body">
					<section className="about-beer-list">
						<div className="about-product-main">
							<span className="product-main-block">
								<img src={dunkel} className="beer-bottle"></img>
								<img src={dunkel} className="beer-bottle-flipped"></img>
							</span>
							<span className="product-main-block">
								<img src={munichlager} className="beer-bottle"></img>
								<img src={munichlager} className="beer-bottle-flipped"></img>
							</span>
							<span className="product-main-block">
								<img src={naturtrub} className="beer-bottle"></img>
								<img src={naturtrub} className="beer-bottle-flipped"></img>
							</span>
							<span className="product-main-block">						
								<img src={oktoberfest} className="beer-bottle"></img>
								<img src={oktoberfest} className="beer-bottle-flipped"></img>
							</span>
							<span className="product-main-block">
								<img src={oktoberfest} className="beer-bottle"></img>
								<img src={oktoberfest} className="beer-bottle-flipped"></img>
							</span>
							<span className="product-main-block">	
								<img src={oktoberfest} className="beer-bottle"></img>
								<img src={oktoberfest} className="beer-bottle-flipped"></img>
							</span>	
						</div>
					</section>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default About;