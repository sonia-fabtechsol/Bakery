import React from 'react'
import SEO from './SEO'

const LoadSpinner = () => {
  return (
   <>
   <SEO
    title="Loading..."
    />
   <div className="spinner-grow d-flex align-items-center justify-content-center" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
</>
  )
}

export default LoadSpinner