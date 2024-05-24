import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../component/SEO'

const PageNotFound = () => {
  return (
    <>
     <SEO
    title="Page Not Found"
    description="Welcome to Anmol, the best place to find everything you need at the best prices"
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />

    <div className='' style={{height:"90vh"}}>
    
      <div className='d-flex align-items-center justify-content-center' style={{paddingTop:"14rem"}}>
        <div className='text-center'>

       <p className='custom-font text-orange'>404 Error</p>
        <h3 >OOPS! Page Not Found</h3>
        <p>The link you followed may be broken, or the page has been removed</p>
        <Link to="/">
        <button className='btn btn-primary rounded-3 fw-bold px-4 py-1 border-0'>Go Back Home</button>
        </Link>
        </div>
      </div>
    </div>

    </>
  )
}

export default PageNotFound