// Header component

import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import Category from "../../hook/Category";
import { useCart } from "../../context/CartContext";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const { isLoggedIn, user, userType } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location=useLocation()
  const categories = Category();
  const [cart, setCart] = useCart();

  // Function to toggle the header visibility
  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  // Function to close the header when a link is clicked
  const closeHeader = () => {
    setIsHeaderOpen(false);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem("auth");
    closeHeader();
    navigate("/login");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isHeaderOpen ? "show" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <div
              className="responsive-logo"
              style={{ height: "140px", width: "210px" }}
            >
              <img
                src={require("../../img/logo.png")}
                alt="Bootstrap"
                className="h-100 w-100 obeject-fit"
              />
            </div>
          </Link>
          <button
            className="navbar-toggler  bg-white  p-lg-0 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleHeader}
          >
            <span className="fw-bold">MENU</span>{" "}
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse ${isHeaderOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={closeHeader}>
                <NavLink
                  className="nav-link  large-text"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" onClick={closeHeader}>
                <NavLink
                  className="nav-link  large-text"
                  aria-current="page"
                  to="/buy"
                >
                  Shop Now
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle large-text"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </NavLink>
                <ul className="dropdown-menu">
                  {categories.map((c) => (
                    <li className="nav-item" onClick={closeHeader} key={c._id}>
                      <NavLink
                        className="dropdown-item  nav-link2 large-text text-nowrap"
                        to={`Category/${c.slug}`}
                         
                      >
                        {c.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="nav-item" onClick={closeHeader}>
                <NavLink className="nav-link large-text" to="/about-us">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item" onClick={closeHeader}>
                <NavLink className="nav-link large-text" to="/contact">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item position-relative" onClick={closeHeader}>
                <NavLink className="nav-link large-text" to="/cart">
                  Cart
                </NavLink>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cart?.length}
                </span>
              </li>
            </ul>
            <div className="me-3">
              {isLoggedIn ? (
                <div className="">
                  <div
                    className="dropdown w-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="d-flex align-items-center justify-content-start w-auto gap-2">
                      <p className="text-white mb-0 fw-bold fs-4">
                        {" "}
                        {user?.name}
                      </p>
                      <Avatar src={user.avatar} className="profile-image" />
                    </div>
                    {isDropdownOpen && (
                      <div className="dropdown-content">
                        <NavLink
                          to={`/${userType}/dashboard`}
                          onClick={closeHeader}
                        >
                          Dashboard
                        </NavLink>
                        <NavLink href="#">
                          <button
                            className="bg-transparent border-0"
                            onClick={handleLogout}
                          >
                            logout
                          </button>
                        </NavLink>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="d-flex flex-lg-row flex-column  align-items-start justify-content-start gap-2">
                  <NavLink to="/login">
                    <button
                      className="px-3 py-2 custom-btn-outline2 bg-orange-color rounded-2 large-text text-white"
                      type="button"
                      onClick={closeHeader}
                    >
                      Login
                    </button>
                  </NavLink>
                  <NavLink to="/register">
                    <button
                      className="px-3 py-2 custom-btn-outline bg-transparent large-text text-white rounded-2"
                      type="button"
                      onClick={closeHeader}
                    >
                      Register
                    </button>
                  </NavLink>
                 
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
