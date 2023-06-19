import React, { useContext, useEffect, useState } from "react";
import style from '../Styles/Carrito.module.css'
import ItemCart from "./ItemCart";
import { CartContext } from "./Context";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useAuth } from "../../context/authContext"

const Cart = () => {
  const [productsLength, setProductsLength] = useState(0);
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { cartItems, addItemToCart, deleteItemToCart } =
    useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  ).toFixed(2);;
  const handlePayment = async (e) => {
    e.preventDefault();
    if(!user){
    Swal.fire({
      title: 'You are not registered',
      text: 'Click "ok" to continue checkout without login or sing up, click "Go" to log in or sign up',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Ok, go to Pay anyway',
      cancelButtonText: 'Go sing up or log in',
      allowEscapeKey: false,
      customClass: {
        popup: 'my-popup'
      },
      didOpen: (popup) => {
        console.log(popup);
      }
    }).then((result) => {
      if (result.isConfirmed) {
        
        navigate("/payment")
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        
       
        navigate('/login'); 
      }
    });;}else{
      navigate("/payment")
    }
  }

  return (
    <div style={{ color: "white" }}>
     
      {cartItems && (
        <div>
          <div className={style.titulo2}><h2 >Your cart</h2> </div>

          {cartItems.length === 0 ? (
            <div><p>Your cart is empty</p></div>
            
          ) : (
            
            <div>
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}
             
          <button className={style.boton}
          onClick={handlePayment}
          >Go to pay (${total} USD)</button>
          
         
            </div>
          )}
          

         
        </div>
      )}
      
    </div>
  );
};

export default Cart;
