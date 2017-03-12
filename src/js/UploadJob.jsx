'use strict';

import React from 'react';

export default class UploadJob extends React.Component{
	constructor(props){
		super(props);
		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(e){
		e.preventDefault();
		// alert("clicked");
	}

	render(){
		return(
			<div>
				<button className="button button-3d button-primary button-rounded" onClick={this.clickHandler}>Upload Role Description</button>
			</div>
		);
	}
}