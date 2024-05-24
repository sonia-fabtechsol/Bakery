import React from 'react'


const Card = ({cardData}) => {
 
  return (
 <>
 <div className='d-flex flex-wrap align-items-center justify-content-center '>
  {cardData.map((card,index)=>(
    <div className='m-4' key={index} >
    <div className="border-0 shadow-lg responsive-card" style={{width: '25rem'}} >
      <div className='' style={{height:"300px"}}>
      <img src={card.img} className="card-img-top w-100 h-100 img-object-fit " alt={card.name} style={{borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} />
      {/* <div className='img-container2 position-absolute bottom-0 opacity-0 right-0 w-100'>
     
          <button  className="bg-orange-color text-white w-100 border-0 fw-bold fs-5 py-3" text="Add to Card">Add to card</button>
    
      </div> */}
      </div>
  
    <div className="bg-white pt-3 pb-2 text-center ps-2">
      <h5 className="fw-bold fs-4 ">{card.name}</h5>
      <p className='fs-6 fw-bold'>{card.price}</p>
      <button className='bg-orange-color border-0 text-white px-4 py-2 rounded-2 fw-bold text-uppercase'>buy Now</button>
      <p></p>
    </div>
  </div>
  </div>

  ))}
 </div>


 </>
  )
}

export default Card