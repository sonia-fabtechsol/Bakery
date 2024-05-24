import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { FaUser } from "react-icons/fa6";
import { PiNotebookLight } from "react-icons/pi";
import { listItemStyle, buttonStyle } from "./SideNavStyles";
import { logOut } from "../../../store/authSlice";





const drawerWidth = 210;
const listItemData = [
    {
        label: "Profile",
        link: "/user/dashboard",
        icon: <FaUser style={{fontSize:"20px"}}/>
      },
    
  
 
  // {
  //   label: "Products",
  //   link: "/user/product",
  //   icon: <FaGraduationCap style={{fontSize:"20px"}}/>
  // },
  
  {
    label: "Orders",
    link: "/user/order",
    icon: <PiNotebookLight style={{fontSize:"20px"}}/>
  },


];




function SideNav(props) {
  const [show, setShow] = useState(false)
  const { window } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const drawer = (
    <div className="" style={{ backgroundColor: "#D8EADE", height: "100vh"  }}>
    <div className="" style={{ backgroundColor: "rgb(95,183,113)", height: "100vh" }}>
      <div className="zoom">


        <div className="py-2" style={{backgroundColor:"rgb(95,183,113)",borderTopLeftRadius:"20px"}}>

          <div className="p-3 mx-auto" style={{ width: "12rem" }}>
            <Link to='/'><img width={"100%"} className="" src={require("../../../../src/img/logo.png")} alt="" /></Link>
          </div>
          
        </div>

        <h4 className="p-1 mb-2 text-black text-center fw-bold">Dashboard</h4>
        <List className="">
          {listItemData.map((value, i) => (
            <div key={i}>
              <div className="mx-4 " style={{marginBottom:"-1px"}}>
                <RenderItem value={value} i={i} />
              </div>
            </div>
          ))}
        </List>

        <List className="mt-auto position-absolute translate-middle" style={{bottom:"0px", right:"5px"}}>
          <ListItem disablePadding className=" list_text "
            onClick={() => {
              dispatch(logOut())
              localStorage.removeItem('auth')
              navigate('/login')
            }}
            // onClick={() => setShow(true)}
            
          >
            <ListItemButton className=" list_text ">
              {/* <ListItemIcon sx={{ color: "white" }} >
                <LogoutIcon />
              </ListItemIcon> */}
              <ListItemText className="d-flex justify-content-center mt-auto" primary={<Typography variant="body2" style={{ fontSize: 14, color: "black", }} title='logout'><LogoutIcon />Logout</Typography>} />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      {/* {show &&
          <MuiDialog 
            // title={"Logout"}
            title={"Are you sure you want to Logout?"} 
            show={show}
            // onHide={show}
            Buttons={
              ()=>(<>
              <Button
              onClick={() => { setShow(false); }}
              >Cancel
              </Button>
                <Button  
                onClick={() => {
               dispatch(logout())
               navigate('/')
                 }}
                 color="error" variant="contained">
                  Logout
                </Button>
              </>
              )
            }
            />
          } */}
    </div>
    </div>
  );




  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      className=""
      component="nav"
      sx={{
        width: { md: drawerWidth },
        flexShrink: { md: 0 },
        bgcolor: "black",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={props.mobileOpen}
        onClose={props.handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            bgcolor: "#FFFFFF",
            color: "#AFB7BE",
            zIndex: { md: 1000, xs: 1200 },
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer

        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            bgcolor: "black",
            border:0,
            color: "#AFB7BE",
            width: drawerWidth,
            zIndex: { md: 1100, xs: 1200 },
          },
        }}
        open
      >
        {drawer}
      </Drawer>

    </Box>
  );
}


SideNav.propTypes = {
  window: PropTypes.func,
};

export default SideNav;



const RenderItem = ({ value, i }) => {
  return (
    value.link ? <ListItem
      key={i}
      component={NavLink}
      to={value?.link || ""}
      disablePadding
      sx={listItemStyle}
    >
      <ListItemButton
        className="list-item list_text "
        sx={{ ...buttonStyle }}
      >
        <ListItemIcon className="myIconClass" sx={{ color: "white", marginRight: -3 }}> {value.icon}</ListItemIcon>
        <ListItemText className="myIconClass" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white", paddingLeft: 0 }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
    </ListItem> :

      <ListItemButton className="list-item list_text no_link_list_item "
        sx={{ ...buttonStyle, "&:hover": { backgroundColor: "" } }}
      >
        <ListItemIcon className="myIconClass" sx={{ color: "white", }}>{value.icon}</ListItemIcon>
        <ListItemText className="myIconClass" primary={<Typography variant="body2" style={{ fontSize: 14, color: "white", fontWeight: "bold" }} title={value.label}>{value.label}</Typography>} />
      </ListItemButton>
  );
};
