// import { data } from './data';
// import { useEffect, useState} from 'react';
// import { About } from "./components/About";
// import { Homepage } from "./components/Home";
// import { Shop } from "./components/Shop";
// import { Cart } from "./components/Cart";
import { useTranslation } from 'react-i18next';
import type { JSX } from 'react/jsx-runtime';


function App(): JSX.Element {
  const { i18n, t } = useTranslation("home")
  // const [cart, setCart] = useState([]);

  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLanguage);
  }
  return (
    <>
      {/* <About */}
      {/* <Homepage */}
      {/* <Shop products={data}/> */}
      {/* <Cart cart={[]}/> */}
      <button onClick={handleChangeLanguage}>{t("changeLang")}</button>
    </>
  )
}

export default App
