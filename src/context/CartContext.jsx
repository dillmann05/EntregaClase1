const { createContext, useContext, useState } = require("react");

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ( {children} ) => {

    const [mangas, setMangas] = useState([]);

    const isInCart = ( manga ) =>{
        return mangas.some(( saved )=> saved.id === manga.id );
    };

    const addManga = ( manga, quantity, total ) =>{
        
        if (isInCart(manga)) {
            return console.log("El manga ya se encuentra en el carrito");
        }

        const order = {...manga, quantity, total};

        setMangas((prev) => prev.concat(order));
    };

    const removeManga = (manga) =>{
       const filterOrder = mangas.filter((saved) => saved.id !== manga.id);
       
       return setMangas(filterOrder);
    };

    const clear = () => {setMangas([])};

    return(
        <CartContext.Provider value={{addManga, removeManga, clear, mangas}}>{children}</CartContext.Provider>
     );
};