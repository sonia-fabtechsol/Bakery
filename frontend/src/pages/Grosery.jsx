import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";

const Grosery = () => {
  const [data, setData]=useState([])
  const userId=useParams();

  useEffect(()=>{

    axios.get(`/api/v1/auth/user/${userId}`)
    .then((response)=>{
      console.log('register controller invoke')
    })
    .catch((error)=>{
      console.log(`error are accour ${error}`)
    })

  })
  const imgData = [
    {
      img: require("../img/cake1.jpg"),
      name: "Lemon flavour",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cake1.jpg"),
      name: "Lemon flavour",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cake1.jpg"),
      name: "Lemon flavour",
      price: "Re. 300PK (1 Pound)",
    },
    {
      img: require("../img/cake1.jpg"),
      name: "Lemon flavour",
      price: "Re. 300PK (1 Pound)",
    },
  ];
  return (
    <>

    <div className="text-center" style={{marginTop:"20rem"}}>
<p>total number of data {data.length}</p>
{data.map((data)=>(
  <div className="" key={data.id}>
    <p>{data?.name}</p>
    <p>{data?.email}</p>
    <p>{data?.user_id}</p>
  </div >
))}
    </div>
      {/* <div className="p-lg-4 custom-margin">
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
          <div className="col-lg-4 col-11 mb-4">
            <div style={{}} className="">
              <p className="text-black text-center">
                "We understand that caring for your family means providing them
                with the best of everything. That's why we offer a comprehensive
                range of baby care products and kitchen ingredients to meet all
                your household needs. From gentle baby lotions and diapers to
                premium cooking oils and spices, we've got you covered."
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="p-lg-4" style={{ paddingTop: "8rem" }}>
        <Card cardData={imgData} />
      </div> */}
    </>
  );
};

export default Grosery;
