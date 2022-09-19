import React, { Children, createContext, useState } from 'react'
import data from './data'
import  {useContext} from 'react'
export const ContextApi = createContext();



const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  const  [searchterm,setSearchTerm]=useState('')

  return (
    <AppContext.Provider value={{}}>
      {children}
    </AppContext.Provider>
  )
}   

export { AppContext, AppProvider }


export const useGlobalContext = () => {
  return useContext(AppContext)
}