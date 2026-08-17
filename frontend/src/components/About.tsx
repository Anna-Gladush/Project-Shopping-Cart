import { NavBar } from "./NavBar"
import { Footer } from "./Footer"
export const About = ({genres}) => {
  return (
    <>
    <NavBar />
    <section className="about">
      <h2>About Us</h2>
      <img src="./images/natalia-bazyl-FqD9dZn9oeU-unsplash.jpg" width={1000}/>
      <div>
        <div>
          <p>Shop online</p>
          <p>Explore a vast collection of premium vinyl records from the comfort of your home.</p>
        </div>        
        <div>
          <p>Free shipping</p>
          <p>Enjoy the convenience of free shipping on all orders, nationwide.</p>
        </div>
        <div>
          <p>Return policy</p>
          <p>Your satisfaction is our priority. Return any product you are not satisfied with.</p>
        </div>
        <div>
          <p>Payment methods</p>
          <p>Choose from a variety of secure payment methods to complete your transactions.</p>
        </div>
        <p>

        </p>
      </div>
    </section>
    <Footer genres={genres}/>
    </>
  )
}