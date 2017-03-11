'use strict';
import React from 'react';

const samplePhoto = '../images/sample_pic.png';

export default class ProfilePhoto extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			url : samplePhoto
		};
	}

	render(){
		return(
			<div className="profile-picture"></div>
		);
	}
}

