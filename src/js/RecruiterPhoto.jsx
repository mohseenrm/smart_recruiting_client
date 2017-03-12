'use strict';
import React from 'react';

const samplePhoto = '../images/ms.png';

export default class RecruiterPhoto extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			url : samplePhoto
		};
	}

	render(){
		return(
			<div className="recruiter-picture"></div>
		);
	}
}