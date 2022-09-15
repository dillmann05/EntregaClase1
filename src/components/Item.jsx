import { Link } from "react-router-dom"

const Item = ( {id, pictureURL, title, price, episode} ) => {
  return (
    <div className="card min-w-[30%] bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
            <img src={pictureURL} alt="Manga" className="rounded-xl max-h-96" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title} {episode}</h2>
            <p>$ {price}</p>
            <Link to={`/item/${id}`}><button className="btn btn-primary w-full">Ver Detalle</button></Link>
        </div>
    </div>
  )
}
export default Item