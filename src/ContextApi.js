import React, { createContext, useState } from 'react'
import data from './data'
import  {useContext} from 'react'
export const ContextApi = createContext();



const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const [favorites,setFavorites]=useState([])



  const addToFavorites=(idChamp)=>{
      const champs=data.find((champo)=>champo.id===idChamp)
      const alreadyFav=favorites.find((fav)=>fav.id === idChamp)  
      if(alreadyFav)return
      const updateFav=[...favorites,champs]
      setFavorites(updateFav) 
  }

  const removeFromFavorites=(idChamp)=>{
    const newFavorite=favorites.filter((champo)=>champo.id !== idChamp)
    setFavorites(newFavorite)        
}

  return (
    <AppContext.Provider value={{addToFavorites,favorites,setFavorites,removeFromFavorites}}>
      {children}
    </AppContext.Provider>
  )
}   

export { AppContext, AppProvider }


export const useGlobalContext = () => {
  return useContext(AppContext)
}