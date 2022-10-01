import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {

    const [manga, setManga] = useState([]);

    const { id } = useParams();

    useEffect(()=>{
        const db = getFirestore();

        const mangaRef = doc(db, "mangas", id);
        getDoc(mangaRef).then((res)=>{
            if(res.exists()){
                setManga({id: res.id, ...res.data()});
            }
        })
    },[id]);

  return (
   <div className="h-[90vh] flex items-center justify-center">
       <ItemDetail item={manga}/>
   </div>   
  )
}
export default ItemDetailContainer