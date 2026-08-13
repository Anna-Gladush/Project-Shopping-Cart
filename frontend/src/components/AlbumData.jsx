import useDiscoData from "../customHooks/useDiscoData";

const album_id = [99317, 4300791, 35848120, 4279554, 144077, 102745, 109221, 198243, 46260, 90547, 93871, 11182, 291997, 139761, 38157, 167200, 102163, 54293, 10362, 302, 8883, 13814, 6495, 5863, 8471, 4300, 68469, 30445, 3986, 87440, 9467, 59501, 17967, 22294, 18742, 43063, 26647, 1439, 39248, 861083, 525426];

const AlbumData = () => {
  const {data, error, loading} = useDiscoData(album_id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network errir was encountered</p>;

  return (
    <>
      <p>{data[0].title}</p>
    </>
  )
}

export default AlbumData;