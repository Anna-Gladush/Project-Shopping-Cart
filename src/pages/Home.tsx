import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import type { JSX } from "react/jsx-runtime";
import type { ShopProps } from "./Shop";
import type { discogs } from "../data/data";

export const Homepage = ({products}: ShopProps): JSX.Element => {
  const { t } = useTranslation("home")
  return (
    <>
      <section className="homepage">
        <div className="hero-section">
          <div className="hero-text">
            <h2>{t("homepage.welcome")}</h2>
            <div className="hero-text-description">
              <p>{t("homepage.p1")}</p>
              <p>{t("homepage.p2")}</p>
            </div>
          </div>
          <img src="/images/joss-broward-ItgwitBR4no-unsplash.jpg" className="hero-image"/>
        </div>
        <div className="best-seller">
          <h3>Best sellers:</h3>
          {products.map((product: discogs, idx: number): JSX.Element => {
              const img_src = product.images[0].resource_url;
              if (idx > 3) return;
              return (
                <Link to={`/products/${product.id}`} key={product.id} className="product-card">
                  <div>
                    <img src={img_src} alt={"album cover of " + product.title}/>
                    <h4>{product.artists[0].name}</h4>
                    <p>{product.title}</p>
                    <p className="price">${product.lowest_price}</p>
                  </div>
                </Link>
              )})}
        </div>
        <hr className="divider"/>
        <div className="visit-shop">
          <Link to="/products">{t("homepage.visit")}<img src="./images/natalia-bazyl--QHpWfg-C8c-unsplash.png" alt="" className="img-visit-shop"/></Link>
        </div>
        <hr className="divider"/>
      </section>
    </>
  )
}