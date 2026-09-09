/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";
import { getProductByID, type discogs } from "../data/data";
import { useLocalStorage } from "../customHook/useLocalStorage"

type CartWithProducts = {
  id: number,
  product: discogs,
  quantity: number
}

type CartItemType = {
  id: number,
  quantity: number
}

type CartContextType = {
  cartItems: CartItemType[],
  addToCart: (productId: number) => void,
  getCartItemsWithProducts: () => CartWithProducts[],
  removeFromCart: (productId: number) => void,
  updateQuantity: (productId: number, quantity: number) => void,
  getCartTotal: () => number,
  clearCart: () => void,
  getAllItemQuantity: () => number
}

export const CartContext = createContext<CartContextType | null>(null);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const { storedValue, setValue} = useLocalStorage("cart", [])
  const [cartItems, setCartItems ] = useState(storedValue);

  function addToCart(productId: number): void {
    const existing = cartItems.find((item: CartItemType) => item.id === productId);
    if (existing) {
      const currentQuantity = existing.quantity;
      const updatedCartItems = cartItems.map((item: CartItemType) =>
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
  function getCartItemsWithProducts(): CartWithProducts[] {
    console.log(cartItems.map((item: CartItemType) => ({
      ...item,
      product: getProductByID(item.id)
    })).filter((item: {item: CartItemType, product: discogs}) => item.product))
    return cartItems.map((item: CartItemType) => ({
      ...item,
      product: getProductByID(item.id)
    })).filter((item: {item: CartItemType, product: discogs}) => item.product)
  }

  function removeFromCart(productId: number): void {
    const filtered = cartItems.filter((item: CartItemType) => item.id !== productId )
    setCartItems(filtered);
    setValue(filtered)
  }

  function updateQuantity(productId: number, quantity: number): void {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const mapped = cartItems.map((item: CartItemType) =>
      item.id === productId
        ? { id: productId, quantity: quantity}
        : item
    )
    setCartItems(mapped);
    setValue(mapped);
  }

  function getAllItemQuantity(): number {
    return cartItems.reduce((prev: number, current: CartItemType) => {
      return prev + current.quantity;
    }, 0)
  }

  function getCartTotal(): number {
    const total = cartItems.reduce((total: number, item: CartItemType): number => {
      const product = getProductByID(item.id)
      return total + (product ? product.lowest_price * item.quantity : 0);
    }, 0);

    return Math.round(total * 100) / 100;
  }

  function clearCart(): void {
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
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}