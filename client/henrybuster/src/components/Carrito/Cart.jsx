import React, { useContext, useEffect, useState } from "react";
import  ItemCart  from "./ItemCart";
import { CartContext } from "./Context";

const Cart = () => {
  
  const [productsLength, setProductsLength] = useState(0);

  const { cartItems, addItemToCart, deleteItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems?.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems?.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div >
     

      {cartItems && (
        <div >
          <h2>Tu carrito</h2>

          {cartItems.length === 0 ? (
            <p >Tu <i class="fa-solid fa-cart-shopping"></i> está vacío</p>
          ) : (
            <div >
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}
            </div>
          )}

          <h2 >Total: ${total}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
