'use strict';

import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';
import ProfileName from './ProfileName.jsx';


export default class Profile extends React.Component{
	render(){
		return(
			<div className="profile-wrapper">
				<ProfilePhoto />
				<ProfileName />
			</div>
		);
	}
}