import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { setUser } from '../../store/authSlice';
import {  useDispatch } from 'react-redux';
import SEO from '../../component/SEO';

const EditProfile = () => {

    const {id}=useParams()
    const dispatch=useDispatch();
    const [profilePreview, setProfulePreview]=useState(null)
  const [userData, setUserData]=useState({
    name:"",
    address:"",
    email:"",
    phone:"",
    avatar:"",

  })
const navigate=useNavigate()
  const handleChange=(e)=>{
    const {value, files, name}=e.target;
    if (files && files.length > 0) {
        const file = files[0];
        setUserData({ ...userData, [name]: file });
        setProfulePreview(URL.createObjectURL(file));
    }
    else{
      setUserData({...userData, [name]:value} )
    }
  
  }

  const updateSubmit=async(e)=>{
    e.preventDefault();
    console.log("start submit function ")
    try {
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('phone', userData.phone);
      formData.append('address', userData.address);
      if (userData.avatar) {
        formData.append('avatar', userData.avatar);
      }
      const response=await axios.put(`/api/v1/auth/update-user/${id}`,formData)
      if(response){
        setUserData(response?.data.data)
        dispatch(setUser({ user: response?.data.data }));
        const authData = JSON.parse(localStorage.getItem('auth'));
        localStorage.setItem('auth', JSON.stringify({ ...authData, user: response?.data.data }));
        toast.success("user Updated successfully")
        //  console.log(response?.data.data, "user Update successfully")
         navigate('/admin/dashboard')
      }
      else{
        toast.error("User cannot Update ")
      }
      
    } catch (error) {

      console.log(error, "some thing wrong while updating")
      
    }
      }

      const fetchUser=async()=>{
        try {
            const response=await axios.get(`/api/v1/auth/get-user/${id}`)
            if(!response){
                toast.error("user data cannot access")
            }
            else{
                setUserData(response?.data.data)
                console.log("user data", response?.data.data)
            }
            
        } catch (error) {
            console.log("error in getting user data", error)
            toast.error("User data not found")
            
        }
      }

      useEffect(()=>{
       fetchUser();
      },[])
  return (
<>
<SEO
    title="Edit Profile"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
<div className="px-lg-2 p-2 m-1 rounded-2">
        <div className="p-lg-5 m-3 d-flex flex-lg-row flex-column align-items-start justify-content-center gap-4">
          <div className="col-lg-10 col-12 ">
            <div className="linear-gradiant p-lg-3 p-3 rounded-4">
              <div className='text-center py-3'>
                
                <p className='text-white fs-2 fw-bold'>Update Form</p>
              
              </div>
              <form onSubmit={updateSubmit}>
                <div className="form-font">
                  
                  <div className="">
                  <div className='d-flex align-items-center justify-content-center py-2 mb-4' >
                    
                        <div className='d-flex align-items-center justify-content-center' style={{width:"150px", height:"150px"}} >

                      <img  src={profilePreview || userData.avatar} alt="avatar" className='w-100 h-100 rounded-circle'

                      />
                      </div>

                 
                    </div>
                 
                  <div className='mb-3 w-100'>
                  <button className='w-100 py-2 rounded-2'>

               
                  <label>Upload Profile image
                 
                    <input
                      type="file"
                      className="form-control form-control-lg"
                      placeholder="upload your profile image"
                      name='avatar'
                      accept='image/*'
                      onChange={handleChange}
                      required
                      hidden
                      autoComplete="off"
                    />
                    </label>
                    </button>
                    </div>
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        id=""
                        name='name'
                        value={userData.name}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name='email'
                        value={userData.email}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-2">
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Address"
                        id=""
                        name='address'
                        value={userData.address}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Phone Number"
                        name='phone'
                        value={userData.phone}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
              
                   
                 
                 
                  <div className="py-3 d-flex align-items-center justify-content-center">
                    <button
                      className="bg-orange-color px-5 py-2 border-0 rounded-2 text-white fw-bold"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </form>
             
            </div>
          </div>
          {/* <div className="col-lg-4 col-12 mx-lg-0 p-4">
            <div className="d-flex flex-column align-items-start justify-content-center">
              
            </div>
          </div> */}
        </div>
      </div>
</>
  )
}

export default EditProfile