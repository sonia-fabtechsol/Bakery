import { AppBar ,Avatar,Button,Hidden,IconButton,Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu'
import { ArrowForward, NotificationAdd } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import { MdOutlineMarkChatUnread } from 'react-icons/md';
// import NotificationsPopover from '../components/notification-bar/Notifications';


  function Navbar({handleDrawerToggle}) {
//     const [userinfo, Setuserinfo] = useState()
// const location=useLocation()
// // const path=location.pathname.replace("-", " ").substring(1).replace("inovice","invoices").replace("booking","bookings").toLocaleUpperCase() 
// const path=location.pathname.split("/")[1].replace("inovice","invoices").replace("-", " ").replace("booking","bookings").toLocaleUpperCase()
// console.log(path,"jik")


    // const fetchData = async ()=>{
    // const result = await apiClient.get("/users/my-info")
    // Setuserinfo(result.data.result)
    // }

    // useEffect(() => {
    //  fetchData()
    // }, []);



    return (
    <Box className="" >
       
              
           <AppBar className='nav-bg' position="fixed" sx={{ background: "transparent", boxShadow:"0" }}>
            <Toolbar className=''  style={{display:'flex',justifyContent:'space-between'}} >
                 <div className=" zoom d-lg-block d-none" style={{width:"7rem"}}>
                <img width={"100%"} style={{width:"7rem", height:"3rem"}} src="" alt="" />
                </div>

            {/* <Box className="" sx={{display:{md:"none",sm:"block"}}}>
              {path}
            </Box> */}


    <Box className='zoom position-absolute w-100 d-flex justify-content-end nav-bg nav-responsive' style={{top:"30px", right:"35px", backgroundColor:"transparent"}}>
      <div className='d-flex align-items-center'>
        {/* <div className='me-5'>
           <Button
          style={{ background: "white" }}
          variant="contained"
          href="#contained-buttons"
        >
         < NotificationAdd style={{ color: "red" }}/>
        </Button>
        </div> */}
      <div className="d-flex">



      <div className='m-1 d-flex align-items-center  me-2'>
      {/* <NotificationsPopover/> */}
      <span>
      
        </span> 
      <Link to={"/user/dashboard"}>
      <Avatar alt="Travis Howard" src="" />
      </Link>
        </div>
    {/* <div style={{color:"black"}}><h5 className='m-1' style={{fontSize:"14px"}}>Ola Boluwatife</h5><p className='m-0' style={{fontSize:"12px"}}>PANTENT</p></div> */}
    </div>

<Hidden
mdUp
>
  <IconButton onClick={handleDrawerToggle}>
    <MenuIcon style={{color:"black"}} />
  </IconButton>
  </Hidden>
  </div>
  

</Box>
  </Toolbar>
</AppBar>
        </Box>
    );
}

export default Navbar;
