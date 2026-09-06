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
  const { t } = useTranslation("home");

  const { addToCart } = useCart();
  const [ searchParams, setSearchParams ] = useSearchParams();
  const category = searchParams.get('category') || 'all';
  const searchTerm = searchParams.get("q")?.toLowerCase() || "";

  function getProductByCategory(category, searchTerm) {
    return products.filter((product) => {
      const matchesNameInProduct = product.title.toLowerCase().includes(searchTerm) || product.artists[0].name.toLowerCase().includes(searchTerm)
      const matchesCategory = category === "all" ||product.genres.includes(category)

      return matchesCategory && matchesNameInProduct
    }
  )
  }

  const productList = getProductByCategory(category, searchTerm).map((product: discogs): JSX.Element => {
    const img_src = product.images[0].resource_url;
    return (
      <div key={product.id} className="product-card">
        <div>
          <img src={img_src} alt={"album cover of " + product.title}/>
          <p className="product-title">{product.artists[0].name}</p>
          <p>{product.title}</p>
          <p>${product.lowest_price}</p>
          <div>
            <Link to={`/products/${product.id}`}>{t("details")}</Link>
            <button onClick={() => addToCart(product.id)}>{t("add")}</button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <>
      <section className="shop">
        <h2>{t("links.shop")}</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          setSearchParams(searchParams)
        }}>
          <input type="text" defaultValue="" placeholder={t("searchProducts")} name="q" onChange={(e) => {
            searchParams.set("q", e.target.value);
            searchParams.set("category", "all");
            }}/>
          <button type="submit">
            <img src="/icons/search.svg" />
            Search
            </button>
        </form>

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