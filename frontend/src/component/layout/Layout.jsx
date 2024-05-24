import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'


const Layout = () => {
  return (
    
    <div className=''>
    <Header />
    <main style={{minHeight:"90vh"}}>
        <Outlet />
    </main>
     <Footer />
    </div>
  )
}

export default Layout