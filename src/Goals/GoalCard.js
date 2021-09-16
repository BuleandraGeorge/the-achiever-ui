import React from "react";

class GoalCard extends React.Component {
    
    
    render() {
        return (
            <div id="goal-description" className="bg-dark p-3 text-white rounded-2">
                <h1 className="text-center fst-italic pb-2"> Goal Name </h1>
                <h4 className="text-center bg-secondary text-warning fw-lighter fst-italic rounded-2 p-2">
                    "Aute consequat et ullamco ipsum id excepteur exercitation.
                    Consequat occaecat pariatur non commodo aute pariatur ea nostrud incididunt.
                    Fugiat veniam proident nisi excepteur adipisicing.
                    Fugiat proident culpa consectetur ut fugiat consequat officia esse qui non non." 
                </h4>
                <div className="row pt-2 d-flex justify-content-center">
                    <div className="col">
                        <button className="btn btn-sm btn-warning w-100">Back to Goals </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-info w-100">Goal Edit</button>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-secondary w-100">Goal Delete </button>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-danger w-100" onClick={() => this.props.handleAddTask()}>Add Task </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoalCard;
