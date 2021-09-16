import React from 'react';
import PasswordForm from './PasswordFormCard.js';


export default class ChangePassword extends React.Component
{
	render()
	{
		return(
			<div className="row mb-4">
				<h2>Change Password</h2>
				<div className="col-s-12 col-md-6 col-lg-4 col-xl-3">
					<PasswordForm />
				</div>
			</div>
			)
	}
}