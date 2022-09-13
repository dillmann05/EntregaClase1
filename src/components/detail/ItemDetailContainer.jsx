import ItemDetail from "./ItemDetail";
import mangasJson from "../../mangasJson.json";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]);

    const getItem = (data,time)=> new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
                resolve(data);
            }else{
                reject("Error");
            }
        }, time);
    });
  
    useEffect(()=>{
        getItem(mangasJson.find(p=>p.id === "2"), 2000)
        .then((res)=>{console.log(res); setManga(res);})
        .catch((err)=>console.log(`${err}: No se encontraron los datos`));
    },[]);

  return (
    <ItemDetail item={manga}/>
  )
}
export default ItemDetailContainer