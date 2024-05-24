import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoTime } from "react-icons/io5";
import Whatsapp from '../whatsapp/Whatsapp';

const Footer = () => {
  return (
   <>
   <Whatsapp />
   <div className='p-lg-4 bg-dark'>
    <div className='responsive-logo' style={{height:"180px", width:"250px"}}>
      <img src={require('../../../src/img/logo.png')} alt=""  className='w-100 h-100 object-fit'/>
    </div>
    <hr  className='text-orange fs-bold' />
    <div className='text-white p-3 d-flex flex-wrap justify-content-between align-items-start'>
      <div className="col-lg-4 ">
        <div>
        <p className='fs-5'> We're all about delicious baked goodies that make your taste buds sing! we specialize in crafting mouthwatering cakes, scrumptious sweets, fluffy voscuits, and savory fast food treats.</p>
        
        </div>
        <div className='d-flex flex-wrap align-items-center justify-content-start pe-2 mt-2 mb-2'>
        <Link to="/" className=''>
          <button className='bg-transparent border text-white py-2 px-4 btn-font cutom-btn-2 my-2 me-2'>
          <RiInstagramFill  className=' fs-3 pe-2'/>
            Instagram
          </button>
          </Link>
          <Link to="/">
          <button className='bg-transparent border text-white py-2 px-4 btn-font cutom-btn-2 my-2'>
          <FaFacebookF className='pe-2 fs-4' />
           Facebook
          </button>
          </Link>
          <Link to="/">
          <button className='bg-transparent border text-white py-2 px-4 btn-font cutom-btn-2 my-2'>
          <FaTwitter  className=' pe-2 fs-3'/>
           Twitter
          </button>
          </Link>
        </div>
       </div>
      <div className="col-lg-3 col-md-6 text-center mb-5 ps-3 ps-lg-0">
        
        <div className='d-flex align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-end align-items-start mt-lg-0 pt-3'>
          <FaLocationArrow  className='fs-4'/>
          <p className='text-orange fs-4 pt-3'>Loction</p>
          <p className='text-white' >Kotli Bawa faqeer chand</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 mb-5 ps-3 ps-lg-0">
        
        <div className='d-flex  align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-end align-items-start'>
          <FaPhoneAlt className='fs-4'/>
          <p className='text-orange fs-4 pt-3'>Contact</p>
          <p className='text-white  mb-0' >+92 344-6358518</p>
          <p className='text-white '>Aliakbar@gmail.com</p>
          </div>
        </div>
       
      </div>

     <div className='col-lg-2 ps-3 ps-lg-0'>
      <div className='d-flex  align-items-center justify-content-center'>
          <div className='d-flex flex-column justify-content-end align-items-start'>
          <IoTime className='fs-2'/>
          <p className='text-orange fs-4 pt-3'>Opening Time</p>
          <p className='text-white  mb-0' >07:00 AM – 11:00 PM</p>
          <p className='text-white '>Every Day</p>
          </div>
        </div>
        </div>

    </div>
    <hr  className='text-orange fs-bold' />
    <div className='d-flex align-items-center justify-content-center'>
      <p className='text-white fw-bold pt-3 text-center ps-2'>Copyright ©2024 All rights reserved | This website is made with  by  <span className='text-orange'><FaHeart  className='fs-5'/></span><span className='text-orange ps-2'>fabtechsol</span></p>
    </div>

   </div>
   </>
  )
}

export default Footer