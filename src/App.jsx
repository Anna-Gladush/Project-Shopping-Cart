import { useState, useEffect } from 'react'

function App() {
  const [cart, setCart] = useState([]);

  // Custom hook!!!!
  const useDiscoData = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch()
        .then((res) => {
          if (res.status >= 400) throw new Error("Server Error");
          return res.json();
        })
        .then((res) => setData(res))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }, [])
    return {data, error, loading}
  }

  return (
    <>
      
    </>
  )
}

export default App
