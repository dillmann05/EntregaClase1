import ItemCount from "../ItemCount"

const ItemDetail = ({item}) => {
  return (
    <div className="flex gap-20">
      <div className="card w-96 bg-base-100 shadow-xl border">
          <figure className="px-10 pt-10">
              <img src={`../${item.pictureURL}`} alt="Manga" className="rounded-xl max-h-96" />
          </figure>
          <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>ARS $ {item.price}</p>
              <div className="card-actions flex flex-col gap-4">
                <ItemCount stock={item.stock} initial={1} item={item}/>
              </div>
          </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl border p-10 gap-5">
        <h3 className="text-5xl underline">Descripción:</h3>
        <p className=" text-xl text-center tracking-widest">{item.description}</p>
      </div>
    </div>
  )
}
export default ItemDetail