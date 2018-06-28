import React, {Component} from 'react';
import styles from './EventInfo.scss';

class EventInfo extends Component {
	render() {
		return(
			<section className={ styles['event-info'] }>
				<div className={ styles['info']}>
                    <h4>List something here on this yellow page: </h4>
				</div>
			</section>
		)
	}
}

export default EventInfo;