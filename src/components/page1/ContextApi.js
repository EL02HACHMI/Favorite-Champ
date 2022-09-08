import React, { Children, createContext, useState } from 'react'
import data from './data'
export const ContextApi = createContext();


export const ContextProvider=({children}) => {
const [favCount,setFavCount]=useState([])
   


  return (
    <ContextApi.Provider value={{favCount,setFavCount}}>
        {children}
    </ContextApi.Provider>
  )
}
