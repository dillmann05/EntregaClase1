const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ( {children} ) => {

    const [mangas, setMangas] = useState([]);

    const isInCart = ( manga ) =>{
        return mangas.some(( saved )=> saved.id === manga.id );
    };

    const addManga = ( manga, quantity ) =>{
        
        if (isInCart(manga)) {
            return console.log("El manga ya se encuentra en el carrito");
        }

        const order = {...manga, quantity};

        setMangas((prev) => prev.concat(order));

        console.log(mangas);
    };

    const removeManga = (manga) =>{
       const newOrder = mangas.filter((saved) => saved.id !== manga.id);
       
       return setMangas(newOrder);
    };

    const clear = () => {setMangas([])};

    return(
        <CartContext.Provider value={{addManga, removeManga, clear}}>{children}</CartContext.Provider>
     );
};