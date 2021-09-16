import React from 'react';
export default class AppCard extends React.Component
{
    render(){
        return (
            <div className='card shadow-lg text-light bg-dark'>
                <div className="card-body">
                    <div className="card-title text-truncate" style={{fontSize:"2em"}}>
                        <a className="text-decoration-none text-reset" href="#">{this.props.goalData.title}</a>
                    </div>
                    <div className="card-subtitle mb-2 text-muted">Tasks: {this.props.goalData.noTasks}</div>
                    <div className="card-text mb-2">
                        {this.props.goalData.description}
                    </div>
                    <div className="row">
                        <div className="col"><a href="#" className="btn btn-danger w-100">Delete</a></div>
                        <div className="col"><a href="#" className="btn btn-info w-100">Info</a></div>
                    </div>
                </div>
            </div>
        );
    }
}