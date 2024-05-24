import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import { Link} from 'react-router-dom'
import { Checkbox } from 'antd'
import { useCart } from '../context/CartContext'
import SEO from '../component/SEO'



const Shops = () => {

    const [products, setProducts]=useState([])
    const [categories, setCategories]=useState([])
    const [checked, setChecked]=useState([])
    const [total, setTotal]=useState("")
    const [page, setpage]=useState(1)
    const [loading, setLoading]=useState(false)
     const [cart, setCart]=useCart()


    const totalProduct=async()=>{
        try {
            const {data}=await axios.get('/api/v1/product/count-product')
            setTotal(data?.total)
            
        } catch (error) {
            console.log(error)

            
        }
    }

    const handleFilter=(value, id)=>{
        let all=[...checked];
        if(value){
            all.push(id)
        }
        else{
            all=all.filter(e => e !== id)
        }
        setChecked(all)

    }

    const fetchProducts=async()=>{
        try {
            setLoading(true)
            const res=await axios.get(`/api/v1/product/product-list/${page}`)
            setLoading(false)
            if(res){
                setProducts(res?.data.product)
               
            }
            else{
                console.log("product cannot access successfully")
                toast.error(res?.data.message)
            }
            
        } catch (error) {
            setLoading(false)
            console.log("some error occur while fetching all products")
            
        }
    }
    const loadMore=async()=>{
        try {
            setLoading(true)
            const {data}=await axios.get(`/api/v1/product/product-list/${page}`)
            setLoading(false)
            if(data){
                setProducts([...products, ...data?.product])
               
            }
            else{
               
                toast.error("product cannot load successfully")
            }
            
        } catch (error) {
            setLoading(false)
            console.log("some error occur while fetching all products")
            
        }
    }


    const handleDelete=async(Id)=>{
        try {
         
            const res=await axios.delete(`/api/v1/product/delete-product/${Id}`)
            if(res){
               
                toast.success("product delete succefully")
                fetchProducts();
            
            }
            else{
                console.log("product cannot Delete")
                toast.error(res?.data.message)
            }
            
        } catch (error) {
            console.log('error in product deletaion')
            
        }

    }


    const fetchCategories = async () => {
        try {
          const response = await axios.get("/api/v1/category/all-category");
          setCategories(response.data.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
  
      const getFilterProduct=async()=>{
        try {
            const res=await axios.post('/api/v1/product/filter-product',{checked})
            if(res){
                setProducts(res?.data.data)
            }
            else{
                console.log("product cannot access successfully")
                toast.error(res?.data.message)
            }
            
        } catch (error) {
            console.log("some error occur while fetching all products")
            
        }
      }


    useEffect(()=>{
        fetchCategories();
        totalProduct();
    },[])

    useEffect(()=>{
        if(checked.length) getFilterProduct()
    },[checked.length])

    useEffect(()=>{
        if(!checked.length) fetchProducts()
    },[])

    useEffect(()=>{
        if(page === 1) return
        loadMore();
    },[page])
  return (
    <>
    <SEO
    title="Shop Now - Anmol Bakers"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
    <div className='custom-margin px-lg-4 d-flex flex-lg-row flex-column align-items-start justify-content-between'>
   <div className='col-lg-2 col-12'>
    <div className='ps-2 d-flex flex-column'>
        

       {categories.map((c)=>(
             <Checkbox className='' key={c._id} onChange={(e)=> handleFilter(e.target.checked, c._id)}>{c.name}</Checkbox>
       ))}
       <div className='mt-3'>
       
       <button className='bg-warning border-0 p-2 rounded-2 ' 
       onClick={()=> window.location.reload()}
       >Reset All Category</button>
       </div>
    </div>
   </div>

 
      <div className='col-lg-10 col-12'>

      <div className='d-flex flex-wrap align-items-center justify-content-center gap-2 '>
      {products.map((p,index)=>(
    <div className='m-1' key={index} >
    <div className="border-0 shadow-lg responsive-card" style={{width: '17rem',}} >
      <div className='' style={{height:"200px"}}>
      <img src={p.productImage} className="card-img-top w-100 h-100 img-object-fit " alt={p.name} style={{borderTopLeftRadius:"20px", borderTopRightRadius:"20px"}} />
      </div>
  
    <div className="bg-white pt-3 pb-2  px-3">
        <div className='d-flex align-items-center justify-content-between'>
        <h5 className="fw-bold fs-5 mb-0">{p.name}</h5>
        <p className='fs-6 fw-bold mb-0'>RS. <span className=''>{p.price}</span> </p>

        </div>
        <div className='d-flex align-itesm-center justify-content-between my-2'>
        <h5 className="fw-bold fs-5 "><span className='text-warning'>Qty:</span> {p.stock}</h5>
        <button className='px-1 fw-bold  rounded-2 small-font mb-0 bg-success text-white border-0'> {p.status}</button>

        </div>
      
      <p className="mb-0">{p.description.substring(0, 50)}...</p>
   
     <div className='d-flex align-items-center justify-content-between pt-2'>
        <Link to={`/product/detail/${p._id}`}>
      <button className='small-font bg-primary border-0 text-white px-3 py-1 rounded-2 fw-bold text-uppercase'>More Details</button>
      </Link>
      <button className='small-font bg-danger border-0 text-white px-3 py-1 rounded-2 fw-bold text-uppercase' 
       onClick={()=>{ 
         setCart([...cart, p])
         localStorage.setItem('cart', JSON.stringify([...cart, p]))
          toast.success("Item add Successfully")
  }
    
    }
      >Add to Cart</button>
      </div>
      <p></p>
    </div>
  </div>
  </div>

  ))}
 </div>
        <div className='text-center my-4'>
        {products && products.length < total && (
            <button className='btn btn-warning'
            onClick={(e)=>{
                e.preventDefault();
                setpage(page+1);
            }}
            >
                {loading ? "Loadding..." : "Load More"}
            </button>
        )}
      </div>
      </div>
      </div>
     
      </>
  )

  
}

export default Shops