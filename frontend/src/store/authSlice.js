import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Utility function to set or remove the Axios Authorization header
 const setAuthToken = (token) => {
  if (token) {
    // console.log("Setting token in headers:", token);
    axios.defaults.headers.common["Authorization"] = token;
    // console.log("Headers after setting token:", axios.defaults.headers.common);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    // console.log("Token removed from headers.");
  }
};

const initialState = {
  user: null,
  token: "",
  userType: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    login: (state, action) => {
      const { user, userType, token } = action.payload;
      state.user = user;
      state.userType = userType;
      state.token = token;
      state.isLoggedIn = true;
     setAuthToken(token); 
    },
    logOut: (state) => {
      state.user = null;
      state.token = "";
      state.userType = null;
      state.isLoggedIn = false;
      setAuthToken(null); 
    },

    setUser: (state, action) => {
      const { user } = action.payload;
      const { refreshToken: token, role: userType } = user;
      state.user = user;
      state.userType = userType;
      state.token = token;
      state.isLoggedIn = true;
      setAuthToken(user.refreshToken);
      
    },
  },
});

export const fetchUser = () => async (dispatch) => {
  try {
    const userDataString = localStorage.getItem("auth");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      // console.log("user data access in localstorage", userData);
      dispatch(authSlice.actions.setUser({ user: userData }));
    }
  } catch (error) {
    console.log(error, "error for fetching user data");
  }
};

export const { logOut, login, setUser } = authSlice.actions;
export default authSlice.reducer;
