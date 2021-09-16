import React from 'react';

export default class PasswordForm extends React.Component
{	constructor(props)
	{
		super(props);
		this.state={
			oldPassword:"",
			newPassword:"",
			confirmPassword:"",

		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(event)
	{
		const value = event.target.value
		const name = event.target.name

		this.setState({
			[name]:value
		})
		const spanErros = document.getElementById("form-errors");
		if (value ==="")
		{	var fieldName = name.charAt(0).toUpperCase() + name.slice(1).replace("P", " P")
			spanErros.innerHTML = "Field "+fieldName + " is empty";
		}
		else
		{
			spanErros.innerHTML = "";
		}
	}
	handleFormSubmit(event)
	{
		event.preventDefault();
		alert("Form Submited");
	}

	render()
	{
		return(
			<div className="card bg-dark text-white">
				<div className="card-body">
					<div className="card-text">
						<form>
							<label for='oldPassword'>Old Password</label>
							<input className="form-control mb-2" type="password" name="oldPassword" value={this.state.oldPassword} onChange={this.handleInputChange} />
							<label  for='newPassword'>NewPassword </label>
							<input className="form-control mb-2" type="password" name="newPassword" value={this.state.newPassword} onChange={this.handleInputChange} />
							<ul>
								<li key="10">At least 8 characters</li> 
								<li key="11">At least 8 characters</li> 
								<li key="12">At least 8 characters</li> 
								<li key="13">At least 8 characters</li> 
							</ul>

							<label for='confirmPassword'>Confirm Password</label>
							<input className="form-control mb-2" type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleInputChange} />
							<div className="fs-6 text-muted  " id="form-errors">
								
							</div>
							<button type='submit' className="btn btn-success" onSubmit={this.handleFormSubmit}>Set Password</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}