import React from 'react';
import PaymentCard from './PaymentCard.js'

export default class PaymentMethods extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			card:[
				{
					id:1,
					cardType:'Visa',
					endDigits:4444,
					expDate:"1/1/2021"
				}
			]
		}
	}
	render()
	{
		return(
				<div className="row mb-4">
		 			<h2> Cards </h2>
					 {this.state.card.map((card)=>
					 	<div className="col-s-12 col-md-6 col-lg-4 col-xl-3">
						 <PaymentCard key={card.id.toString()} cardData={card} />
					 </div>
					 )}
					
				</div>
			);
	}
}