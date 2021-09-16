import React from 'react';
import ActiveSubscriptions from './ActiveSubscriptions/ActiveSubscriptions.js';
import Services from './Services/Services.js';
import PaymentMethods from './PaymentMethods/PaymentMethods.js';
import ChangePassword from './ChangePassword/ChangePasswordSection.js';

export default class Account extends React.Component{
	
	render()
	{
		return(
			<div className="container mt-5 pt-2">
				<h1 className="text-center mt-2"> Your Profile </h1>
				<ActiveSubscriptions />
				<Services />
				<PaymentMethods />
				<ChangePassword />
			</div>
		);
	}
}	