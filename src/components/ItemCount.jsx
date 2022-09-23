import { Fragment, useState } from "react"
import { AiOutlineLine } from "react-icons/ai"
import { IoAddOutline } from "react-icons/io5"
import { useCartContext } from "../context/CartContext";

const ItemCount = ({stock, initial, item}) => {
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

  const { addManga } = useCartContext();

  const addHandler = ()=>{addManga(item, count)};

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
        <button className="btn btn-primary w-full" onClick={addHandler}>Buy Now</button>
    </Fragment>
  )
}
export default ItemCount