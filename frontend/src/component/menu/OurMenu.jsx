import React from "react";
import { Button } from "../button/Button";
import {Link} from 'react-router-dom'

const OurMenu = () => {
  return (
    <>
      <div className="bg-dark">
        <div>
          <h1 className="custom-font text-orange text-center fw-bold pt-4">Our Menu</h1>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="bg-orange-color"
            style={{ width: "400px", height: "2px" }}
          ></div>
        </div>
        <div className="d-flex flex-lg-row flex-wrap  align-items-center justify-content-between">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="m-4 position-relative hover-effect ">
              <img
                src={require("../../img/pizza.jpg")}
                alt="menu-img"
                className="w-100 h-100 img-object-fit rounded-4 shadow-lg "
              />
              <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                <Link to="/buy">
               <Button  text="Order Pizza" className="text-black bg-white" />
               </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="m-4 position-relative hover-effect">
              <img
                src={require("../../img/cakewhite.jpg")}
                alt="menu-img"
                className="w-100 h-100 img-object-fit rounded-4 shadow-lg"
              />
               <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
               <Link to="/buy">
               <Button  text="Order Cake" className="text-black bg-white" />
               </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4  col-12">
            <div className="mx-4">
              <div className="d-flex flex-lg-column flex-wrap gap-3 mb-4">
                <div className="position-relative hover-effect">
                  <img
                    src={require("../../img/biscuit.jpg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
               <Button  text="Order Biscuit" className="text-black bg-white" />
             </Link>
              </div>
                </div>
                <div className="position-relative hover-effect" >
                  <img
                    src={require("../../img/mithai.jpeg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
               <Button  text="Oder Mithai" className="text-black bg-white" />
             </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-lg-row flex-wrap align-items-center justify-ccontent-between">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mx-4">
              <div className="d-flex flex-column gap-3">
                <div className="position-relative hover-effect">
                  <img
                    src={require("../../img/grocery.jpg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
               <Button  text="Order Grocery Items" className="text-black bg-white" />
              </Link>
              </div>
                </div>
                <div className="mb-4 position-relative hover-effect">
                  <img
                    src={require("../../img/coldDrinks.jpeg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
              
               <Button  text="Order Drinks" className="text-black bg-white" />
             </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mx-4">
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="position-relative hover-effect">
                  <img
                    src={require("../../img/icecream.jpg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
               <Button  text="Order Ice-cream" className="text-black bg-white" />
             </Link>
              </div>
                </div>
                <div className="position-relative hover-effect">
                  <img
                    src={require("../../img/chicken.jpg")}
                    alt="menu-img"
                    className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
                  />
                   <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
                   <Link to="/buy">
               <Button  text="Order KFC" className="text-black bg-white" />
             </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6 mb-4">
            <div className="mx-4 position-relative hover-effect">
              <img
                src={require("../../img/burder.jpg")}
                alt="sweet"
                className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
              />
               <div className="img-container position-absolute top-0 right-0 w-100 h-100  bg-hover rounded-4 d-flex align-items-center justify-content-center opacity-0">
               <Link to="/buy">
               <Button  text="Order Burger" className="text-black bg-white" />
             </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMenu;
