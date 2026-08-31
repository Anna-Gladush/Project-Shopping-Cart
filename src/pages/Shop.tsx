import { Genres } from "../components/Genres";
// import { Card } from "./Card"
// import { useState } from "react"
import type { JSX } from "react/jsx-runtime";
import type { discogs } from "../data/data";
import { Link } from "react-router";

export type ShopProps = {
  products: discogs[],
}

export const Shop = ({products}: ShopProps): JSX.Element => {
  // const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = products.map((product: discogs): JSX.Element => {
    const img_src = product.images[0].resource_url;
    return (
      <a key={product.id} className="product-card" /* onClick={() => setSelectedProduct(product)}*/>
        <div>
          <img src={img_src} alt={"album cover of " + product.title} width={50}/>
          <p>{product.artists[0].name}</p>
          <p>{product.title}</p>
          <p>${product.lowest_price}</p>
          <div>
            <button>View Details</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </a>
    )
  })
  return (
    <>
      <section className="shop">
        <h2>Shop</h2>
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <p>{">"}</p>
          <Link to="/shop">Shop</Link>
        </div>
        <div className="categories">
          <a>All</a>
          <Genres />
        </div>
        <div className="products">
          {productList}
        </div>
      </section>
    </>
  )
}