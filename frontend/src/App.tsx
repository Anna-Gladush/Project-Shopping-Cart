import { data } from './data';
import { useEffect, useState} from 'react';
import { About } from "./components/About";
import { Homepage } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";



function App() {
  const [products, setProducts] = useState(data);
  // const [cart, setCart] = useState([]);

  const genres = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  
  const genreList = genres.map(genre => {
    return (
      <a key={genre}>{genre}</a>
    )
  })

  
  // useEffect(() => {
    
  // }, [])
  return (
    <>
      {/* <About genres={genreList}/> */}
      {/* <Homepage genres={genreList}/> */}
      <Shop genres={genreList} products={products}/>
      {/* <Cart genres={genreList} cart={[]}/> */}
    </>
  )
}

export default App
