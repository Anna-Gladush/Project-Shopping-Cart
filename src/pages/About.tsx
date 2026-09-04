import { useTranslation } from 'react-i18next';

import type { JSX } from "react/jsx-dev-runtime";

export const About = (): JSX.Element => {
  const { t } = useTranslation("about")

  return (
    <>
    <section className="about">
      <h2>{t("about")}</h2>
      <img src="./images/natalia-bazyl-FqD9dZn9oeU-unsplash.jpg"/>
      <div className="pros">
        <div>
          <p className='about-title'>{t("pros.online.bold")}</p>
          <p>{t("pros.online.text")}</p>
        </div>        
        <div>
          <p className='about-title'>{t("pros.shipping.bold")}</p>
          <p>{t("pros.shipping.text")}</p>
        </div>
        <div>
          <p className='about-title'>{t("pros.return.bold")}</p>
          <p>{t("pros.return.text")}</p>
        </div>
        <div>
          <p className='about-title'>{t("pros.payment.bold")}</p>
          <p>{t("pros.payment.text")}</p>
        </div>
        <p className='about-description'>{t("description")}</p>
      </div>
    </section>
    </>
  )
}