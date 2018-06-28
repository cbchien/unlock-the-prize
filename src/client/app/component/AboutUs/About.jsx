import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './about-styles.global.css';
import Header from '../header';
import Footer from '../footer';

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
							</span>
							<span className="product-main-block">
							</span>
							<span className="product-main-block">
							</span>
							<span className="product-main-block">						
							</span>
							<span className="product-main-block">
							</span>
							<span className="product-main-block">	
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