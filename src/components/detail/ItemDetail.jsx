import ItemCount from "../ItemCount"

const ItemDetail = ({item}) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border">
          <figure className="px-10 pt-10">
              <img src={`../${item.pictureURL}`} alt="Shoes" className="rounded-xl max-h-96" />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>ARS $ {item.price}</p>
              <div className="card-actions flex flex-col gap-4">
                <ItemCount stock={item.stock} initial={1}/>
              </div>
          </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border">
        <h3>Descripción:</h3>
        <p>{item.description}</p>
      </div>
    </div>
  )
}
export default ItemDetail