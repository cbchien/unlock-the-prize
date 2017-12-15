import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './style.global.css';


import Heading from '../header';
import Welcome from './welcome';
import Footer from '../footer'
import EventInfo from './EventInfo';
import GoogleMapDisplay from './GoogleMap';

class Landing extends Component{
	render() {
		return(
			<div>
				<Heading />
				<Welcome />
				<iframe width="700" height="400" scrolling="no" frameborder="no" src="https://fusiontables.google.com/embedviz?q=select+col2+from+1NdkxQukJJVKsFPWOnKYFYp2sfxsXxecrTBNhhopa&amp;viz=MAP&amp;h=false&amp;lat=25.053220852555956&amp;lng=121.56093253710947&amp;t=1&amp;z=12&amp;l=col2&amp;y=2&amp;tmplt=2&amp;hml=TWO_COL_LAT_LNG"></iframe>
				{/* <GoogleMapDisplay /> */}
				<EventInfo />
				<Footer />
			</div>
		)
	}
}

export default Landing;

