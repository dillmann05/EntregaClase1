import ItemDetail from "./ItemDetail";
import mangasJson from "../../mangasJson.json";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]);

    const { id } = useParams();

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
        getItem(mangasJson.find(p=>p.id === id), 2000)
        .then((res)=>{console.log(res); setManga(res);})
        .catch((err)=>console.log(`${err}: No se encontraron los datos`));
    },[id]);

  return (
   <div className="h-[90vh] flex items-center justify-center">
       <ItemDetail item={manga}/>
   </div>   
  )
}
export default ItemDetailContainer