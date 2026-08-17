import { data } from './data';
// import { useEffect, useState} from 'react';
// import { About } from "./components/About";
// import { Homepage } from "./components/Home";
import { Shop } from "./components/Shop";
// import { Cart } from "./components/Cart";


function App() {
  // const [cart, setCart] = useState([]);

  const genres: string[] = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  

  const genreList = genres.map(genre => {
    return (
      <a key={genre}>{genre}</a>
    )
  })

  return (
    <>
      {/* <About genres={genreList}/> */}
      {/* <Homepage genres={genreList}/> */}
      <Shop genres={genreList} products={data}/>
      {/* <Cart genres={genreList} cart={[]}/> */}
    </>
  )
}

export default App
