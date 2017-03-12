'use strict';

import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';
import ProfileName from './ProfileName.jsx';
import UploadResume from './UploadResume.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

export default class Profile extends React.Component{
	render(){
		return(
			// {/*<div className="profile-wrapper">
			// 	<ProfilePhoto />
			// 	<ProfileName />
			// 	<UploadResume />
			// </div>*/}
			<div>
				<Tabs selected={0}>
					<Pane label="Profile">
						<div className="profile-wrapper">
						 	<ProfilePhoto />
						 	<ProfileName />
						 	<UploadResume />
						</div>
					</Pane>
					<Pane label="Notifications">
						<div>No new notifications</div>
					</Pane>
				</Tabs>
			</div>
		);
	}
}