import React from 'react';
import ServiceCard from './ServiceCard.js'

export default class Services extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={
			services:[
				{
					id:1,
					name:"Goals",
					description:"Irure sit irure ea ea nisi ipsum irure do laboris non sit.",
					plan:'montly',
					price:4.99,
				},
				{
					id:2,
					name:"Goals",
					description:"Irure sit irure ea ea nisi ipsum irure do laboris non sit.",
					plan:'annualy',
					price:49.99,

				},
				{
					id:3,
					name:"Goals",
					description:"Irure sit irure ea ea nisi ipsum irure do laboris non sit.",
					plan:'life',
					price:99.99,

				}
				
			]
		}
	}
	render()
	{
		return(
				<div className="row mb-4">
		 			<h2> Services </h2>
					 {this.state.services.map((service)=>
						 <div className="col-s-12 col-md-6 col-lg-4 col-xl-3">
						 <ServiceCard key={service.id.toString()} serviceData={service} />
					 	</div>
					 )}
					
				</div>
			);
	}
}