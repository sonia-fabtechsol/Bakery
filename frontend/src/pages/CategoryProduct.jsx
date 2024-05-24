import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useCart } from '../context/CartContext'
import SEO from '../component/SEO'

const CategoryProduct = () => {
    const params=useParams()
    const [category, setCategory]=useState("")
    const [products, setProducts]=useState([])
    const {slug}= params;
    const [cart, setCart]=useCart()
  
   
      const categoryProduct=async()=>{
        try {
            const {data}=await axios.get(`/api/v1/product/category-product/${slug}`)
            if(data){
               setProducts(data?.product)
               setCategory(data?.category)
            }
            else{
                toast.error("Products Not found")
            }
        } catch (error) {
            console.log(error)
            
        }
      }

      useEffect(()=>{
      if(slug) categoryProduct()
      },[slug])

  return (
    <>
    <SEO
    title={`${category.name}-Anmol Sweets Bakers  `}
    description={`Buy ${category.mame} for just $${products.price}. Available now at Anmol.`}
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake, methaie"
    />
     
      <div className=" custom-margin" >
        <div className='d-flex align-items-center justify-content-center'>
        <button className='bg-orange-color rounded-4 w-auto border-0  fs-2 text-white fw-bold px-5 py-2 mb-4'> {category?.name}</button></div>
      <div className='d-flex flex-wrap align-items-center justify-content-center '>
  {products.map((p)=>(
    <div className='m-4' key={p._id} >
    <div className="border-0 shadow-lg responsive-card" style={{width: '25rem'}} >
      <div className='' style={{height:"300px"}}>
      <img src={p.productImage} className="card-img-top w-100 h-100 img-object-fit " alt={p.productImage} style={{borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} />
     
      </div>
  
    <div className="bg-white pt-3 pb-2 text-center ps-2">
      <h5 className="fw-bold fs-4 "> {p.name}</h5>
      <p className='fs-6 fw-bold'>RS.{p.price}</p>
      <button className='bg-orange-color border-0 text-white px-4 py-2 rounded-2 fw-bold text-uppercase'
      onClick={()=>{
        setCart([...cart, p])
        toast.success("Item added Successfully")
      }}
      >Add to Card</button>
      <p></p>
    </div>
  </div>
  </div>

  ))}
 </div>
      </div>
    </>
  )
}

export default CategoryProduct