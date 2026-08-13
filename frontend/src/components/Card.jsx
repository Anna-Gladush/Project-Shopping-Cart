export const Card = ({title, img, description}) => {

  return (
    <div className="card">
      <h3>{title}</h3>  // may have to change
      <img src={img} alt={"image of " + title} />
      <div className="quantity">
        <input type="number" />
        <button className="increment">+</button>
        <button className="decrement">-</button>
      </div>
      <p>{description}</p>
      <button className="add-to-cart">Add to cart</button>
      <button className="go-back">Go back</button>
    </div>
  )
}