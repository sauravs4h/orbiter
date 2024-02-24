import React from 'react'
import {useSelector} from "react-redux"
import Login from '../pages/Login'

function Userauth({children}) {

    let authData= useSelector((store)=>{
        return store.authReducer
    })

    console.log(authData)

  return (
    <>
    {authData.isSuccess?children:<Login/>}
    </>
  )
}

export default Userauth