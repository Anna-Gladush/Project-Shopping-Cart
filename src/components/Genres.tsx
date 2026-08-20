import type { JSX } from "react/jsx-runtime"

const genres: string[] = ['Rock', 'Funk / Soul', 'Blues', 'Folk, World, & Country', 'Jazz', 'Pop', 'Electronic']

const genreList = genres.map(genre => {
  return (
    <a key={genre}>{genre}</a>
  )
})

export const Genres = (): JSX.Element => {
  return (
    <>
      {genreList}
    </>
  )
}