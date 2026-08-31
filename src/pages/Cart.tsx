import { useTranslation } from "react-i18next";

import type { JSX } from "react/jsx-runtime";
import { useContext, type MouseEvent } from "react";
import { CartContext } from "../context/CartContext";

type cart = {
  img: string,
  title: string,
  price: number,
  quantity: number,
}

export const Cart = (): JSX.Element => {
  const { cart } = useContext(CartContext)
  const { t } = useTranslation("home")
  
  const cartList = cart.map((item: cart) => {
    return (
      <div className="cart-item">
        <img src={item.img} alt={"album cover of " + item.title } />
        <div>
          <p>{item.title}</p>
          <button>{t("cart.remove")}</button>
        </div>
        <div>
          <p>${item.price}</p>
          <input type="number" name={"quantity-of-" + item.title} id={"quantity-of-" + item.title} defaultValue={item.quantity}/>
          <p>${item.price * item.quantity}</p>
        </div>
      </div>
    )
  })

  const total = cart.reduce((prev: number, curr: cart): number => {
    return prev + (curr.price * curr.quantity);
  }, 0);

  const giftCode = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
    e.preventDefault();
  }

  return (
    <>
      <section className="cart">
        <h2>{t("cart.h2")}</h2>
        <p>{t("cart.disclaimer")}</p>
        <div className="cart-product-titles">
          <p>{t("cart.header.product")}</p>
          <div>
            <p>{t("cart.header.price")}</p>
            <p>{t("cart.header.quantity")}</p>
            <p>{t("cart.header.total")}</p>
          </div>
        </div>
        <div className="cart-products">
          {cart && cartList}
        </div>
        <div>
          <form>
            <p>{t("cart.gift")} </p>
            <input type="text" name="gift" id="gift" />
            <button onClick={(e) => giftCode(e)}>{t("cart.apply")}</button>
          </form>
          <div>
            <div>
              <p>{t("cart.subtotal")}</p>
              <p>${cart ? total : 0}</p>
            </div>
            <p>{t("cart.tax")}</p>
            <div>
              <button>{t("cart.continue")}</button>
              <button>{t("cart.checkout")}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}