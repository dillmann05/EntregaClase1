import { Fragment, useState } from "react"
import { AiOutlineLine } from "react-icons/ai"
import { IoAddOutline } from "react-icons/io5"
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const ItemCount = ({stock, initial, item, myOnAdd}) => {
  const [count, setCount] = useState(initial);

  const onSubtract = () => {
    if (count > initial) {
      setCount( count - 1 );
    }
  };

  const onAdd = () => {
    if (count < stock) {
      setCount( count + 1 );
    }
  };

  const { removeManga, clear } = useCartContext();

  const addHandler = ()=>{myOnAdd(count)};

  const removeHandler = ()=>{removeManga(item)};

  const clearHandler = ()=>{clear()};

  return (
    <Fragment>
        <div className="card-actions flex gap-5 items-center">
          <button className="btn btn-circle btn-outline" onClick={onSubtract}>
              <AiOutlineLine/>
          </button>
          <strong className="text-xl "> {count} </strong>
          <button className="btn btn-circle btn-outline" onClick={onAdd}>
              <IoAddOutline className="text-2xl"/>
          </button>
        </div>
        <Link to={'/cart'} className="btn btn-primary w-full" onClick={addHandler}>Buy Now</Link>
        <Link to={'/cart'} className="btn btn-primary w-full" onClick={removeHandler}>Delete</Link>
        <Link to={'/cart'} className="btn btn-primary w-full" onClick={clearHandler}>Clear Cart</Link>
    </Fragment>
  )
}
export default ItemCount