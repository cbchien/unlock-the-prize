import React, {Component} from 'react';

class Welcome extends Component {
	componentWillUpdate(){
		let current = document.getElementsByClassName('googft-info-window')
		console.log('this current', current)
	}
	componentWillMount(){
		console.log(this)
	}
	render() {
		return(
			<section className="landing">
				<div className="landing-title">
					<h1>
						Unlcok The Prize
						<br/>
						
					</h1>
					<iframe id="map" scrolling="no" frameBorder="no" src="https://fusiontables.google.com/embedviz?q=select+col2+from+1NdkxQukJJVKsFPWOnKYFYp2sfxsXxecrTBNhhopa&amp;viz=MAP&amp;h=false&amp;lat=25.053220852555956&amp;lng=121.56093253710947&amp;t=1&amp;z=12&amp;l=col2&amp;y=2&amp;tmplt=2&amp;hml=TWO_COL_LAT_LNG"></iframe>
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