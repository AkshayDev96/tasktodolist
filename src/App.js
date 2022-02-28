import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './components/user/Login'
import List from './components/list'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
         <Route exact path='/' element={<Login/>} />
         <Route  path='/listpage' element={<List/>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App