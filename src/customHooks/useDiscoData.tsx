import { useState, useCallback } from "react";

// Custom hook!!!!
const useDiscoData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAlbumData = useCallback(async (album_id: number[]) => {
    setLoading(true)
    try {
      album_id.forEach(async (id) => {
      try {
        const response =  await fetch(`https://api.discogs.com/masters/${id}`, {
          headers: {
            "User-Agent": "SignalToNoise/1.0",
            "Access-Control-Allow-Origin": "*"
          }
      });
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.error?.message || 'Failed to fetch weather data');
        }

        setData(prev => [prev, {
          id: json.id,
          artists: json.artists,
          title: json.title,
          num_for_sale: json.num_for_sale,
          lowest_price: json.lowest_price,
          img: json.images[0].resource_url,
          genres: json.genres,
          styles: json.styles,
          year: json.year,
          tracklist: json.tracklist,
        }]);
      } catch (error) {
        setError(error.message)
      }
    })
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, fetchAlbumData }
}
    // album_id.forEach(id => {
    // fetch(`https://api.discogs.com/masters/${id}`, {
    // })
//     fetch(`https://localhost:8080/api/data/${album_id}`)
//       .then((res) => {
//         if (res.status >= 400) throw new Error("Server Error");
//         return res.json();
//       })
//       .then((res) => {
//         return setData(prev => [prev, {
//           id: res.id,
//           artists: res.artists,
//           title: res.title,
//           num_for_sale: res.num_for_sale,
//           lowest_price: res.lowest_price,
//           img: res.images[0].resource_url,
//           genres: res.genres,
//           styles: res.styles,
//           year: res.year,
//           tracklist: res.tracklist,
//         }])
//       })
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false))
//   // })
// }, [album_id]);

//   return {data, error, loading}
// }

export default useDiscoData;