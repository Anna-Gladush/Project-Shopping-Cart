import { data } from './data';
import { useState, /* useEffect */} from 'react';
import { Shop } from "./components/Shop";
import { Footer } from './components/Footer';
function App() {
  const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);

  const genres = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  
  
  return (
    <>
      <main>
        <Shop genres={genres} products={[{title: "milk", lowest_price: 1, img: "1.png", id: 1}]}/>
      </main>
      <Footer genres={genres}/>
    </>
  )
}

export default App
