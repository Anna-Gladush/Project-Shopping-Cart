import { Genres } from "../components/Genres";
// import { Card } from "./Card"
// import { useState } from "react"
import type { JSX } from "react/jsx-runtime";
import type { discogs } from "../data/data";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";

export type ShopProps = {
  products: discogs[],
}

export const Shop = ({products}: ShopProps): JSX.Element => {
  // const [searchParams, setSearchParams] = useSearchParams();

  const { t } = useTranslation("home");

  // const selectedCategory = searchParams.get('category') || 'all'

  const productList = products.map((product: discogs): JSX.Element => {
    const img_src = product.images[0].resource_url;
    return (
      <div key={product.id} className="product-card" /* onClick={() => setSelectedProduct(product)}*/>
        <div>
          <img src={img_src} alt={"album cover of " + product.title} width={50}/>
          <p>{product.artists[0].name}</p>
          <p>{product.title}</p>
          <p>${product.lowest_price}</p>
          <div>
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <section className="shop">
        <h2>{t("links.shop")}</h2>
        <div className="breadcrumbs">
          <Link to="/">{t("links.home")}</Link>
          <p>{">"}</p>
          <Link to="/products">{t("links.shop")}</Link>
        </div>
        <div className="categories">
          <a>{t("genres.all")}</a>
          <Genres />
        </div>
        <div className="products">
          {productList}
        </div>
      </section>
    </>
  )
}