import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im"
import { useCartContext } from "../context/CartContext"


const CartWidget2 = () => {
  const { mangas } = useCartContext();

  return (
    <Fragment>
        <Link to={"/cart"} className="btn btn-ghost normal-case text-xl">{mangas.length > 0 && (<p>{mangas.length}</p>)} <ImCart/></Link>
    </Fragment>
  )
}
export default CartWidget2