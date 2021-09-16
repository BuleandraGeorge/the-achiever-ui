import React from 'react';
import AppCard from './Card.js'


export default class Goals extends React.Component
{ 
  constructor(props){
    super(props);
    this.state={
      goalList:[
        { 
          id:1,
          title:"Goals in React",
          description:"Recreate the The Achiever UI using React",
          noTasks:32  
        },
        { id:2,
          title:"Stay accountable",
          description:"Not down how much time you user to do that",
          noTasks:32 
        },
        {
          id:3,
          title:"Goals in React",
          description:"Recreate the The Achiever UI using React",
          noTasks:32  
        },
        {
          id:4,
          title:"Stay accountable",
          description:"Not down how much time you user to do that",
          noTasks:32 
        },
        {
          id:5,
          title:"Goals in React",
          description:"Recreate the The Achiever UI using React",
          noTasks:32  
        },
        {
          id:6,
          title:"Stay accountable",
          description:"Not down how much time you user to do that",
          noTasks:32 
        },
        {
          id:7,
          title:"Goals in React",
          description:"Recreate the The Achiever UI using React",
          noTasks:32  
        },
        {
          id:8,
          title:"Stay accountable",
          description:"Not down how much time you user to do that",
          noTasks:32 
        },
      ]
    }
    
  }
  
    render(){
        return (
          <div className="container mt-5 pt-1">
            <h1 className="text-center my-4">Goals</h1>
            <div className="row">
            {this.state.goalList.map((goal) =>
              <div className="col-s-12 col-md-6 col-lg-4 col-xl-3 mb-4 ">
                <AppCard key={goal.id.toString()} goalData={goal} />
              </div>)}
            </div>
          </div>
        )
    }
}