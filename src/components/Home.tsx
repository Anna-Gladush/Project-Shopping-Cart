import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useTranslation } from "react-i18next";

import type { JSX } from "react/jsx-runtime";

export const Homepage = (): JSX.Element => {
  const { t } = useTranslation("home")

  return (
    <>
      <NavBar />
      <section className="homepage">
        <div className="hero-section">
          <h2>{t("homepage.welcome")}</h2>
          <p>{t("homepage.p1")}</p>
          <p>{t("homepage.p2")}</p>
        </div>
        <div className="best-seller">
          4 items...
        </div>
        <div className="visit-shop">
          <a href="">{t("homepage.visit")}<img src="" alt="" className="img-visit-shop"/></a>
        </div>
      </section>
      <Footer />
    </>
  )
}