import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {toast} from 'react-toastify'
import SEO from "../component/SEO";

const DetailPage = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  const [products, setProducts]=useState([])
 



  const getProduct = async () => {
    try {
      const response = await axios.get(`/api/v1/product/single-product/${id}`);
      if (response) {
        setProduct(response?.data?.data);
         similarProduct(response?.data.data._id, response?.data.data.category)
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  const similarProduct=async(pid, cid)=>{
    try {
      const response=await axios.get(`/api/v1/product/similar/${pid}/${cid}`)
      if(response){
        setProducts(response?.data.data)
        console.log(response?.data.data)
      }
      
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(() => {
    if (id) getProduct();
  }, [id]);
  return (
    <>
     <SEO
    title={`${product.name} - Anmol`}
    description={`buy ${product.name} ,Welcome to Anmol, the best place to find everything you need at the best prices.`}
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
      <div className=" custom-margin">
        
        <div className="d-flex flex-wrap align-items-center justify-content-center ">
          
            <div className="col-lg-8 col-11 rounded-4 m-4">
              <div
                className="d-flex flex-lg-row flex-md-row flex-column  border-0 shadow-lg "
                // style={{ width: "30rem" }}
              >
                <div className="col-lg-6" style={{ height: "400px" }}>
                  <img
                    src={product.productImage}
                    className="w-100 h-100 img-object-fit "
                    alt={product.name}
                  
                  />
                </div>

                <div className="bg-white pt-3 pb-2  px-3 col-lg-6">
                  <div className="d-flex align-items-center justify-content-between">
                  <h5 className="fw-bold fs-4 "> {product.name}</h5>
                  <p className="fs-6 fw-bold">RS.{product.price}</p>
                  </div>
                  <p className="fs-6 fw-bold ">{product.description}</p>
                  <p className="fs-6 fw-bold">Avaiable Stock: {product.stock}</p>
                  <button
                    className="bg-orange-color border-0 text-white px-4 py-2 rounded-2 fw-bold text-uppercase"
                    onClick={() => {
                      setCart([...cart, product]);
                    
                      toast.success("Item added Successfully");
                    }}
                  >
                    Add to Card
                  </button>
                  <p></p>
                </div>
              </div>
            </div>
        
        </div>

        <div className="m-4">
          <h2 className="fw-bold">Similar Products</h2>
          <hr />
          <div className='d-flex flex-wrap align-items-center justify-content-center gap-2 '>
            {products.length >= 1 ? (
          <div className="d-flex flex-wrap align-items-center justify-content-center">
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
            ):(
              <p className="fs-4">No similar product found</p>
            )}
    
        </div>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
