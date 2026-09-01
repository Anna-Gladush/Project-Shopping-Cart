import { useTranslation } from "react-i18next";
import type { JSX } from "react/jsx-runtime";
import { getProductByID, type tracklist } from "../data/data";
import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Card = (): JSX.Element => {
  const { addToCart, cartItems } = useCart();
  const { t } = useTranslation("card");
  const { id } = useParams();
  const navigate = useNavigate();
  const [ product, setProduct ] = useState(null);


  useEffect(() => {
    const foundProduct = getProductByID(id)
    if (!foundProduct) {
      navigate("/");
      return
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProduct(foundProduct)
  }, [id, navigate])
  

  if (!product) return <h2>Loading...</h2>

  const productInCart = cartItems.find((item) => item.id === product.id);
  const productQuantityLabel = productInCart ? productInCart.quantity : "";
  
  return (
    <div>
      <div className="breadcrumbs">
        <Link to="/">{t("links.home")}</Link>
        <p>{">"}</p>
        <Link to="/products">{t("links.shop")}</Link>
        <p>{">"}</p>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>
      {/* Card */}
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
          {product.tracklist.map((track: tracklist) => {
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
        <p>{productQuantityLabel}</p>
        <button className="increment" onClick={() => addToCart(product.id)}>+</button>
        <button className="decrement">-</button>
      </div>
      <button className="add-to-cart" onClick={() => addToCart(product.id)}>{t("add")}</button>
      <button className="go-back">{t("back")}</button>
    </div>
    </div>
    
  )
}