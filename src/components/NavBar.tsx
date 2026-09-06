import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";
import { useCart } from "../context/CartContext";

export const NavBar = (): JSX.Element => {
  const { i18n, t } = useTranslation("home");
  const { getAllItemQuantity } = useCart();
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }
  const quantity = getAllItemQuantity() || 0;
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/vinyl.svg" alt="vinyl shop logo" />
          <h1>Audio Vinyl</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/">{t("links.home")}</Link>
        <Link to="/about">{t("links.about")}</Link>
        <Link to="/products">{t("links.shop")}</Link>
        <div className="cart" style={{position: "relative"}}>
          <Link to="/checkout">
          <img src="/icons/shopping_cart.svg" alt={t("links.cart")} />
          </Link>
          <div style={{position: "absolute"}}>
            <p>{quantity}</p>
          </div>
        </div>
      </div>
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
    </nav>
  )
}