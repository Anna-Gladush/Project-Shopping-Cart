import { Genres } from "../components/Genres";
import type { JSX } from "react/jsx-runtime";
import type { discogs } from "../data/data";
import { Link, useSearchParams } from "react-router";
import { useTranslation } from "react-i18next";
import { useCart } from "../context/CartContext";

export type ShopProps = {
  products: discogs[],
}

export const Shop = ({products}: ShopProps): JSX.Element => {
  const { addToCart } = useCart();
  const [ searchParams ] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const { t } = useTranslation("home");

  function getProductByCategory(category) {
    if (category === 'all') return products;
    return products.filter(product => product.genres.includes(category))
  }
  const productList = getProductByCategory(category).map((product: discogs): JSX.Element => {
    const img_src = product.images[0].resource_url;
    return (
      <div key={product.id} className="product-card">
        <div>
          <img src={img_src} alt={"album cover of " + product.title}/>
          <p>{product.artists[0].name}</p>
          <p>{product.title}</p>
          <p>${product.lowest_price}</p>
          <div>
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
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
          <Link to="/products">{t("genres.all")}</Link>
          <Genres />
        </div>
        <div className="products">
          {productList}
        </div>
      </section>
    </>
  )
}