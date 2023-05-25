import React, { useState, useContext } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from "./Context";
import { postCheckout } from '../../redux/actions';
import style from '../Styles/CheckoutForm.module.css';

const CheckoutForm = () => {
  const { cartItems } = useContext(CartContext);
  const amountDolars = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0).toFixed(2);
  const stripe = useStripe();
  const elements = useElements();
  const amountInCents = Math.round(amountDolars * 100);

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const respuesta = await postCheckout(id, amountInCents);
        console.log(respuesta, 'soy respuesta');

        if (respuesta.status ) {
          setResponseMessage('Payment successful!');
          elements.getElement(CardElement).clear();
        } else {
          setResponseMessage('Payment failed. Please try again.');
          elements.getElement(CardElement).clear();
        }
      } catch (error) {
        console.log(error);
        setResponseMessage('Payment failed. Please try again.');
        elements.getElement(CardElement).clear();
      }
    } else {
      setResponseMessage('Payment failed. Please try again.');
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.cardForm}>
        <div className={style.encabezado}>
          <i className="bi bi-credit-card me-4 fs-5"></i>
          <label className={style.etiqueta1} htmlFor="cardholderName">Pay with card</label>
          <hr />
        </div>

        <div className={style.namediv}>
          <label className={style.etiqueta} htmlFor="cardholderName">Cardholder Name</label>
          <div className={style.nameInput}>
            <input id="cardholderName" type="text" className={style.nameInput} />
          </div>
        </div>
        <div className={style.cardFormItem}>
          <label className={style.etiqueta} htmlFor="cardElement">Card Information</label>
          <CardElement
            className={style.cardInfo}
            id="cardElement"
            options={{
              style: { base: { fontSize: '16px' } }
            }}
          />
        </div>
        <button className={style.boton} disabled={!stripe}>
          {loading ? (
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : `Submit Payment ${amountDolars}`}
        </button>
        {responseMessage && <p className='"d-flex align-items-center justify-content-center"'>{responseMessage}</p>}
      </div>
    </form>
  );
};

export default CheckoutForm;
