import { useState, useEffect } from "react";
import axios from "axios";

// Custom hook!!!!
const useDiscoData = (album_id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // album_id.forEach(id => {
    // fetch(`https://api.discogs.com/masters/${id}`, {
    // })
    fetch(`https://localhost:8080/api/data/${album_id}`)
      .then((res) => {
        if (res.status >= 400) throw new Error("Server Error");
        return res.json();
      })
      .then((res) => {
        return setData(prev => [prev, {
          id: res.id,
          artists: res.artists,
          title: res.title,
          num_for_sale: res.num_for_sale,
          lowest_price: res.lowest_price,
          img: res.images[0].resource_url,
          genres: res.genres,
          styles: res.styles,
          year: res.year,
          tracklist: res.tracklist,
        }])
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false))
  // })
}, [album_id]);

  return {data, error, loading}
}

export default useDiscoData;