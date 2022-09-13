import { Link } from "react-router-dom"

const CategoriesItem = ({pictureURL,title,price,episode,id}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
            <img src={`../${pictureURL}`} alt="Shoes" className="rounded-xl max-h-96" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title} {episode}</h2>
            <p>ARS $ {price}</p>
            <Link to={`/item/${id}`}><button className="btn btn-primary w-full">Ver Detalle</button></Link>
        </div>
    </div>
  )
}
export default CategoriesItem