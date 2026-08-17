// import { NavBar } from "./NavBar"
// import { Footer } from "./Footer"
import { Card } from "./Card"
import { useState } from "react"

export const Shop = ({products, genres}) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productList = products.map(product => {
    const img_src = product.images[0].resource_url;
    return (
      <button key={product.id} onClick={() => setSelectedProduct(product)}>
        <div className="product-card">
          <img src={img_src} alt={"album cover of " + product.title} width={50}/>
          <p>{product.artists[0].name}</p>
          <p>{product.title}</p>
          <p>${product.lowest_price}</p>
        </div>
      </button>
    )
  })
  return (
    <>
      {/* <NavBar /> */}
      <section className="shop">
        <h2>Shop</h2>
        <div className="breadcrumbs">
          <a>Home</a>
          <p>{">"}</p>
          <a>Shop</a>
        </div>
        <div className="categories">
          <a>All</a>
          {genres}
        </div>
        <div className="products">
          {selectedProduct === null ? productList : (<Card product={selectedProduct} setSelectedProduct={setSelectedProduct}/>)}
        </div>
      </section>
      {/* <Footer genres={genres} /> */}
    </>
  )
}