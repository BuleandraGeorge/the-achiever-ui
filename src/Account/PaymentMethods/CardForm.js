import React from 'react';
import {CardElement} from '@stripe/react-stripe-js';
import {ElementsConsumer} from '@stripe/react-stripe-js';



class CheckoutForm extends React.Component {
  handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();


    const {stripe, elements} = this.props;


    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }


    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });


    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const styling={
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }
   
  };


  render() {
    const {stripe} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <CardElement
          id="card-input"
          options={this.styling}
          onChange={(event)=>{
            const divErrors = document.getElementById('errors');
              console.log(divErrors);
              if (event.error)
              {
                divErrors.innerText=event.error.message;
              }else{
                divErrors.innerText="";
              }
          }}
        />
        <div id="errors" className="text-muted" style={{fontSize:"0.9em"}}></div>
        <button className="btn btn-success mt-2" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  }
}


const InjectedCheckoutForm = () =>{
  return (
    <ElementsConsumer>
      {({elements, stripe}) => (
        <CheckoutForm elements={elements} stripe={stripe} />
      )}
    </ElementsConsumer>
  );
};
export default InjectedCheckoutForm;
