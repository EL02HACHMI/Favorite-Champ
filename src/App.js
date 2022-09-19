import React from 'react'
import { AppProvider } from './ContextApi'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favorite from './components/page2/Favorite'
import Pageone from './components/page1/Pageone'
import Info from './components/page1/Info';
const App = () => {
  return (
        <BrowserRouter>
      <AppProvider>
      <Routes>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/" element={<Pageone/>}/>
        <Route path="/champs/:id" element={<Info/>}/>
      </Routes>
      </AppProvider>
        </BrowserRouter>
  )
}

export default App