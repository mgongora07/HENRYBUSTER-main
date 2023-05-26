import React, { useState, useContext, useEffect } from 'react';
import style from '../Styles/Payment.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import OrderAdress from '../Users/OrderAdress';
import { CartContext } from "./Context";
import { useSelector } from 'react-redux';


const Payment = () => {
  
  const { cartItems } = useContext(CartContext);
  const currentOrder = useSelector(state=>state.currentOrder)
  const stripePromise = loadStripe(
    'pk_test_51NB6jDKYeZyt0ZZhF4rhnhYKRp55bCCtnvCqUWE8khTmgyBk37Op5cl3jYN4fHJBA2LaLGU2RU6wFoYuuA6WO1eh00GfjV2DDF'
  );

  const [isDireccion, setIsDireccion] = useState(false)
  const [shipMessage, setShipMessage]= useState("")

  useEffect(() => {
    if (!currentOrder.name) {
      setShipMessage('Add an address to continue');
    } else {
      setShipMessage('');
    }
  }, [currentOrder]);



  const renderImages = () => {
    return cartItems.map((item, index) => (
      <img key={index} src={item.image} alt={`Product ${index}`} />
    ));
  };

 
  const [showPopup, setShowPopup] = useState(false);
  
    const openPopup = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
    };


  return (
    <div className={style.container}>
      
      <h1 className={style.titulos1}>Checkout:</h1>
        <div className={style.Principal}>

          <div className={style.Col1}>

            <div>
              <h1 className={style.titulos1}>It's almost yours:</h1>
            </div>
            <div>
                  <div className={style.imagecontainer}>
                    {renderImages()}
                  </div>
            </div>
              <div className={style.adress}>
                <h2>Shipping data:</h2>
                {shipMessage !== "" && <p>{shipMessage}</p>}
                <h2>{currentOrder.name ? currentOrder.name : ''}</h2>
                <p>{currentOrder.phoneNumber ? currentOrder.phoneNumber : ''}</p>
                <p>{currentOrder.street ? currentOrder.street : ''}</p>
                <p>{currentOrder.city ? currentOrder.city : ''}</p>
              </div>

            <div>
                <button className={style.boton} onClick={openPopup}>New Adress</button>

                {showPopup && (
                  <div className="overlay">
                    <OrderAdress onClose={closePopup}/>
                  </div>
                )}

            </div>

          </div>
        
          <div className={style.Col2}>
              <div></div>
              <div><Elements stripe={stripePromise}>
                <CheckoutForm/>
              </Elements>
              </div>
          </div>

      </div>
    </div>
  );
};

export default Payment;
