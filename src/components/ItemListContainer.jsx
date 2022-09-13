import { useEffect, useState } from "react";
import mangasJson from "../mangasJson.json";
import ItemList from "./ItemList";

const ItemListContainer = ( {greeting} ) => {
  const [mangas, setMangas] = useState([]);

  const getMangas = (data,time)=> new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(data){
              resolve(data);
          }else{
              reject("Error");
          }
      }, time);
  });

  useEffect(()=>{
      getMangas(mangasJson.filter(p=>p.fav === "true"), 2000)
      .then((res)=>{console.log(res); setMangas(res);})
      .catch((err)=>console.log(`${err}: No se encontraron los datos`));
  },[]);

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