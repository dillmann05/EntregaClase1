import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState("");

  const {removeManga, orderTotal, clear, mangas} = useCartContext();
  
  const sendOrder = ()=>{
    const order = {
      buyer: {name: {name}, phone: {phone}, email: {email}},
      items: mangas,
      total: orderTotal()
    };
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order).then((res)=>{console.log(res.id);});
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    sendOrder();
    clear();
  }

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
        <article>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold text-center mb-8 underline">Enter your user data.</h3>
              <form action="" className="flex flex-col justify-center items-center gap-8 mb-8" onSubmit={submitHandler}>
                <input 
                type="text" 
                id="nameInput" 
                placeholder="Name..." 
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e)=>setName(e.target.value)} />
                <input 
                type="number" 
                id="phoneInput" 
                placeholder="Phone..." 
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e)=>setPhone(e.target.value)} />
                <input 
                type="email" 
                id="emailInput" 
                placeholder="Email..." 
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={(e)=>setEmail(e.target.value)} />
                  <input type="submit" className="btn btn-primary w-40" value="Buy"/>
              </form>
            </div>
          </div>
        </article>
    </div>
  )
}
export default Cart