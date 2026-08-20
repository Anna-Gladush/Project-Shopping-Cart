import { useTranslation } from "react-i18next";

export const Card = ({product, setSelectedProduct}) => {
  const { t } = useTranslation("card")
  
  const returnShopping = () => {
    setSelectedProduct(null)
  }
  return (
    <div className="card">
      <img src={product.images[0].resource_url} alt={"album cover of " + product.title} />
      <h3>{product.title}</h3>
      <p>{t("lowest")} ${product.lowest_price}</p>
      <div>
        <p>{t("artists")}</p>
        {product.artists.map(artist => {
          return (
            <p key={artist.name}>{artist.name}</p>
          )
        })}
        <p>{product.year}</p>
        <div className="tracklist">
          {product.tracklist.map(track => {
            return (
              <li className="track" key={track.title}>
                <p>{track.position}</p>
                <p>{track.title}</p>
                <p>{track.duration}</p>
              </li>
            )
          })}
        </div>

      </div>
      <div className="quantity">
        <input type="number" max={product.num_for_sale} id={"quantity-of-" + product.title} name={"quantity-of-" + product.title}/>
        <button className="increment">+</button>
        <button className="decrement">-</button>
      </div>
      <button className="add-to-cart">{t("add")}</button>
      <button className="go-back" onClick={returnShopping}>{t("back")}</button>
    </div>
  )
}