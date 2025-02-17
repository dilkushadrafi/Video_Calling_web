import React from 'react'
import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import VideoComp from './components/VideoComp'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/room/:roomID' element={<VideoComp />}/>
   </Routes>
   </BrowserRouter>
   
  )
}

export default App
