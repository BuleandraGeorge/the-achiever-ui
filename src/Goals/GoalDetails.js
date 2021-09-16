import React from "react";
import GoalCard from "./GoalCard";
import Task from "./Task";
import TaskForm from './TaskForm';

export default class GoalDetails extends React.Component
{   
    constructor(props){
        super(props);
        this.state={
            tasks:[
                {
                    id:1,
                    content:"Consectetur ad proident eu aliqua aliquip Lorem eu.",
                    done:false
                },
                {
                    id:2,
                    content:"Consectetur ad proident eu aliqua aliquip Lorem eu.",
                    done:false
                },
                {
                    id:3,
                    content:"Consectetur ad proident eu aliqua aliquip Lorem eu.",
                    done:false
                },
            ],
            showAddTaskForm:false,
        }
        this.handleAddTask = this.handleAddTask.bind(this);
    }
    handleAddTask(event)
    {
        this.setState((prevState) =>({showAddTaskForm:!prevState.showAddTaskForm}))
    } 
    
    render(){
        return(
            <div id="container" className="container mt-5 pt-4" >
                <GoalCard handleAddTask={this.handleAddTask} />
                {this.state.showAddTaskForm && <TaskForm handleAddTask={this.handleAddTask} />}
                {this.state.tasks.map((task)=>
                    <Task key={task.id.toString()} taskData={task} />
                )}
            </div>
        );
    }
}