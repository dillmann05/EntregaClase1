import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = ( {greeting} ) => {
  const [mangas, setMangas] = useState([]);

  const { title } = useParams();

  useEffect(()=>{
    const db = getFirestore();

    const mangasCollection = 
      title === undefined
      ?
      query(collection(db, "mangas"), where("fav", "==", "true"))
      :
      query(collection(db, "mangas"), where("title", "==", title));

    getDocs(mangasCollection).then((res)=>{
        if( res.size === 0 ){
          console.log("Error: No se encontraron los datos");
        }
        setMangas(res.docs.map((doc)=> ({ id: doc.id, ...doc.data() })));
    });
  },[title]);

  return (
    <main className="min-h-full text-center">
      <h1 className="text-5xl underline font-bold m-10">{greeting}</h1>
         <section className="prod-card">
          <ItemList items={mangas}/>
         </section>
    </main>
  )
}
export default ItemListContainer;