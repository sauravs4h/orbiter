import React from 'react'
import {Routes,Route} from "react-router-dom"
import Timer from '../pages/Timer'
import Dashboard from '../pages/Dashboard'

function Myroute() {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/timer' element={<Timer/>}/>
    </Routes>
  )
}

export default Myroute