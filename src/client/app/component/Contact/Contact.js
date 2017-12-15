import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';
import Header from '../header';
import Footer from '../footer';

class Contact extends Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="about-body">
					<section className="about-title spacing">
						<div className="about-header">
							<h1>Contact</h1>
						</div>
					</section>
					<p className="clear"></p>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Contact;