import { useState } from 'react'

import './App.css'
import Detail from './Detail'
import { Routes, Route} from 'react-router-dom'


function App() {
 

  return (
    
      <>
           <h1>Hola App js</h1>
      
      <Routes> 
        <Route path= '/movie/:id' element={<Detail/>} />
      </Routes>
           
          
    
       
      </>
      
   
  )
}

export default App
