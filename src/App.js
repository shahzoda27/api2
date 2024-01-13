import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './component/LayOut';
import SingleProject from './component/SingleProject';
import Users from './component/Users';
export default function App() {
  
  return (
    <>
     <Routes>
      <Route path='/' element={<LayOut/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path="single_project/:id" element={<SingleProject/>}/>
     </Routes>
    </>
  )
}