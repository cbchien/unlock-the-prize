import React, {Component} from 'react';

class Welcome extends Component {
	render() {
		return(
			<section className="landing">
				<div className="landing-title">
					<h1>
						Unlcok The Prize
						<br/>
						
					</h1>
					<div className="landing-options">
						<a href="/" className="btn btn-lg">
							btn 1
						</a>
						<a href="/" className="btn btn-lg">
							btn 2
						</a>
					</div>
				</div>
			</section>
		)
	}
}

export default Welcome;