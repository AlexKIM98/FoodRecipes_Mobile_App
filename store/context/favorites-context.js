import { createContext, useState } from "react";


export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});



function FavoritesContextProvider({children}){
    const [favoriteMealIds, setFavoritesMealIds] = useState([]);

    function addFavorite(id){
       setFavoritesMealIds((currentFavIds) => [...currentFavIds, id]); 
    };

    function removeFavorite(id) {
        setFavoritesMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }


    return <FavoritesContext.Provider value={value} >{children}</FavoritesContext.Provider>
};

export default FavoritesContextProvider;