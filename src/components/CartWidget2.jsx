import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im"
import { useCartContext } from "../context/CartContext"


const CartWidget2 = () => {
  const { itemsQuantity } = useCartContext();

  return (
    <Fragment>
        <Link to={"/cart"} className="btn btn-ghost normal-case text-xl">{itemsQuantity() > 0 && (<p>{itemsQuantity()}</p>)} <ImCart/></Link>
    </Fragment>
  )
}
export default CartWidget2