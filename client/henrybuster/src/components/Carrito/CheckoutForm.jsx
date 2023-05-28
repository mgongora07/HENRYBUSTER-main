import React, { useState, useContext, useRef } from 'react';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from "./Context";
import { postCheckout, setOrder } from '../../redux/actions';
import style from '../Styles/CheckoutForm.module.css';
import { useSelector } from 'react-redux';
import {postOrder} from '../../redux/actions'
import axios from 'axios'
import emailjs from '@emailjs/browser';



const CheckoutForm = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const currentOrder = useSelector(state => state.currentOrder)
  const amountDolars = cartItems.reduce((previous, current) => previous + current.amount * current.price, 0).toFixed(2);
  const stripe = useStripe();
  const elements = useElements();
  const amountInCents = Math.round(amountDolars * 100);

  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const form = useRef();

  


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
        if (respuesta === "succeeded") {
          setResponseMessage('Payment successful!');
          await axios.post('http://localhost:3001/purchase/guest',currentOrder)
          elements.getElement(CardElement).clear();
          setOrder(currentOrder)
          emailjs.sendForm('service_816e43q', 'template_tcxw4vn', form.current, 'W3vt9Xtn4Qq49pmM4')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          clearCart();
          
     

          
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
    <form ref={form} onSubmit={handleSubmit} >
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

        <input type='text'  name="user_name"  value={currentOrder.name}  /> 
        <input type='text' name="user_email" value={currentOrder.email}/>
        <textarea name="message"  value={"Hemos recibido tu compra, un abrazo" } />

        <button className={`${style.boton} ${stripe && currentOrder && Object.keys(currentOrder).length !== 0 ? '' : style.disabledButton}`} disabled={!stripe || !currentOrder || Object.keys(currentOrder).length === 0}>
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
