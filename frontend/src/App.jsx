// import { useState, /* useEffect */} from 'react';

import { Shop } from "./components/Shop"
function App() {
  const genres = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  
  return (
    <>
      <div>
        <Shop genres={genres} products={[{title: "milk", lowest_price: 1, img: "1.png", id: 1}]}/>
      </div>
    </>
  )
}

export default App
