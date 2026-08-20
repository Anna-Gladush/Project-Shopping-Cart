import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useTranslation } from 'react-i18next';

import type { JSX } from "react/jsx-dev-runtime";

export const About = (): JSX.Element => {
  const { t } = useTranslation("about")

  return (
    <>
    <NavBar />
    <section className="about">
      <h2>{t("about")}</h2>
      <img src="./images/natalia-bazyl-FqD9dZn9oeU-unsplash.jpg" width={1000}/>
      <div className="pros">
        <div>
          <p>{t("pros.online.bold")}</p>
          <p>{t("pros.online.text")}</p>
        </div>        
        <div>
          <p>{t("pros.shipping.bold")}</p>
          <p>{t("pros.shipping.text")}</p>
        </div>
        <div>
          <p>{t("pros.return.bold")}</p>
          <p>{t("pros.return.text")}</p>
        </div>
        <div>
          <p>{t("pros.payment.bold")}</p>
          <p>{t("pros.payment.text")}</p>
        </div>
        <p>{t("description")}</p>
      </div>
    </section>
    <Footer />
    </>
  )
}