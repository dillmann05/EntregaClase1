import { Fragment } from "react"
import { FaShopify } from "react-icons/fa"
import { Link } from "react-router-dom"

const CartWidget = () => {
  return (
    <Fragment>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">CoderShop<FaShopify/></Link>
    </Fragment>
  )
}
export default CartWidget