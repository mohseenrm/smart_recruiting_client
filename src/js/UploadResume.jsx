'use strict';

import React from 'react';

export default class UploadResume extends React.Component{
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e){
		alert("clicked");
	}

	render(){
		return(
			<div>
				<button className="button button-3d button-primary button-rounded" onClick={this.clickHandler}>Upload Resume</button>
			</div>
		);
	}
}