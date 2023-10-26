import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import DetailsPage from './Pages/DetailsPage'
function App() {
  

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:id' element = {<DetailsPage/>} />
      </Routes>
    </div>
  )
}

export default App
