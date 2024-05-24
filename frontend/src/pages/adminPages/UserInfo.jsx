import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast} from 'react-toastify'
import { Avatar } from '@mui/material'
import { LoadSpinner } from '../../component'
import SEO from '../../component/SEO'

const UserInfo = () => {
    const [user, setUser]=useState([])
    const [loading, setLoading]=useState(false)


    const userDetails=async()=>{
        try {
          setLoading(true)
            const res=await axios.get('/api/v1/auth/alluser')
            setLoading(false);
            if(res){
                setUser(res?.data.data)
                // console.log("user adat, ", res?.data.data)
            }
            else{
                toast.error("res?.data.message")
            }
            
        } catch (error) {
          setLoading(false)
            console.log("something wrong in getting user data", error)
            
        }
    }

    useEffect(()=>{

        userDetails()

    },[])
  return (
    <>
     <SEO
    title="User List"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
    <div className=''>
        <div className='m-lg-4 m-2 bg-white shadow rounded-4'>
       <div className='pt-2'>
        <p className='fw-bold fs-2 p-3 mb-0'>Customer List</p>
       </div>
       
       <div className='table-responsive m-3'>
       <table class="table">
  <thead>
    <tr className='bg-orange-color text-white'>
      <th className='ps-4 bg-orange-color text-white' style={{borderTopLeftRadius:"20px"}}>#</th>
      <th className="bg-orange-color text-white">Image</th>
      <th className="bg-orange-color text-white">Name</th>
      <th className="bg-orange-color text-white">Email</th>
      <th className="bg-orange-color text-white">Phone</th>
      <th className="bg-orange-color text-white" style={{borderTopRightRadius:"20px"}}>Address</th>
    </tr>
  </thead>
  {loading ? (
    <div className='d-flex align-items-center justify-content-center m-5'>
      
    <LoadSpinner />
    
    </div>
  ):
  (
<tbody>
  {user.map((user, index)=>(
     <tr className='' key={user._id}>
     <td className='ps-4'>{index + 1}</td>
     <td>
        <Avatar src= {user.avatar} alt="user-image" />
       </td>
     <td>{user.name}</td>
     <td>{user.email}</td>
     <td>{user.phone}</td>
     <td>{user.address}</td>
   </tr>
         

        ))}
   
   
  </tbody>
  )
}
  
</table>
       </div>

       
        </div>
        </div>
        </>
  )
}

export default UserInfo