import React from 'react'
import Card from '../component/card/Card'
const Mithaie = () => {
  const imgData =[
    {
      img:require('../img/gulab.png'),
      name:"Gulab Jaman",
      price:"Re. 300PK (1 KG)"
    },
    {
      img:require('../img/mix.jpg'),
      name:"Mix Sweets",
      price:"Re. 300PK (1 KG)"
    },
    {
      img:require('../img/rasgulla.png'),
      name:"Ras Gully",
      price:"Re. 300PK (1 KG)"
    },
    {
      img:require('../img/rasmlaie2.png'),
      name:"Ras Mlaie",
      price:"Re. 300PK (1 KG)"
    },
    {
      img:require('../img/mix.png'),
      name:"Mix flavour",
      price:"Re. 300PK (1 KG)"
    },
    {
      img:require('../img/motichoor.png'),
      name:"Moti Choor",
      price:"Re. 300PK (1 KG)"
    },
   
  ]
  return (
    <>
     <div className='p-lg-4 custom-margin' >

     <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <div className='col-lg-6 col-11'>
        <div style={{}} className='d-flex align-items-center justify-content-center  p-2'>
        <img src={require('../img/sweet4.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 ' />
        </div>
        </div>
        <div className='col-lg-6 col-11 h-100'>
        <div style={{}} className='p-lg-4 p-2  h-100'>
        <img src={require('../img/sweet5.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 ' />
        </div>
        </div>
      </div>
      </div>
      <div className='p-lg-4' style={{paddingTop:"8rem"}}>
     <Card cardData={imgData} />

      </div>
    </>
  )
}

export default Mithaie