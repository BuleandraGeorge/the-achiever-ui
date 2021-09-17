import React from 'react';
import NavBar from './Navigation/NavBar.js';
import Goals from './Goals/Goals.js';
import Account from './Account/Account.js';
import AddCard from './Account/PaymentMethods/AddCardPage.js';
import HomePage from './Home/HomePage.js';
import Checkout from './Checkout/Checkout.js';
import Message from './Checkout/Message.js';
import GoalDetails from './Goals/GoalDetails';
import AddGoal from './Goals/AddGoal';
import SignUp from  './Account/SignUp.js'


import {
    Switch,
    Route,
  } from "react-router-dom";


export default class App extends React.Component
{
    render()
    {
        return (
            <div>
            <NavBar/>
                <Switch>
                    <Route path="/homepage">
                        <HomePage />
                    </Route>
                    <Route exact path="/">
                        <Goals />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/add-card">
                        <AddCard />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/message">
                        <Message />
                    </Route>
                    <Route path="/goal-details">
                        <GoalDetails />
                    </Route>
                    <Route path="/add-goal">
                        <AddGoal />
                    </Route>
                    <Route path="/sign-un">
                        <SignUp />
                    </Route>
                </Switch>
            </div>
        )
    }
}
