import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './style.global.css';


import Heading from '../header';
import Welcome from './welcome';
import Footer from '../footer'

class Landing extends Component{
	render() {
		return(
			<div>
				<Heading />
				<Welcome />
				<Footer />
			</div>
		)
	}
}

export default Landing;

