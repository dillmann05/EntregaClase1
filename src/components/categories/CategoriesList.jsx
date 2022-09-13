import CategoriesItem from "./CategoriesItem"

const CategoriesList = ({items}) => {
  return (
    <article className="flex gap-5 justify-evenly mt-20">
      {items.length ? items.map( (manga) => <CategoriesItem key={manga.id} {...manga}/> ) : <button className="btn loading">Cargando</button> }
    </article>
  )
}
export default CategoriesList