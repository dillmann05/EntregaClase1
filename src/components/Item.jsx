const Item = ( {pictureURL, title, price} ) => {
  return (
    <div className="card min-w-[30%] bg-base-100 shadow-xl border">
        <figure className="px-10 pt-10">
            <img src={pictureURL} alt="Shoes" className="rounded-xl max-h-96" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
            <p>$ {price}</p>
            <button className="btn btn-primary w-full">Ver Detalle</button>
        </div>
    </div>
  )
}
export default Item