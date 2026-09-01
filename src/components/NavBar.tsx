import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime";

export const NavBar = (): JSX.Element => {
  const { i18n, t } = useTranslation("home");
  
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src="/vinyl.svg" alt="vinyl shop logo" />
          <h1>Signal to Noise</h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/">{t("links.home")}</Link>
        <Link to="/about">{t("links.about")}</Link>
        <Link to="/products">{t("links.shop")}</Link>
        <Link to="/checkout">{t("links.cart")}</Link>
      </div>
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
    </nav>
  )
}