import React from 'react'
import Card from '../component/card/Card'
const Biscuit = () => {
    const imgData =[
        {
          img:require('../img/b1.png'),
          name:"Lemon flavour",
          price:"Re. 300PK "
        },
        {
          img:require('../img/b2.png'),
          name:"Lemon flavour",
          price:"Re. 300PK "
        },
        {
          img:require('../img/b3.png'),
          name:"Lemon flavour",
          price:"Re. 300PK "
        },
        {
          img:require('../img/b4.png'),
          name:"Lemon flavour",
          price:"Re. 300PK "
        },
       
      ]
  return (
    <>
   <div className='p-lg-4 custom-margin' >
      <div className='d-flex flex-wrap align-items-center justify-content-center'>
        <div className='col-lg-6 col-11'>
        <div style={{}} className='p-lg-3 p-2'>
        <img src={require('../img/biscit1.png')} alt="" className='h-100 w-100 img-object-fit rounded-4 shadow-lg' />
        </div>
        </div>
        <div className='col-lg-6 col-11'>
        <div style={{}} className='p-lg-4 p-1 w-100 h-100'>
        <img src={require('../img/biscuit.jpg')} alt="" className='h-100 w-100 img-object-fit rounded-4 shadow-lg' />
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

export default Biscuit