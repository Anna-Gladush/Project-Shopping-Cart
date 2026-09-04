/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { getProductByID } from "../data/data";

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems ] = useState([]);

  function addToCart(productId) {
    const existing = cartItems.find((item) => item.id === productId);
    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedCartItems = cartItems.map((item) =>
        item.id === productId
          ? { id: productId, quantity: currentQuantity + 1 }
          : item
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
    }
  }

  function getCartItemsWithProducts() {
    return cartItems.map(item => ({
      ...item,
      product: getProductByID(item.id)
    })).filter(item => item.product)
  }

  function removeFromCart(productId) {
    setCartItems(cartItems.filter(item => item.id !== productId ))
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(cartItems.map((item) =>
      item.id === productId
        ? { id: productId, quantity: quantity}
        : item
    ))
  }

  function getAllItemQuantity() {
    return cartItems.reduce((prev, current) => {
      return prev + current.quantity;
    }, 0)
  }

  function getCartTotal() {
    const total = cartItems.reduce((total, item): number => {
      const product = getProductByID(item.id)
      return total + (product ? product.lowest_price * item.quantity : 0);
    }, 0);

    return total;
  }

  function clearCart() {
    setCartItems([])
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        getCartItemsWithProducts,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart,
        getAllItemQuantity
      }}
    >
      {children}
    </ CartContext.Provider>
  );
  
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}