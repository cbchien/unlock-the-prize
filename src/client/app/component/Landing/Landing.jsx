import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './style.global.css';


import Heading from '../header';
import Footer from '../footer'
import EventInfo from './EventInfo';
import GoogleMapDisplay from './GoogleMap';

class Landing extends Component{
	render() {
		return(
			<div>
				<Heading />
				<GoogleMapDisplay />
				<EventInfo />
				<Footer />
			</div>
		)
	}
}

export default Landing;

