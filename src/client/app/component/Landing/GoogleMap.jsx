import React, {Component} from 'react';
import { compose, withProps } from 'recompose';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

// import PropTypes from 'prop-types'

// import Footer from '../footer';

// import styles from './GoogleMap.scss';

class GoogleMapDisplay extends Component{
	constructor(props) {
      super(props)
	//   this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			markers: [],
		}
	}

	setMarkerInfo(info) {
		this.setState({
			markers: [info],
		})
	}

	render() {
		const MapWithAMakredInfoWindow = compose(
				withProps({
					googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDdiRdQ6jYHCrzBV2_gqIb0Qaxi-UCp1UY&v=3.exp&libraries=geometry,drawing,places",
					loadingElement: <div style={{ height: `100%` }} />,
					containerElement: <div style={{ height: `400px` }} />,
					mapElement: <div style={{ height: `100%` }} />,
				}),
				withScriptjs,
				withGoogleMap
            )(props =>
			<GoogleMap
				defaultZoom={12}
				defaultCenter={{ lat: 25.040606, lng: 121.537567 }}
			>

			</GoogleMap>
		);
		return(
			<div>
				<MapWithAMakredInfoWindow
					onMarkerClick={this.handleMarkerClick}
				/>
			</div>
		)
	}
}

export default GoogleMapDisplay;

