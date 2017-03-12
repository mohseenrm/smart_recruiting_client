'use strict';

import React from 'react';
import RecruiterPhoto from './RecruiterPhoto.jsx';
import RecruiteName from './RecruiterName.jsx';
import UploadJob from './UploadJob.jsx';
import Tabs from './Tabs.jsx';
import Pane from './Pane.jsx';

import axios from 'axios';

export default class RecruiterProfile extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			mainData: [],
			showDetails: "hidden"
		}
		this.clickHandler = this.clickHandler.bind(this);
	}
	componentDidMount(){
		axios.get('http://ec2-35-160-77-182.us-west-2.compute.amazonaws.com/results/1')
			.then((response) => {

				const mainData = response.data.responseData;
				console.log(mainData);
				const percentData = mainData.map(obj => obj.score = parseFloat(obj.score) * 100);
				// console.log(percentData);
				const convertedData = mainData.map(obj => obj.score = parseFloat(obj.score).toFixed(2));
				// console.log(convertedData);
				this.setState({mainData});
				console.log(this.state);
			});
		// })
	}

	clickHandler(e){
		e.preventDefault();
		let css = (this.state.showDetails === "hidden" ? "show" : "hidden");
		this.setState({showDetails: css});
	}

	render(){
		return(
			<div>
				<Tabs selected={0}>
					<Pane label="Profile">
						<div className="profile-wrapper">
						 	<RecruiterPhoto />
						 	<RecruiteName />
						 	<UploadJob />
						</div>
					</Pane>
					<Pane label="Notifications">
						{/*<div>No new notifications</div>*/}
						{
							this.state.mainData.map(data => 
								<div className="candidate" onClick={this.clickHandler}>
									<div className="candidate-picture"></div>
									<div className="detail-wrapper">
										<div className="candidate-details">
											<span className="candidate-name">{data.name}</span>
											<span className={this.state.showDetails}>{data.email}</span>
											<span className={this.state.showDetails}>{data.phoneno}</span>
										</div>
										<span className={this.state.showDetails}>{data.score}</span>
									</div>
								</div>
							)
						}
					</Pane>
				</Tabs>
			</div>
		);
	}
}