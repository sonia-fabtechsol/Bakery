import React from "react";
import Card from "../component/card/Card";
const Cake = () => {
  const imgData = [
    {
      img: require("../img/cake1.jpg"),
      name: "Lemon Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/mix.jpg"),
      name: "Cream Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cake2.jpg"),
      name: "Ice-Cream Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cake2.webp"),
      name: "Chaoclate Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/choclate.png"),
      name: "Chaoclate Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/chocklate.jpg"),
      name: " Black Forest Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cupcake.png"),
      name: "Cup Cake",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/stabry.jpg"),
      name: "strawberry Cake",
      price: "Re. 300PK (1 Pound)",
    },
  ];
  return (
    <>
      {/* <div className="p-lg-4" style={{ paddingTop: "8rem" }}>
        <div className="cake-banner position-relative">
          <div
            className="text-white position-absolute  start-0 top-50"
           
          >
            <div className="d-flex flex-column  col-12 ps-5 ">
              <h1 className="custom-font ">Delicious Cake</h1>
              
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-lg-4 custom-margin">
        <div className="mx-lg-5 d-flex flex-wrap align-items-center justify-content-center">
          <div className="col-lg-6 col-11">
          <p className='text-center fs-5 fw-bold px-lg-5'>Indulge in our delectable cakes, perfect for weddings, birthdays, and anniversaries. With a variety of flavors and stunning designs, each bite is a celebration of sweetness and joy.</p>
            {/* <div style={{}} className='p-lg-4 p-2'>
        <img src={require('../img/cake3.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 shadow-lg' />
        </div> */}
          </div>
          <div className="col-lg-6 col-11">
            <div style={{}} className="p-1 p-lg-0 w-100 h-100">
              <img
                src={require("../img/cackrack2.png")}
                alt=""
                className="h-100 w-100 img-object-fit rounded-4 shadow-lg "
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mt-4 d-flex align-items-center justify-content-center  '>
        <p className='col-lg-6 col-12 text-center fs-5 fw-bold'>Indulge in our delectable cakes, perfect for weddings, birthdays, and anniversaries. With a variety of flavors and stunning designs, each bite is a celebration of sweetness and joy.</p>
      </div> */}
      <div className="p-lg-4 custom-margin2" >
        <Card cardData={imgData} />
      </div>
    </>
  );
};

export default Cake;
