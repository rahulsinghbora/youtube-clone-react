import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home'
import Video from "./Pages/video/Video"

const App = () => {
  const[sidebar,setsidebar]=useState(true)

  return (<>
   <Navbar setsidebar={setsidebar} sidebar={sidebar}/>
   <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/>}/>
    <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
   </Routes>
  </>)
}

export default App
