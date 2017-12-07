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
				<div className="about-body">
					<section className="about-title spacing">
						<div className="about-header">
							<h1>Meet Our Company</h1>
						</div>
					</section>
					<div className="about-intro">
						<article className="wrap spacing">
							<h2>
								Content Test
							</h2>
						</article>
					</div>
					<section className="teammate spacing">
						<b>The Neighbor Next Door</b>
						<p>Founder & CEO</p>
					</section>
					<p className="clear"></p>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default About;