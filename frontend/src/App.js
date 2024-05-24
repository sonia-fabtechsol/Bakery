import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./component/layout/Layout";
import {
  Home,
  Contact,
  AboutUs,
  Register,
  Login,
  EditProfile,
  CategoryProduct,
  Shops,
  Cart,
  DetailPage,
  PageNotFound,
  UserOrder
} from "./pages";
import ProtectedRoute from "./pages/protectedRoute/ProtectedRoute";
import {  useDispatch } from "react-redux";
import { fetchUser } from "./store/authSlice";
import Dashboard from "./pages/dashboard/AdminDashboard/Dashboard";
import DashboardUser from "./pages/dashboard/userDashboard/DashboardUser";
import { Category ,UserInfo,
  CreateProduct,
  ProductList,
  AdminOrder,
  UpdateProduct,} from "./pages/adminPages";
import AdminProtectedRoute from "./pages/protectedRoute/AdminProtectedRoute";
import { UserProfile } from "./component";

function App() {
  const dispatch=useDispatch()
  const [isLoading, setIsLoading]=useState(true)
  // const { isLoggedIn, user, userType, token } = useSelector((state) => state.auth);

useEffect(() => {
  dispatch(fetchUser())
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false);
      });
}, [dispatch]);



  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/buy" element={<Shops />} />
            <Route path="category/:slug" element={<CategoryProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/detail/:id" element={<DetailPage />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Route>


          <Route  element={<AdminProtectedRoute><Dashboard /></AdminProtectedRoute>}>
          <Route path="/admin/dashboard" element={<UserProfile />}></Route>
          <Route path="/admin/editProfile/:id" element={<EditProfile />}></Route>
            <Route path="/admin/users" element={<UserInfo />}></Route>
            <Route path="/admin/order" element={<AdminOrder />}></Route>
            <Route path="/admin/category" element={<Category />}></Route>
            <Route path="/admin/product" element={<CreateProduct />}></Route>
            <Route path="/admin/productList" element={<ProductList />}></Route>
            <Route path="/admin/updateProduct/:id" element={<UpdateProduct />}></Route>
          </Route>


          <Route element={<ProtectedRoute><DashboardUser /></ProtectedRoute>}>
            <Route path="/user/dashboard" element={<UserProfile />}></Route>
            <Route path="/user/editProfile/:id" element={<EditProfile />}></Route>
            <Route path="/user/order" element={<UserOrder />}></Route>
          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
