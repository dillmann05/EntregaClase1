import ItemCount from "../ItemCount"

const CategoriesItem = ({pictureURL,title,price,stock, episode}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
            <img src={`../${pictureURL}`} alt="Shoes" className="rounded-xl max-h-96" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title} {episode}</h2>
            <p>ARS $ {price}</p>
            <div className="card-actions flex flex-col gap-4">
              <ItemCount stock={stock} initial={1}/>
            </div>
        </div>
    </div>
  )
}
export default CategoriesItem