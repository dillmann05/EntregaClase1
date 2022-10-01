import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const Cart = () => {

  const {removeManga, clear, mangas} = useCartContext();
  
  function sumTotal(arr){
    let total =[];
    for(let i = 0; i<arr.length;i++){
      total.push(arr[i].total);
    }
    return total.reduce((a,b)=> a+b, 0);
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
        <Link to={"/"} className="btn btn-primary w-40">Buy Mangas</Link>
      </>
      }
      {mangas.length > 0 && (
        <>
          <p>{sumTotal(mangas)}</p>
          <button className="btn btn-primary w-20" onClick={() =>{clear()}}>Clear Cart</button>
        </>
      )}
    </div>
  )
}
export default Cart