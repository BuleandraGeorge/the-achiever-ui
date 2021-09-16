import React from 'react';

export default class SubscriptionCard extends React.Component{
	//we need to fill the card fiels with props got from Activesubscriptions

	render()
	{
	 return(
	 	<div className='card shadow-lg text-light bg-dark'>
            <div className="card-body">
                <div className="card-title text-truncate" style={{fontSize:"2em"}}>
                {this.props.subData.serviceName}
                </div>
                <div className="card-text mb-2">
                     <div className="row">
                     	<div className="col-6">Plan</div>
                     	<div className="col-6">{this.props.subData.plan}</div>
                     </div>
                     <div className="row">
                     	<div className="col-6">Exp Date</div>
                     	<div className="col-6">{this.props.subData.expDate}</div>
                     </div>
                </div>
                <div className="row">
                    <div className="col"><a href="#" className="btn btn-danger w-100">Cancel</a></div>
                </div>
            </div>
        </div>
	 );
	}
}