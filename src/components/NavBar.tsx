import { useTranslation } from "react-i18next";

export const NavBar = () => {
  const { t } = useTranslation("home")
  return (
    <nav>
      <div className="logo">
        <img src="./vinyl.svg" alt="vinyl shop logo" />
        <h1>Signal to Noise</h1>
      </div>
      <div className="links">
        <a>{t("links.about")}</a>
        <a>{t("links.shop")}</a>
        <a>{t("links.search")}</a>
        <a>{t("links.cart")}</a>
      </div>
    </nav>
  )
}