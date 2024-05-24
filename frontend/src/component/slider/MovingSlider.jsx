import React from 'react'

const MovingSlider = ({text, className}) => {
  return (
<>
<div className="" style={{marginTop:"4rem", overflow: "hidden"}}>
        <div className="moving-text-container">
        <p className={`text-center fw-bold custom-font pt-1 custom-font2 ${className} `} >{text}</p>
        </div>
      </div>
</>
  )
}

export default MovingSlider