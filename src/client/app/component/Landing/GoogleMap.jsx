import React, {Component} from 'react';
import { compose, withProps } from 'recompose';
// const FaAnchor = require("react-icons/lib/fa/anchor");
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  FusionTablesLayer,
} from 'react-google-maps';
const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");

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
				<FusionTablesLayer
					url="https://fusiontables.googleusercontent.com/embedviz?q=select+col2+from+1NdkxQukJJVKsFPWOnKYFYp2sfxsXxecrTBNhhopa&viz=MAP&h=false&lat=25.053220852555956&lng=121.56093253710947&t=1&z=12&l=col2&y=2&tmplt=2&hml=TWO_COL_LAT_LNG"
					options={{
						query: {
							select: `col2`,
							from: `1NdkxQukJJVKsFPWOnKYFYp2sfxsXxecrTBNhhopa`
						},
						styles: [{
							markerOptions: {
								iconName: 'large_red'
							}
						}]
					}}
				/>
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

