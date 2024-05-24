import React, { useEffect, useState } from 'react'
import {  useSelector } from 'react-redux'
import Spinner from '../../component/Spinner'
import axios from 'axios'

const AdminProtectedRoute = ({children}) => {
    const [ok, setOk]=useState(false)
     const {token, user}=useSelector((state)=> state.auth)

    useEffect(()=>{
      const checkAuth=async()=>{
        try {
           if(token){ 
            // console.log("Sending request with token:", token);
                   
                    const res = await axios.get('/api/v1/auth/admin-route'
                    // ,{
                    //     headers:{
                    //         Authorization:token,
                    //     }
                    // }
                    );
                    // console.log("Response from server:", res.data);
                    if (res.data && res.data.ok === true) {
                        setOk(true);
            }
            else{
                setOk(false)
            }
        }
            
        } catch (error) {
            console.log(error)
        }
       
      }

      if(token) checkAuth();


    },[token])
  return (
   ok ? children : <Spinner path="" />
  )
}

export default AdminProtectedRoute