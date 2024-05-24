import React from 'react'
import Card from '../component/card/Card'
const FastFood = () => {
  const imgData =[
    {
      img:require('../img/shawarma.jpeg'),
      name:"Lemon flavour",
      price:"Re. 300PK "
    },
    {
      img:require('../img/shawarma.png'),
      name:"All Kind of Shawarma",
      price:"Re. 300PK "
    },
    {
      img:require('../img/b2.jpeg'),
      name:"Lemon flavour",
      price:"Re. 300PK "
    },
    {
      img:require('../img/images.jpeg'),
      name:"Burger",
      price:"Re. 300PK "
    },
    {
      img:require('../img/pizza2.jpg'),
      name:"Pizza",
      price:"Re. 300PK "
    },
    {
      img:require('../img/piza.png'),
      name:"Pizza",
      price:"Re. 300PK "
    },
    {
      img:require('../img/tika boti1.png'),
      name:"Tika Boti",
      price:"Re. 300PK "
    },
    {
      img:require('../img/tikaboti2.png'),
      name:"Tika Boti",
      price:"Re. 300PK "
    },
   
  ]
  return (
    <>
    <div className='p-lg-4 custom-margin' >
      <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <div className='col-lg-6 col-11'>
        <div style={{}} className='p-lg-3 p-2'>
        <img src={require('../img/fastfood2.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 shadow-lg' />
        </div>
        </div>
        <div className='col-lg-6 col-11'>
        <div style={{}} className='p-lg-3 p-2 w-100 h-100'>
        <img src={require('../img/fastfood4.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 shadow-lg' />
        </div>
        </div>
      </div>
      </div>
      <div className='p-lg-4 ' >
     <Card cardData={imgData} />

      </div>
    </>
  )
}

export default FastFood