import React, { useState} from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { login } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";
import SEO from '../../component/SEO'

const Login = () => {
  const dispatch=useDispatch()
  const [passwordVisible, setPasswordVisible]=useState(false)
  const[loading, setLoading]=useState(false)
  const navigate=useNavigate()
  const location=useLocation();
  const [loginData, setLoginData]=useState({
    email:"",
    password:""
  })
  

  const handleChange=(e)=>{
    const {value, name}=e.target;
    setLoginData({...loginData, [name]:value})
  }

 const togglePasswordVisibility=()=>{
  setPasswordVisible(!passwordVisible)
 }

  const handleLogin=async(e)=>{
    e.preventDefault()
    try {
      setLoading(true);
      const response=await axios.post('/api/v1/auth/login', loginData)
      setLoading(false)
      if(response?.data.success){
        const user = response.data.data;
        const userData = response.data.data;
       const { refreshToken, role: userType } = userData; 
      //  console.log("token", refreshToken)
       dispatch(login({ user: userData, token: refreshToken, userType })); 
        localStorage.setItem('auth', JSON.stringify(userData));
        navigate(location.state || '/')
        toast.success("User Login successfully")
       
      }

       else {
       
          toast.error("Invalid User Credential")
        
         
       
      }
    } catch (error) {
      setLoading(false);
      console.log("some error are occur while performing login ", error)
      toast.error("Invalid User Credential")
    
     
    }
  }
  const {isLoggedIn,  userType}=useSelector(state=> state.auth)
if(isLoggedIn) {
    return <Navigate to={userType==="admin"?"/admin/dashboard":"/user/dashboard"}/>
}

  return (
    <>
     <SEO
    title="Login - Anmol Bakers"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
    <div className="m-lg-4 p-lg-2  m-1 rounded-2 custom-margin">
            <div className="p-lg-5 m-3 d-flex  align-items-start justify-content-center ">
              <div className="col-lg-6 col-12 col-md-8">
                <div className="linear-gradiant p-lg-5 p-3 rounded-4">
                  <div className='text-center py-3'>
                    
                    <p className='text-white fs-2 fw-bold'>LogIn Form</p>
                  
                  </div>
                  <form onSubmit={handleLogin}>
                    <div className="form-font">
                      
                    
                        
                        <div className="mb-3 w-100">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Email"
                            required
                            name='email'
                            value={loginData.email}
                            onChange={handleChange}

                          />
                      
                      </div>
                     
                    
                      <div className="mb-3 position-relative ">
                        <input
                          type={passwordVisible ? 'text' : 'password'}
                          className="form-control form-control-lg"
                          placeholder="Enter Your password"
                          name='password'
                            value={loginData.password}
                            onChange={handleChange}
                          required
                        />

                           <span className="position-absolute mt-2  cursor-pointer" onClick={togglePasswordVisibility} style={{ right: "5%", top: "0px" }}>
                          {passwordVisible ? <MdOutlineRemoveRedEye size={"1.3rem"} /> : <FaEyeSlash size={"1.3rem"} />}
                        </span>
                        {/* <div className='position-absolute end-0'style={{top:"50%", end:"5%"}}
                        >
                        <FaRegEyeSlash className='fs-5 fw-bold' />
                        </div> */}
                      
                      </div>
                     
                      <div className="py-3 d-flex align-items-center justify-content-center">
                        <button
                          className="bg-orange-color px-5 py-2 border-0 rounded-2 text-white fw-bold"
                          type="submit"
                        >
                          {loading ? "Login..." :"Login"}
                     
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className='d-flex align-items-center justify-content-center gap-2 text-center text-white'>
                   
                    <NavLink to="/login" className="text-white fw-bold link-decoration">Forgot password</NavLink>
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

export default Login