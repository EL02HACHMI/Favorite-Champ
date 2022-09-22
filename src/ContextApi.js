import React, { Children, createContext, useState } from 'react'
import data from './data'
import  {useContext} from 'react'
import { ConstructionOutlined } from '@mui/icons-material';
export const ContextApi = createContext();



const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const  [searchterm,setSearchTerm]=useState('')

  const [favorites,setFavorites]=useState([])



  const addToFavorites=(idChamp)=>{
      const champs=data.find((champo)=>champo.id===idChamp)
      setFavorites((prev)=>[...prev,champs])        
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