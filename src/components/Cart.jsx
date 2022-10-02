import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Modal from "./Modal";

const Cart = () => {

  const {removeManga, orderTotal, clear, mangas} = useCartContext();
  
  return (
    <div>
      {mangas.length
      ?
      mangas.map(manga =>(
        <article key={manga.id}>
          <h3>{manga.title} {manga.episode}</h3>
          <h3>{manga.quantity}</h3>
          <h3>{manga.price}</h3>
          <button className="btn btn-primary w-20" onClick={() => removeManga(manga)}>Remove</button>
        </article>
      ))
      :
      <>
        <p>You haven't added mangas to the cart yet</p>
        <Link to={'/'} className="btn btn-primary w-40">Buy Mangas</Link>
      </>
      }
      {mangas.length > 0 && (
        <div>
          <p>{orderTotal()}</p>
          <button className="btn btn-primary w-20" onClick={() =>{clear()}}>Clear Cart</button>
          <label htmlFor="my-modal-3" className="btn btn-primary">Complete your order</label>
        </div>
      )}
      <Modal>
          <h3 className="text-lg font-bold text-center mb-8 underline">Enter your user data.</h3>
          <form action="" className="flex flex-col justify-center items-center gap-8 mb-8">
            <input type="text" id="nameInput" placeholder="Name..." className="input input-bordered input-primary w-full max-w-xs" />
            <input type="number" id="phoneInput" placeholder="Phone..." className="input input-bordered input-primary w-full max-w-xs" />
            <input type="email" id="emailInput" placeholder="Email..." className="input input-bordered input-primary w-full max-w-xs" />
            <Link to={"/"} className="btn btn-primary w-40">Buy</Link>
          </form>
      </Modal>
    </div>
  )
}
export default Cart