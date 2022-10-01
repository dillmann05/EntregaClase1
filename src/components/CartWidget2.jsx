import { Fragment } from "react"
import { Link } from "react-router-dom"
import { ImCart } from "react-icons/im"

const CartWidget2 = () => {
  return (
    <Fragment>
        <Link to={"/cart"} className="btn btn-ghost normal-case text-xl"><ImCart/></Link>
    </Fragment>
  )
}
export default CartWidget2