import React from "react";
import ServiceCard from "../Account/Services/ServiceCard.js"

export default class Checkout extends React.Component
{
	render()
	{
		return(
				<div className="container mt-5 pt-4">
					<ServiceCard />
				</div>
			);
	}
}