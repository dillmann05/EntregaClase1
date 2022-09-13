import Item from "./Item"

const ItemList = ( {items} ) => {
  return (
    <article className="flex gap-5 justify-evenly mt-20">
        {items.length ? items.map( (manga) => <Item key={manga.id} {...manga}/> ) : <button className="btn loading">Cargando</button> }
    </article>
  )
}
export default ItemList