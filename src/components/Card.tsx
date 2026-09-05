import { useTranslation } from "react-i18next";
import type { JSX } from "react/jsx-runtime";
import { getProductByID, type tracklist } from "../data/data";
import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export const Card = (): JSX.Element => {
  const { updateQuantity, cartItems, addToCart } = useCart();
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
  console.log(cartItems)
  const productQuantityLabel = productInCart ? productInCart.quantity : "";

  const quantity = productInCart ? productInCart.quantity : 0;

  console.log(quantity)
  return (
    <section className="card">
      <div className="breadcrumbs">
        <Link to="/">{t("links.home")}</Link>
        <p>{">"}</p>
        <Link to="/products">{t("links.shop")}</Link>
        <p>{">"}</p>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </div>
      {/* Card */}
      <div className="card">
        <div className="card-details">
        <div>
          <h3>{product.title}</h3>
          <img src={product.images[0].resource_url} alt={"album cover of " + product.title} />
          <div>
        </div>
        <div>
          <h4>{t("artists")}</h4>
          {product.artists.map((artist) => {
            return (
              <p key={artist.name}>{artist.name}</p>
            )
          })}
          <p className="year">{product.year}</p>
          <div className="tracklist">
            <h4>Tracklist</h4>
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
      </div>
      </div>
      <hr className="divider"/>
      <div className="quantity">
        <p className="price">{t("lowest")} ${product.lowest_price}</p>
        <p className="product-quantity-label">{productQuantityLabel}</p>
        <button onClick={() => addToCart(product.id)}>+</button>
        <button onClick={() => updateQuantity(product.id, quantity - 1)}>-</button>
      </div>
      <div className="controller">
        <button className="add-to-cart" onClick={() => addToCart(product.id)}>{t("add")}</button>
        <button className="go-back">{t("back")}</button>
      </div>

    </div>
    </section>
    
  )
}