import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import SEO from '../../component/SEO';

const Register = () => {
  const [passwordVisible, setPasswordVisible]=useState(false)
  const [loading, setLoadig]=useState(false)
  const [userData, setUserData]=useState({
    name:"",
    address:"",
    email:"",
    phone:"",
    password:"",
    avatar:"",

  })


  const togglePasswordVisibility=()=>{
    setPasswordVisible(!passwordVisible)
  }
const navigate=useNavigate()
  const handleChange=(e)=>{
    const {value, files, name}=e.target;
    if(files){
      const file=files[0];
      setUserData({...userData, [name]:file})
    }
    else{
      setUserData({...userData, [name]:value} )
    }
  
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoadig(true);
      const formData = new FormData();
      formData.append('name', userData.name);
      formData.append('email', userData.email);
      formData.append('phone', userData.phone);
      formData.append('address', userData.address);
      formData.append('avatar', userData.avatar);
      formData.append('password', userData.password);
      const response=await axios.post('/api/v1/auth/register',formData)
      setLoadig(false)
      if(response){
         navigate('/login')
        toast.success("user Register successfully")
        //  console.log(userData, "user Register successfully")
      }
      else{
        toast.error("User cannot register ")
      }
      
    } catch (error) {

      console.log(error, "some thing wrong while registration")
      
    }
      }
  return (
<>
<SEO
    title="Register - Anmol Bakers"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
<div className="m-lg-4 p-lg-2 p-2 m-1 rounded-2 custom-margin">
        <div className="p-lg-5 m-3 d-flex flex-lg-row flex-column align-items-start justify-content-center gap-4">
          <div className="col-lg-6 col-12 ">
            <div className="linear-gradiant p-lg-5 p-3 rounded-4">
              <div className='text-center py-3'>
                
                <p className='text-white fs-2 fw-bold'>Registration Form</p>
              
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-font">
                  
                  <div className="">
                  <div className='d-flex align-items-center justify-content-center py-2' >
                      {userData.avatar &&(
                        <div className='d-flex align-items-center justify-content-center' style={{width:"200px", height:"200px"}} >

                      <img  src={URL.createObjectURL(userData.avatar)} alt="avatar" className='w-100 h-100 rounded-circle'

                      />
                      </div>

                      ) }
                    </div>
                 
                  <div className='mb-3 w-100'>
                  <button className='w-100 py-2 rounded-2'>

               
                  <label>Upload Profile image
                 
                    <input
                      type="file"
                      className="form-control form-control-lg"
                      placeholder="upload your profile image"
                      name='avatar'
                      onChange={handleChange}
                      required
                      hidden
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
                        required
                      />
                    </div>
                  </div>
              
                   
                  <div className="mb-3 position-relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className="form-control form-control-lg"
                      placeholder="Enter Your password"
                      name='password'
                      value={userData.password}
                      onChange={handleChange}
                      required
                    />
                      <span className="position-absolute mt-2  cursor-pointer" onClick={togglePasswordVisibility} style={{ right: "5%", top: "0px" }}>
                          {passwordVisible ? <MdOutlineRemoveRedEye size={"1.3rem"} /> : <FaEyeSlash size={"1.3rem"} />}
                        </span>
                  </div>
                 
                  <div className="py-3 d-flex align-items-center justify-content-center">
                    <button
                      className="bg-orange-color px-5 py-2 border-0 rounded-2 text-white fw-bold"
                      type="submit"
                    >
                     {loading ? "Registring..." : "Register"}
                    </button>
                  </div>
                </div>
              </form>
              <div className='d-flex align-items-center justify-content-center gap-2 text-center text-white'>
                <p className='mb-0'>If you register already </p>
                <NavLink to="/login" className="text-white fw-bold link-decoration">Sign In</NavLink>
              </div>
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

export default Register