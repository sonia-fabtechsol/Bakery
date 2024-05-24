import React from 'react'
import { useSelector } from 'react-redux'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'
import SEO from './SEO'


export const UserProfile = () => {
    const {user}=useSelector(state => state.auth)
   
  return (
   <>
    <SEO
    title={`${user.name}:Profile`}
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
   <div className='d-flex align-items-center justify-content-center m-3'>
    <div className='col-lg-6 col-12 bg-white shadow rounded-4 p-5'>
        <div className='d-flex flex-column align-items-center justify-content-center position-relative'>
 
    <div className='position-absolute top-0 start-50 translate-middle ' style={{height:"150px", width:"150px"}} >
    <Avatar src={user.avatar} alt="profile-img" className='h-100 w-100' />
    </div>
   
    <p className='fw-bold fs-2 ' style={{marginTop:"7rem"}}>{user.name}</p>
    <p className='mb-0'><span className='fw-bold'>Id:</span>{user._id}</p>
    <p className='mb-0'><span className='fw-bold'>Phone Number:</span> {user.phone}</p>
    <p className='mb-0'><span className='fw-bold'>Email:</span> {user.email}</p>
    <p className=''><span className='fw-bold'>Address:</span>{user.address}</p>
  
  <div>
    <Link to={`/admin/editProfile/${user._id}`}>
    <button className='bg-orange-color px-4 border-0 py-1 rounded-2 fw-bold text-white'>Edit Profile</button>
    </Link>
  </div>
    </div>
    </div>
   </div>
   </>
  )
}
