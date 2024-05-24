import React from "react";
import Customeereview from "../component/slider/Customeereview";
import OurMenu from "../component/menu/OurMenu";
import MovingSlider from "../component/slider/MovingSlider";
import SEO from "../component/SEO";

const Home = () => {
  const text="ہمارا معیار ہی ہماری پہچان ہے۔"
  
 
  return (
    <>
    <SEO
    title="Anmol Sweets Bakers"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
    
      <div className="" style={{ paddingTop: "8rem" }}>
        <div className="home-banner position-relative">
          <div
            className=" position-absolute  start-0"
            style={{ top: "30%" }}
          >
            <div className="d-flex flex-column col-lg-9 col-md-9 col-12 ps-5 ">
              <h1 className="custom-font text-white">Healthy Made Delicious Food</h1>
              <div className="mt-4">
                <button className="bg-orange-color py-3 px-5 fs-4 text-uppercase border-black cutom-btn-2">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-lg-4 p-2 mt-2">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-lg-6 col-11 mb-4">
            <div style={{}} className="p-lg-5">
              <img
                src={require("../img/rack.jpg")}
                alt=""
                className="h-100 w-100 img-object-fit rounded-4 shadow-lg"
              />
            </div>
          </div>
          <div className="col-lg-4 col-11 mb-4 display-hide">
            <div style={{}} className="">
              <p className="text-black text-center">
                "We understand that caring for your family means providing them
                with the best of everything. That's why we offer a comprehensive
                range of  products and kitchen ingredients to meet all
                your household needs.""
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="d-flex  align-items-center justify-content-center "
        style={{ paddingTop: "1rem", paddingBottom: "4rem" }}
      >
        <div className="col-lg-6 col-12 ">
          <h1 className="text-center  ">
            This is Anmol Sweets Bakers. Awesome Food Theme. Purchase food and
            eat it.
          </h1>
        </div>
      </div>
      <div className="container d-flex flex-lg-row flex-column  align-items-center justify-content-between">
        <div className="col-lg-6 col-12">
          <div className="px-lg-4 px-2">
            {/* <p className="fs-3 text-orange text-center">
              This is Anmol Sweets Bakers. Awesome Food Items. Purchase food and
              eat it.
            </p> */}
            <p className=" fw-bold fs-6 text-center">
              Step into our bakery section and
              treat yourself to an enticing variety of freshly baked goods,
              including bread, cakes, pastries, cookies, and biscuits, all
              crafted with care by our talented bakers using the finest
              ingredients.
              <p className="pt-2">Craving something savory? Explore our selection of
              mouthwatering fast food items, from sandwiches and wraps to savory
              pastries and snacks, perfect for a quick and satisfying meal on
              the go.</p> 
            </p>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <div className="p-1">
            <img
              src={require("../img/cake2.webp")}
              alt=""
              className="h-100 w-100 img-object-fit rounded-4"
            />
          </div>
        </div>
      </div>
    
      <div className="p-lg-4" style={{paddingTop:"8rem"}}>
          <OurMenu />
        </div>
        <div className="container" style={{paddingTop:"8rem"}}>
        <div className="d-flex align-items-center justify-content-center mb-5">
          <div className="text-center">
            <p className="text-orange fs-2 fw-bold mb-0 fst-italic">Customers say </p>
            <p className=" fs-1 fw-bold mt-0">Review</p>
            <div className="bg-orange-color" style={{width:"200px"}}>
             <hr className="text-orange" />
            </div>
          </div>
          <hr  className="text-orange"/>
        </div>
        <div className="p-5">
         <Customeereview />
        </div>
      </div>

      <div  style={{marginTop:"8rem"}}>
        <MovingSlider text={text} className="" />
      </div>
    </>
  );
};

export default Home;
