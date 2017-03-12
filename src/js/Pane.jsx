'use strict';

import React from 'react';

const Pane = React.createClass({
	displayName: 'Pane',
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
});

export default Pane;
/*export default class Pane extends React.Component{
	render(){
		return(
			<div>
				{this.props.children}
			</div>
		);
	}
}*/