export const Shop = ({products}) => {

  products.map(product => {
    return (
      <>
        {product}
      </>
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

      </div>
      <div className="products">

      </div>
    </div>
  )
}