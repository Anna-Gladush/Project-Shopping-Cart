export const Card = ({title, img, artists, year, tracklist, num_for_sale, lowest_price}) => {

  return (
    <div className="card">
      <img src={img} alt={"album cover of " + "'" + title + "'"} />
      <h3>{title}</h3>
      <p>Lowest prics: ${lowest_price}</p>
      <div>
        <p>Artists: {artists}</p>
        <p>{year}</p>
        <div className="tracklist">
          {tracklist.map(track => {
            return (
              <div className="track">
                <p>{track.position}</p>
                <p>{track.title}</p>
                <p>{track.duration}</p>
              </div>
            )
          })}
        </div>

      </div>
      <div className="quantity">
        <input type="number" max={num_for_sale}/>
        <button className="increment">+</button>
        <button className="decrement">-</button>
      </div>
      <button className="add-to-cart">Add to cart</button>
      <button className="go-back">Go back</button>
    </div>
  )
}