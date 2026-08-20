import { data } from './data';
// import { useEffect, useState} from 'react';
import { About } from "./components/About";
import { Homepage } from "./components/Home";
import { Shop } from "./components/Shop";
import { Cart } from "./components/Cart";
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n, t } = useTranslation("home")
  // const [cart, setCart] = useState([]);

  const genres: string[] = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']
  

  const genreList = genres.map(genre => {
    return (
      <a key={genre}>{genre}</a>
    )
  })

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }
  return (
    <>
      {/* <About genres={genreList}/> */}
      {/* <Homepage genres={genreList}/> */}
      {/* <Shop genres={genreList} products={data}/> */}
      {/* <Cart genres={genreList} cart={[]}/> */}
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
    </>
  )
}

export default App
