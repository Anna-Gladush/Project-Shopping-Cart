export const NavBar = () => {

  return (
    <nav>
      <div className="logo">
        <img src="./vinyl.svg" alt="vinyl shop logo" />
        <h1>Signal to Noise</h1>
      </div>
      <div className="links">
        <a>About</a>
        <a>Shop</a>
        <a>Search</a>
        <a>Cart</a>
      </div>
    </nav>
  )
}