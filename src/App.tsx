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
    </>
  )
}

export default App
