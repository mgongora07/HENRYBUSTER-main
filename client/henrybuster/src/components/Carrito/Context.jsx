import React, { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'
export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
    
    if (inCart) {
      if (inCart.amount < product.Inventory.quantity) {
        setCartItems(
          cartItems.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: inCart.amount + 1 };
            } else return productInCart;
          })
        );
      } else {
        
        Swal.fire({
          text: 'Insufficient stock to add more items of this product',
          icon: 'warning',
          confirmButtonColor: '#153f59'
        });
        
      }
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };
  

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);

    if (inCart.amount === 1) {
      setCartItems(cartItems.filter((productInCart) => productInCart.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const forceItemInCart = (product, quantity) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);
    
    if (inCart) {
      if (quantity <= product.Inventory.quantity) {
        setCartItems(
          cartItems.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: quantity };
            } else return productInCart;
          })
        );
      } else {
        Swal.fire({
          text: 'Insufficient stock to add more items of this product',
          icon: 'warning',
          confirmButtonColor: '#153f59'
        });
      }
    } else {
      Swal.fire({
        text: 'Product Not in cart',
        icon: 'warning',
        confirmButtonColor: '#153f59'
      });
    }
  };
  

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, deleteItemToCart, clearCart, forceItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};

