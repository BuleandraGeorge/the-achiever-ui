import React from 'react';
import InjectedCheckoutForm from "./CardForm.js";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51JPUPSFrKFZJSdYm9qilHxr82f0igC2OHn4QkH1LXecNzIKjfmDZ4ZGKk6ofPkLmOmIfZ5Ddpfmd2pMgtq9rbr6S00mwTqikjZ")

class AddCard extends React.Component{
	render(){
    return (
        <div className="container mt-5 pt-4 ">
          <h1 className="text-center mb-5"> Add a card </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-s-12 col-md-10 col-lg-8 col-xl-6">
              <div className="card bg-dark text-white">
                <div className="card-body">
                  <h1 className="card-title mb-2"> Card </h1>
                  <Elements stripe={stripePromise}>
                    <InjectedCheckoutForm />
                  </Elements>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
};
export default AddCard