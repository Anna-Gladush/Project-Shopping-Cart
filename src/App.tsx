<<<<<<< HEAD
// import { Discojs } from 'discojs'
import type { JSX } from 'react/jsx-runtime';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { Homepage } from './pages/Home';
import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Cart } from './pages/Cart';
import { Shop } from './pages/Shop';
import { getProducts } from './data/data';
import ErrorPage from './pages/ErrorPage';
import { CartContext } from './context/CartContext';
// import useDiscoData from './customHooks/useDiscoData';

function App(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const products = getProducts()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [cart, setCart ] = useState("")
  const cart = [{
    img: "",
    title: "",
    price: 0,
    quantity: 0
  }]

  return (
    <>
    <CartContext.Provider value={{ cart }}>
    <NavBar/>
      <Routes>
        <Route 
          path='/'
          element={<Homepage products={products} />}
        />
        <Route 
          path='/about'
          element={<About />}
        />
        <Route 
          path='/shop'
          element={<Shop products={products} />}
        />
        <Route 
          path='/checkout'
          element={<Cart />}
        />
        {/* Should be the last one */}
        <Route 
          path='*'
          element={<ErrorPage />}
        />
      </Routes>
      </CartContext.Provider>
    <Footer />
=======
// import { data } from './data';
// import { useEffect } from 'react';
// import { About } from "./components/About";
// import { Homepage } from "./components/Home";
// import { Shop } from "./components/Shop";
// import { Cart } from "./components/Cart";
import { useTranslation } from 'react-i18next';
import { Discojs } from 'discojs'
import type { JSX } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
// import useDiscoData from './customHooks/useDiscoData';

function App(): JSX.Element {
  const { i18n, t } = useTranslation("home")
  // const [cart, setCart] = useState([]);
  // const {data, loading, error, fetchAlbumData} = useDiscoData()
  const [ products, setProducts ] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }


  useEffect(() => {
    if (loading) {
      const client = new Discojs({
        userToken: import.meta.env.VITE_USER_TOKEN,
      })
      client
        .getWantlistForUser("kosmira")
        .then(data => {
          console.log(data.wants)
          setProducts(data.wants)
          setLoading(false);
        })
        // .then(data => {
        //   setProducts(data.items)
        //   console.log(data.items)
        // })
    }
  }, [loading])
  if (loading) return <p>Loading...</p>;
  // if (error) return <p>A network error was encountered</p>;

  return (
    <>
      {/* <About */}
      {/* <Homepage */}
      {/* <Shop products={data}/> */}
      {/* <Cart cart={[]}/> */}
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
      {products.map(album => {
        return (
          <>
          <li key={`${album.id}`}>
            <p>{album.basic_information.title}</p>
            <img src={album.basic_information.thumb} alt={`album cover of ${album.basic_information.title}`} />
          </li>
          </>
          
        )
      })}
>>>>>>> fd9a029052b9606835abefd81b26c0e33b94cece
    </>
  )
}

export default App








  // const [cart, setCart] = useState([]);
  // const {data, loading, error, fetchAlbumData} = useDiscoData()
  // const [ products, setProducts ] = useState(null)
  // const [loading, setLoading] = useState(true)



  // useEffect(() => {
  //   if (loading) {
  //     const client = new Discojs({
  //       userToken: import.meta.env.VITE_USER_TOKEN,
  //     })
  //     client
  //       .getWantlistForUser("kosmira")
  //       .then(data => {
  //         console.log(data.wants)
  //         setProducts(data.wants)
  //         setLoading(false);
  //       })
  //       // .then(data => {
  //       //   setProducts(data.items)
  //       //   console.log(data.items)
  //       // })
  //   }
  // }, [loading])
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>A network error was encountered</p>;





      {/* {products.map(album => {
        return (
          <>
          <li key={`${album.id}`}>
            <p>{album.basic_information.title}</p>
            <img src={album.basic_information.thumb} alt={`album cover of ${album.basic_information.title}`} />
          </li>
          </>
        )
      })} */}