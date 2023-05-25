import React, { useState, useContext } from 'react';
import style from '../Styles/Payment.module.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import OrderAdress from '../Users/OrderAdress';
import { CartContext } from "./Context";


const Payment = () => {
  
  const { cartItems } = useContext(CartContext);
  const stripePromise = loadStripe(
    'pk_test_51NB6jDKYeZyt0ZZhF4rhnhYKRp55bCCtnvCqUWE8khTmgyBk37Op5cl3jYN4fHJBA2LaLGU2RU6wFoYuuA6WO1eh00GfjV2DDF'
  );

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
    <div >
      
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
                <h2>Name:</h2>
                <p>Phone number:</p>
                <p>Adress:</p>
              </div>

            <div>
                <button className={style.boton} onClick={openPopup}>Edit adress</button>

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
