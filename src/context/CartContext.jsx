const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ( {children} ) => {

    const [mangas, setMangas] = useState([]);

    const isInCart = ( manga ) =>{
        mangas.some(( saved )=> saved.id === manga.id );
    };

    const addManga = ( manga, quantity ) =>{
        if (isInCart(manga)) {
            console.log("El manga ya se encuentra en el carrito");
        }

        const order = {...manga, quantity};

        setMangas((prev) => prev.concat(order));
    };

    const removeManga = (manga) =>{
       const newOrder = mangas.filter((saved) => saved.id !== manga.id);
       
       return setMangas(newOrder);
    };

    const clear = () => {setMangas([])};

    return(
        <CartContext.Provider value={{isInCart, addManga, removeManga, clear}}>{children}</CartContext.Provider>
     );
};