import React from 'react'
import { ContextProvider } from './components/page1/ContextApi'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favorite from './components/page2/Favorite'
import Pageone from './components/page1/Pageone'
const App = () => {
  return (
        <BrowserRouter>
      <ContextProvider>
      <Routes>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/" element={<Pageone/>}/>
      </Routes>
      </ContextProvider>
        </BrowserRouter>
  )
}

export default App