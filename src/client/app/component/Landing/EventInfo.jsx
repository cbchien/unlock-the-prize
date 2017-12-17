import React, {Component} from 'react';
import styles from './EventInfo.scss';
import bottle from '../../../../../assets/images/Asset4.png';

// https://cbchien.github.io/cover/Asset4.png
class EventInfo extends Component {
	render() {
		return(
			<section className={ styles['event-info'] }>
				<div className={ styles['info']}>
                <span><img src={bottle} id={ styles['bottle']}></img></span>
                    <h4>Join our Road to Paulaner: </h4>
                    <h5>Treasure Collection Game for an engaging Paulaner experience.</h5>
                    <ul>
                        <li>Sign up an account to start the journey.</li>
                        <li>Find your favourite bar in town to find Paulaner product.</li>
                        <li>Order a bottle, take a selfie, upload it on your account and share the moment on Facebook.</li>
                        <li>Congrats! you’ve received a point!</li>
                        <li>Paulaner will be hosting a bi-weekly pub crawl activity to explore bars around Taipei City with you. We want to get to know you, our beloved patrons, over good beer and good bars. Stay tuned for announcements!</li>
                        <li>Get 5 points to redeem a gift at our office. </li>
                        <li>Get 15 points to redeem a glass pint at our office.</li>
                        <li>If you have 35 points, we have a huge surprise for you!</li>
                    </ul>
                    <h5>Event designed by <a href="https://www.freels.tw/">Freels</a></h5>
				</div>
			</section>
		)
	}
}

export default EventInfo;