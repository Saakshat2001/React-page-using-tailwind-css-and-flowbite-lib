import React from 'react'
import Header from './Components/Header'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import { Button, DarkThemeToggle, Flowbite } from "flowbite-react";
import tesstcom from './Components/tesstcom';
import Home from './Components/Home';
export default function App() {
  return (

    <BrowserRouter> 

     <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
  
    </BrowserRouter>
  )
}
