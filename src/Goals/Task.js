import React from "react";

export default class Task extends React.Component
{
    taskStyling(isDone)
    {
        let baseStyling = "container-fluidtext-white p-2 rounded-2 mt-2"
        return isDone ? baseStyling + " bg-success":baseStyling + " bg-warning"
    }
    buttonStyling(isDone)
    {
        var baseStyling = "btn btn-sm w-100 mb-1"
        return isDone ? baseStyling + " bg-warning": baseStyling + " bg-dark text-white";
    }
    render()
    {
        return(
            <div className={this.taskStyling(this.props.taskData.done)}>
                <div className="row">
                    <div className="col-10 align-self-center text-center fw-bold">
                        {this.props.taskData.content}
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <div className="col-12">
                                <button className={this.buttonStyling(this.props.taskData.done)}>Done</button>
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