import React from 'react';
import SubscriptionCard from './ActiveSubCard.js';

export default class ActiveSubscriptions extends React.Component{

	//here we get all active subscription from db
	constructor(props){
		super(props);
		this.state={
			activeSubscription:[
				{
					id:1,
					serviceName:"Goals",
					plan:"montly",
					expDate:"1/1/2021"
				},
				{
					id:2,
					serviceName:"Routine",
					plan:"montly",
					expDate:"1/1/2021"
				}

			]
		}
	}

	render(){
		 return(
		 		<div className="row mb-4">
		 			<h2>Active Subscription</h2>
					 {
						 this.state.activeSubscription.map((subscription)=>
						 <div className="col-s-12 col-md-6 col-lg-4 col-xl-3">
						 	<SubscriptionCard key={subscription.id.toString()} subData={subscription} />
					 	</div>
						 )}
					
				</div>
		 );
	}
}