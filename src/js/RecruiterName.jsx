'use strict';

import React from 'React';

export default class RecruiterName extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name : 'Microsoft'
		}
	}
	render(){
		return(
			<span className="profile-name">{this.state.name}</span>
		);
	}
}