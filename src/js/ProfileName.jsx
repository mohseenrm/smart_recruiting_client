'use strict';

import React from 'React';

export default class ProfileName extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : 'John Doe'
		}
	}
	render(){
		return(
			<span className="profile-name">{this.state.name}</span>
		);
	}
}