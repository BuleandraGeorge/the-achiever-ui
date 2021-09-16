import React from 'react';

export default class GoalForm extends React.Component
{
    render()
    {
        return(
            <form>
                <div>
                    <div className="mb-2">
                        <label for="goal-title">Choose a meaningfull title</label>
                        <input type='text' className="form-control" id="goal-title"></input>
                    </div>
                    <div className="mb-2">
                        <label for="goal-description">Describe it in few motivational words</label>
                        <textarea className="form-control" id="goal-description" row='3' />
                    </div>
                    <div className="mb-2">
                        <label for="goal-start-date">When do you want to start?</label>
                        <input type='datetime-local' className="form-control" id="goal-start-date"></input>
                    </div>
                    <div className="mb-2">
                        <label for="goal-deadline">What's the deadline?</label>
                        <input type='datetime-local' className="form-control" id="goal-deadline"></input>
                    </div>
                </div>
                <div className="mt-4">
                    <h4 className="text-center"> What the first thing you want to do to bring you closer to achieve the goal</h4>
                    <div>
                        <input type='text' className="form-control" placeholder="content"></input>
                    </div>
                </div>
                <button className="btn btn-success w-100 mt-4 fw-bold"> GO </button>
            </form>
        );
    }
}