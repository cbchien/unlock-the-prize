import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './products.css';
import Header from '../header';
import Footer from '../footer';

class Products extends Component {
	render() {
		return(
			<div>
				<Header/>
				<div className="about-body">
					<section className="about-title spacing">
						<div className="about-header">
							<h1>Products</h1>
						</div>
					</section>
					<p className="clear"></p>
				</div>
				<Footer/>
			</div>
		)
	}
}

export default Products;