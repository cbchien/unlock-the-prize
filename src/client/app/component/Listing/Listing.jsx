import React, {Component} from 'react';
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.css';
import './listing-styles.global.css';
import Header from '../header';
import Footer from '../footer';
import {
	fetchListings,
} from '../../action'

class Listing extends Component {
	componentDidMount() {
		var data = fetchListings()
		console.log('triggered')
		console.log(data)
	}
	render() {
		return(
			<div>
				<Header/>
				<div className="listing-title">
				</div>
				<div className="listing-body">
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
				</div>
				<Footer/>
			</div>
		)
	}
}

// Listing.propTypes = {
// 	dispatch: PropTypes.func.isRequired
// }

export default Listing;