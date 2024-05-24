import React from "react";
import MovingSlider from '../../src/component/slider/MovingSlider'
import SEO from "../component/SEO";
const AboutUs = () => {
  const Team = [
    {
      img: require("../img/personal-img/abu.JPG"),
      name: "Dr.Farzand Ali",
      phone: "0346-6712646",
    },
    {
      img: require("../img/personal-img/akmal2.JPG"),
      name: "Muhammad akmal",
      phone: "0344-6358518",
    },
    {
      img: require("../img/personal-img/a.png"),
      name: "Ali Akbar",
      phone: "0344-6358518",
    },

    {
      img: require("../img/personal-img/akram1.jpg"),
      name: "Muhammad Akram",
      phone: "0340-4431265",
    },

    {
      img: require("../img/personal-img/ajmal1.jpg"),
      name: "Muhammad Ajmal",
      phone: "0342-6504042",
    },
  ];
  return (
    <>
     <SEO
    title="About Us - Anmol"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
      <div className="" style={{ paddingTop: "8rem" }}>
        <div className="home-banner position-relative">
          <div className=" position-absolute  start-0" style={{ top: "30%" }}>
            <div className="d-flex flex-column col-lg-9 col-md-9 col-12 ps-5 ">
              <h1 className="custom-font text-white">
                Healthy Made Delicious Food
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex align-items-center justify-content-center mt-5 rounded-4" >
        <div className="p-3 col-lg-7 col-12" height="100">
        <img src={require('../img/rack.jpg')} alt="" className="w-100 h-100 img-object-fit rounded-4" />
      </div>
      </div> */}
      <div className="bg-orange-color">
   
       <MovingSlider  text="ہمارا معیار ہی ہماری پہچان ہے" className=""/>
    
     
      </div>
      <div className="mt-5">
        <div className="d-flex align-items-center justify-content-center">
          <div className="col-lg-7 col-12">
            <div className="text-center">
              <p className="text-orange fst-italic fs-2 fw-bolder mb-0">
                Anmol sweets Bakers & Super store
              </p>
              <h1 className="text-center fw-bold custom-font">Our story</h1>
              <p className="pt-3 px-3">
                At Anmol Sweets Bakers & Super Store, our story is one of
                tradition, quality, and community. Founded by Mr. Ali Akbar with
                a passion for baking, we've been crafting delicious treats since
                2016. From birthdays to weddings, our bakery is a beloved part
                of our community, offering homemade delights made with love and
                care.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="container d-flex flex-lg-row flex-column  align-items-center justify-content-center">
          <div className="col-lg-6 col-12 order-lg-1 order-2">
            <div className="px-lg-4 px-2">
              <p className="text-center fw-bold fs-2">Our Vision</p>
              <p className=" fw-bold fs-6 text-center">
                Welcome to At Anmol Sweets Bakers & Super Store, our vision is
                to be the leading destination for delectable treats and everyday
                essentials, providing our customers with exceptional quality,
                variety, and service.
              </p>
              <p className="fw-bold fs-6 text-center">
                We aim to create a warm and welcoming environment where everyone
                feels like family, and where our passion for baking shines
                through in every bite. Through innovation, dedication, and a
                commitment to excellence, we strive to exceed our customers'
                expectations and become an integral part of their lives, making
                every moment a little sweeter.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-12 oorder-1 order-lg-2">
            <div className="d-flex align-items-center justify-content-center p-4">
              <div style={{ width: "22rem" }}>
                <img
                  src={require("../img/personal-img/ali4.png")}
                  alt=""
                  className="h-100 w-100 img-object-fit shadow rounded-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-margin2">
        <div className="container d-flex flex-lg-row flex-column  align-items-center justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="d-flex align-items-center justify-content-center p-4">
              <div style={{ width: "22rem" }}>
                <img
                  src={require("../img/personal-img/ali2.jpg")}
                  alt=""
                  className="h-100 w-100 img-object-fit shadow rounded-4"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div className="px-lg-4 px-2">
              <p className="text-center fw-bold fs-2">Our Mission</p>
              <p className=" fw-bold fs-6 text-center">
                At Anmol Sweets Bakers & Super Store, our mission is to delight
                our customers with delicious homemade treats and everyday
                essentials that are crafted with care and attention to detail.
                <br />
                We are committed to using only the finest ingredients and
                traditional recipes to ensure the highest quality in every
                product we offer. Our goal is to create memorable experiences
                for our customers, whether they're celebrating special occasions
                or simply enjoying a sweet moment with loved ones.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="custom-margin2 mx-lg-5 mx-3 mb-5">
        <p className="text-center fw-bold fs-2 my-5">Our teams/Members</p>

        <div className="d-flex flex-wrap align-items-center justify-content-center">
          {Team.map((team) => (
            <div className="" key={team.name}>
              <div className="" style={{ width: "22rem" }}>
                <div className="mx-lg-3 mx-5 my-3">
                  <img
                    src={team.img}
                    alt=""
                    className="w-100 h-100 img-object-fit rounded-3"
                  />
                </div>
                <p className="fw-bold fs-4 text-center my-lg-2 mb-0">
                  {team.name}
                </p>
                <p className="fw-bold fs-6 text-center my-lg-2 mb-0">
                  {team.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default AboutUs;
