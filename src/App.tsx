import { data } from './data';
import { useEffect, useState} from 'react';
// import { About } from "./components/About";
// import { Homepage } from "./components/Home";
import { Shop } from "./components/Shop";
// import { Cart } from "./components/Cart";
import type { discogs } from './discogs';
import {Client} from "disconnect";

const Discogs = Client();

  const id: number[] = [
  4300791, 35848120, 4279554, 144077, 102745, 109221, 198243, 46260, 90547,
  93871, 11182, 291997, 139761, 38157, 167200, 102163, 54293, 10362, 302, 8883,
  13814, 6495, 5863, 8471, 4300, 68469, 30445, 3986, 87440, 9467, 59501, 17967,
  22294, 18742, 43063, 26647, 1439, 39248, 861083, 525426];

function App() {
  const [loading, setIsLoading] = useState(true)
  const [products, setProducts] = useState(data);
  // const [cart, setCart] = useState([]);

  const genres: string[] = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  

  const genreList = genres.map(genre => {
    return (
      <a key={genre}>{genre}</a>
    )
  })



  useEffect(() => {
    let isMounted = true;
    const getDataDiscogs = async (id_masters) => {
      if (isMounted) {
        setIsLoading(false);
        return;
      }

      const db = new Discogs({
        consumerKey: import.meta.env.VITE_CONSUMER_KEY,
        consumerSecret: import.meta.env.VITE_CONSUMER_SECRET,
      }).database();

      try {
        const promises = id_masters.map((id: number) => {
          return new Promise((resolve) => {
            db.getMaster(id, function (err: unknown, data: discogs) {
              if (err) {
                resolve(null);
                return;
              }
              resolve(data);
            });
          });
        });

        const results = await Promise.all(promises);
        if (isMounted) {
          setProducts(results.filter(Boolean))
        }

      } catch (error) {
        console.log(error, "Internal Server Error");

        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    getDataDiscogs(id)

    return () => {
      isMounted = false;
    }
  }, [])

  return (
    <>
      {/* <About genres={genreList}/> */}
      {/* <Homepage genres={genreList}/> */}
      {loading ? <p>Loading...</p> : <Shop genres={genreList} products={products}/>}
      {/* <Cart genres={genreList} cart={[]}/> */}
    </>
  )
}

export default App
