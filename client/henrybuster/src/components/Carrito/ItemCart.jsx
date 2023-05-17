import React, { useContext } from "react";
import { CartContext } from "./Context";
import './Cart.css'

const ItemCart = ({ item }) => {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);
  const { amount } = item;

  return (
    <div className="list-item">
      <img src={item.image} alt={item.name} />
      <div className="list-item-details">
        <div>
          <p>{item.name}</p>
          <div className="list-item-buttons">
            <button onClick={() => addItemToCart(item)}>
              Añadir +1
            </button>
            <button onClick={() => deleteItemToCart(item)}>
              Remover -1
            </button>
          </div>
        </div>
        <div>
          <div><p>Items:{item.amount}</p></div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
