import { useEffect, useState } from "react";
import mangasJson from "../../mangasJson.json";
import { useParams } from "react-router-dom";
import CategoriesList from "./CategoriesList";

const CategoriesContainer = () => {

    const [mangas, setMangas] = useState([]);

    const { title } = useParams();

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
        getMangas(mangasJson.filter(p=>p.title === title), 2000)
        .then((res)=>{console.log(res); setMangas(res);})
        .catch((err)=>console.log(`${err}: No se encontraron los datos`));
    },[title]);

  return (
    <CategoriesList items={mangas}/>
  )
}
export default CategoriesContainer