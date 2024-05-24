import React from 'react'
import { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../component/Spinner'


const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const {isLoggedIn, user,userType }=useSelector(state=>state.auth)

    useEffect(()=>{
        if(!isLoggedIn){
            navigate("/")

        }
        else{
            if(userType === "admin"){
            navigate("/admin/dashboard")
            }
            else{
                navigate("/user/dashboard")
            }
        }

    },[isLoggedIn, userType])
  return (
    isLoggedIn ? children : <Spinner path="" />
  )
}

export default ProtectedRoute