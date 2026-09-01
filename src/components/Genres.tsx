import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import type { JSX } from "react/jsx-runtime"

export const Genres = (): JSX.Element => {
  const { t } = useTranslation("home");
  const genres: string[] = [t("genres.rock"), t("genres.funk-soul"), t("genres.blues"), t("genres.folk"), t("genres.jazz"), t("genres.pop"), t("genres.electronic")]

  const genreList = genres.map(genre => {
    return (
      <Link to={`/shop/${genre}`} key={genre}>{genre}</Link>
    )
  })

  return (
    <>
      {genreList}
    </>
  )
}