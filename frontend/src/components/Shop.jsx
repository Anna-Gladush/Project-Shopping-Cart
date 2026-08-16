export const Shop = ({products, genres}) => {

  const genreList = genres.map(genre => {
    return (
      <a key={genre}>{genre}</a>
    )
  })
  const productList = products.map(product => {
    return (
      <div className="product-card" key={product.id}>
        <img src={product.img} alt={"album cover of " + product.title} />
        <p>{product.title}</p>
        <p>{product.lowest_price}</p>
      </div>
    )
  })
  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="breadcrumbs">
        <p>Home</p>
        <p>{">"}</p>
        <p>Shop</p>
      </div>
      <div className="categories">
        <a>All</a>
        {genreList}

      </div>
      <div className="products">
        {productList}
      </div>
    </div>
  )
}