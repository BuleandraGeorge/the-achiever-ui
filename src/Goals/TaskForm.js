import React from "react";

export default class TaskForm extends React.Component
{   constructor(props)
    {
        super(props)
        this.state={
            value:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
   
    handleSubmit(event){
        event.preventDefault();
        this.setState({})
    }

    render(){
        return(
            <div className="mt-4 bg-dark p-3 bg-warning text-white rounded-2">
                <h1 className="text-center"> Add a task to the goal</h1>
                <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={this.handleChange} value={this.state.value} placeholder="Content"></textarea>
                </div>
                    <button className="btn btn-warning" type="submit" onClick={()=>this.props.handleAddTask()} >Add</button>
                </form>
          </div>
        );
    }
}