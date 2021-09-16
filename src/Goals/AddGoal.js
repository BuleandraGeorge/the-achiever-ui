import React from "react";
import GoalForm from "./GoalForm";

export default class AddGoal extends React.Component
{
    render()
    {
        return(
            <div className="container mt-5 p-4">
                <div className="p-4 bg-dark text-white rounded-2">
                    <h1 className="text-center">Your Goal</h1>
                    <GoalForm/>
                </div>
            </div>
        );
    }
}