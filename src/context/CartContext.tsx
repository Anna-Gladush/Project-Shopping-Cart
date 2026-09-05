/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { getProductByID } from "../data/data";
import { useLocalStorage } from "../customHook/useLocalStorage"


export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const { storedValue, setValue} = useLocalStorage("cart", [])
  const [cartItems, setCartItems ] = useState(storedValue);

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
      setValue(updatedCartItems)

    } else {
      setCartItems([...cartItems, { id: productId, quantity: 1 }]);
      setValue([...cartItems, { id: productId, quantity: 1 }])
    }

  }

  function getCartItemsWithProducts() {
    return cartItems.map(item => ({
      ...item,
      product: getProductByID(item.id)
    })).filter(item => item.product)
  }

  function removeFromCart(productId) {
    const filtered = cartItems.filter(item => item.id !== productId )
    setCartItems(filtered);
    setValue(filtered)
  }

  function updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const mapped = cartItems.map((item) =>
      item.id === productId
        ? { id: productId, quantity: quantity}
        : item
    )
    setCartItems(mapped);
    setValue(mapped);
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

    return Math.round(total * 100) / 100;
  }

  function clearCart() {
    setCartItems([])
    setValue([])
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