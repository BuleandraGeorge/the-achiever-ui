import React from 'react';

export default class ServiceCard extends React.Component{
	render()
	{
		return(

		<div className='card shadow-lg text-light bg-dark'>
            <div className="card-body">
                <div className="card-title text-truncate" style={{fontSize:"2em"}}>
                    {this.props.serviceData.name}
                </div>
                <div className="card-text mb-2">
                     <p>
                     {this.props.serviceData.description}
                     </p>
                     <div className="row">
                     	<div className="col-6">Plan</div>
                     	<div className="col-6">{this.props.serviceData.plan}</div>
                     </div>
                     <div className="row">
                     	<div className="col-6">Price</div>
                     	<div className="col-6">{this.props.serviceData.price}</div>
                     </div>
                </div>
                <div className="row">
                    <div className="col"><a href="#" className="btn btn-danger w-100">Activate</a></div>
                </div>
            </div>
        </div>
			);
	}
}