'use strict';

import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';
import RecruiteName from './RecruiterName.jsx';
import UploadResume from './UploadResume.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

import axios from 'axios';

export default class RecruiterProfile extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			mainData: []
		}
	}
	componentDidMount(){
		axios.get('http://ec2-35-160-77-182.us-west-2.compute.amazonaws.com/results/1')
			.then((response) => {
				// console.log(response);
				// this.setState(response.data);
				const mainData = response.data.responseData;
				console.log(mainData);
				this.setState({mainData});
				console.log(this.state);
			});
		// temp.then();
		// this.setState = {temp};
		// temp.then((data)=>{
		// 	console.log('#');
		// 	// console.log(data);
		// 	this.setState = {data};
		// })
	}

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
						 	<RecruiteName />
						 	<UploadResume />
						</div>
					</Pane>
					<Pane label="Notifications">
						{/*<div>No new notifications</div>*/}
						{
							this.state.mainData.map(data => 
								<div>{data.email}</div>
							)
						}
					</Pane>
				</Tabs>
			</div>
		);
	}
}