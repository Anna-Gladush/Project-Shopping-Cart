import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

export const Cart = ({cart, genres}) => {
  const cartList = cart.map(item => {
    return (
      <div className="cart-item">
        <img src={item.img} alt={"album cover of " + item.title } />
        <div>
          <p>{item.title}</p>
          <button>Remove</button>
        </div>
        <div>
          <p>${item.price}</p>
          <input type="number" name={"quantity-of-" + item.title} id={"quantity-of-" + item.title} defaultValue={item.quantity}/>
          <p>${item.price * item.quantity}</p>
        </div>
      </div>
    )
  })

  const total = cart.reduce((prev, curr) => {
    return prev + (curr.price * curr.quantity);
  }, 0);

  const giftCode = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <NavBar />
      <section className="cart">
        <h2>Your cart</h2>
        <div className="cart-product-titles">
          <p>Product</p>
          <div>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        <div className="cart-products">
          {cartList}
        </div>
        <div>
          <form>
            <p>Enter your gift code: </p>
            <input type="text" name="gift" id="gift" />
            <button onClick={(e) => giftCode(e)}>Apply</button>
          </form>
          <div>
            <div>
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <p>Tax included and shipping calculated at checkout</p>
            <div>
              <button>Continue shopping</button>
              <button>Checkout</button>
            </div>
          </div>
        </div>
      </section>
      <Footer genres={genres} /> 
    </>
  )
}