import { useParams } from "react-router";


export const Shop = () => {
  const { page } = useParams();
  return (
    <div className="shop">
      {page}
    </div>
  )
}