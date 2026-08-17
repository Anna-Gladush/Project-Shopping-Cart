import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

export const Homepage = ({genres}) => {

  return (
    <>
      <NavBar />
      <section className="homepage">
        <div className="hero-section">
          <h2>Welcome to Signal to Noise!</h2>
          <p>Signal to Noise is your one-stop destination for vinyl records!</p>
          <p>We want you to have a lot of fun listening to analogue sound and live music!</p>
        </div>
        <div className="best-seller">
          4 items...
        </div>
        <div className="visit-shop">
          <a href="">Visit Shop <img src="" alt="" className="img-visit-shop"/></a>
        </div>
      </section>
      <Footer genres={genres} />
    </>
  )
}