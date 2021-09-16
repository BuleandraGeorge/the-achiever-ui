import React from "react";

export default class Task extends React.Component
{
    render()
    {
        return(
            <div className="container-fluid bg-dark text-white p-2 rounded-2 mt-2">
                <div className="row">
                    <div className="col-10 align-self-center text-center fw-bold">
                        {this.props.taskData.content}
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-sm btn-success w-100 mb-1">Done</button>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-sm btn-info w-100 mb-1">Edit</button>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-sm btn-secondary w-100">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}