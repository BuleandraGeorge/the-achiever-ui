import React from 'react';

export default class PaymentCard extends React.Component{
	render()
	{
		return(

		<div className='card shadow-lg text-light bg-dark'>
            <div className="card-body">
                <div className="card-title text-truncate" style={{fontSize:"2em"}}>
                    {this.props.cardData.cardType}
                </div>
                <div className="card-text mb-2">
                     <div className="row">
                     	<div className="col-12 text-center">**** **** **** 
                         {this.props.cardData.endDigits}</div>
                     </div>
                     <div className="row d-flex justify-content-end">
                        <div className="col-6 text-center">Exp date </div>
                        <div className="col-6 text-center">{this.props.cardData.expDate}</div>
                     </div>
                </div>
                <div className="row">
                    <div className="col"><a href="#" className="btn btn-danger w-100">Delete</a></div>
                </div>
            </div>
        </div>
			);
	}
}