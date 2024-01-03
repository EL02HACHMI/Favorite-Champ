import React, { createContext, useState,useEffect } from 'react'
import data from './data'
import  {useContext} from 'react'
export const ContextApi = createContext();



const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const [favorites,setFavorites]=useState([])



  const addToFavorites=(idChamp)=>{
    const alreadyFav=favorites.find((fav)=>fav.id === idChamp)  
    if(alreadyFav)return
    const champs=data.find((champo)=>champo.id===idChamp)
      const updateFav=[...favorites,champs]
      setFavorites(updateFav) 
  }

  const removeFromFavorites=(idChamp)=>{
    const newFavorite=favorites.filter((champo)=>champo.id !== idChamp)
    setFavorites(newFavorite)        
}





// Data Fetch 


// useEffect(()=>{
//   const fetchData = async() =>{
//     try {
//       const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
//       const data = await response.json();
//       console.log(data)
//     } catch (error) {
//               console.log(error)
//     }
//   }
//   fetchData()
// },[])



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