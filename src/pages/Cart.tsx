import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";
import type { JSX } from "react/jsx-runtime";
import { Link } from "react-router";
import { useState } from "react";

export const Cart = (): JSX.Element => {
  const [giftInput, setGiftInput] = useState({input: "", applied: false})
  const { getCartItemsWithProducts, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const { t } = useTranslation("home");
  const total = getCartTotal();
  const cartItems = getCartItemsWithProducts();
  const cartList = cartItems.map((item) => {
    return (
      <div className="cart-item" key={item.product.title}>
        <div>
          <p>{item.product.title}</p>
          <img src={item.product.images[0].resource_url} alt={"album cover of " + item.product.title } />
        </div>
        <div>
          <p>${item.product.lowest_price}</p>
        </div>
          <div className="quantity-controls">
            <p>{item.quantity}</p>
            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
            </div>
          </div>
          <p>${Math.round(item.product.lowest_price * item.quantity * 100)/100}</p>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>{t("cart.remove")}</button>
      </div>
    )
  })

  const placeOrder = () => {
    alert(t("order.place"));
    clearCart();
  }
  return (
    <>
      <section className="cart">
        <h2>{t("cart.h2")}</h2>
        <p>{t("cart.disclaimer")}</p>
        <div className="cart-product-titles">
          <p>{t("cart.header.product")}</p>
          <p>{t("cart.header.price")}</p>
          <p>{t("cart.header.quantity")}</p>
          <p>{t("cart.header.total")}</p>
        </div>
        <hr />
        <div className="cart-products">
          {cartList}
        </div>
        <div>
          <form onSubmit={(e) => e.preventDefault()}  className="gift">
            <p>{t("cart.gift")} </p>
            <input type="text" name="gift" id="gift" value={giftInput.input} onChange={(e) => setGiftInput({...giftInput, input: e.target.value})}/>
            <button disabled={giftInput.applied} onClick={() => {
              if (giftInput.input === "discount") {
              setGiftInput({...giftInput, applied: true})}}
              }>{t("cart.apply")}</button>
            <p className="discount">{giftInput.applied ? t("cart.off") : ""}</p>
          </form>
          <div className="total">
            <div>
              <p>{t("cart.subtotal")}</p>
              <p className="total-amount">${giftInput.applied ? (total - total * 0.2) : total}</p>
            </div>
            <p className="tax">{t("cart.tax")}</p>
            <div className="checkout-controller">
              <Link to="/products">{t("cart.continue")}</Link>
              <button className="checkout-btn" onClick={placeOrder}>{t("cart.checkout")}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}