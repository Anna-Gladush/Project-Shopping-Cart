type artists = {
  name: string,
  anv: string,
  join: string,
  role: string,
  tracks: string,
  id: number,
  resource_url: string,
  thumbnail_url?: string,
}

export type discogs = {
  id: number,
  main_release: number,
  most_recent_release: number,
  resource_url: string,
  uri: string,
  versions_url: string,
  main_release_url: string,
  most_recent_release_url: string,
  num_for_sale: number,
  lowest_price: number,
  images: 
    {
      type: string,
      uri: string,
      resource_url: string,
      uri150: string,
      width: number,
      height: number,
    }[],
  genres: string[],
  styles: string[],
  year: number,
  tracklist:
    {
      position: string,
      type_: string,
      title: string,
      extraartists?: artists[],
      duration: string,
    }[],
  artists: artists[],
  title: string,
  data_quality: string
}