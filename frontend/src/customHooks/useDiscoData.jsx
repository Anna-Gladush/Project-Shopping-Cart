import { useState, useEffect } from "react";

let headers = new Headers({
  'Content-Type': 'application/json',
  'User-Agent': 'Signal-to-Noise',
  // 'Authorization': `Discogs token=${token}`
})
// Custom hook!!!!
const useDiscoData = (album_id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    album_id.forEach(id => {
    fetch(`https://api.discogs.com/masters/${id}`, {
      method  : 'GET', 
      headers : headers, 
    })
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
  })}, [album_id]);

  return {data, error, loading}
}

export default useDiscoData;