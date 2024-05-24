import { Box, CssBaseline, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Link, useNavigate, Navigate } from "react-router-dom";
// import AuthContext from '../../auth/auth-context';
import Header from './Header';
import { Navbar } from '../userDashboard';
import SideNav from './SideNav';




const DashboardUser = ({type}) => {
  // const [mobileOpen, setMobileOpen] = useState(false);
  // const {userType,isLoggedIn,debugMode} = useSelector((state) => state.auth)
  
  // const handleDrawerToggle = () => {
  //     setMobileOpen(!mobileOpen);
  // };
  // // const auth = useContext(AuthContext);
  // const navigate=useNavigate()
  
  // useEffect(()=>{
  //  if(!isLoggedIn)
  //         navigate('/login')

  // },[])
  // if(userType!=="MP")
  // return <Navigate to={"/patient/inquiries"}/>
return (
  <Box className="" sx={{
    // backgroundColor: '#D8EADD',
    // padding: '20px', 
    minHeight: '100vh', 
  }} >
  <Box  sx={{ display: "flex",backgroundColor:"#F4F9F5",height:"100vh",borderRadius:"20px", }}>
  <CssBaseline />
  <Header />
  <Box className='px-1 px-md-3 pt-5 pb-2 zoom' style={{backgroundColor:"#F4F9F5",borderRadius:"20px",}}
    component="main"
    sx={{
      flexGrow: 1,
    
      width: { md: `calc(100% - ${240}px)`, overflow: "auto" },
    }}
  >
    <Toolbar />




      <Outlet context={{type}} />


      </Box>
      </Box>
      </Box>
)
};

export default DashboardUser;
