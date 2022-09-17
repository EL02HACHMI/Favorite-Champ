import React from 'react'
import { AppProvider } from './ContextApi'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Favorite from './components/page2/Favorite'
import Pageone from './components/page1/Pageone'
const App = () => {
  return (
        <BrowserRouter>
      <AppProvider>
      <Routes>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/" element={<Pageone/>}/>
      </Routes>
      </AppProvider>
        </BrowserRouter>
  )
}

export default App