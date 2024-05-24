import React from 'react'
import {Select} from 'antd'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SEO from '../../component/SEO';
const CreateProduct = () => {
  const {Option}=Select;
  const navigate=useNavigate()
  const [categories, setcategories]=useState([])
  const[loading, setLoading]=useState(false);
  const [productData, setProductData]=useState({
    name:"",
    productImage:"",
    description:"",
    price:"",
    category:"",
    stock:"",
    status:""

  

  })


  const handleSelectChange = (value) => {
    setProductData({ ...productData, category: value });
  };

const handleChange = (e) => {
  if (e.target) {
    const { value, files, name } = e.target;
    if (files) {
      const file = files[0];
      setProductData({ ...productData, [name]: file });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  } else {
    // Handle the case where e.target is null (if needed)
    console.log("Event target is null");
  }
};

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('productImage', productData.productImage);
      formData.append('description', productData.description);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('stock', productData.stock);
      formData.append('status', productData.status);
      const response=await axios.post('/api/v1/product/create-product',formData)
      setLoading(false)
      if(response){
         navigate('/admin/ProductList')
        toast.success("product Created successfully")
        //  console.log(productData, "product data")
      }
      else{
        toast.error("Product cannot create ")
      }
      
    } catch (error) {
      setLoading(false);
      toast.error("Product cannot create ")
      console.log(error, "some thing wrong while product creation")
      
    }
      }


      const fetchcategory=async()=>{
    
          try {
            const response = await axios("/api/v1/category/all-category");
            if (!response) {
              toast.error(response?.data.message);
            }
            // console.log(response?.data.data);
            setcategories(response?.data.data);
          } catch (error) {
            console.log(error);
          }
     
      };


      useEffect(()=>{
        fetchcategory();
      },[])
  return (
    <>
       <SEO
    title="Create Products"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />

<div className='d-flex align-items-center justify-content-center'>
  <div className='p-4 col-lg-6 col-md-10 col-12 bg-light shadow rounded-4'>
  <div className='text-center my-3 fw-bold fs-4'>Product Creation Form</div>
  <form onSubmit={handleSubmit}>
                <div className="form-font">
                  
                  <div className="">
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Enter product name"
                        id=""
                        name='name'
                        value={productData.name}
                        onChange={handleChange}

                        required
                      />
                      <div className='mb-3'>
                        {productData.productImage && (
                         <div className='text-center'>
                          <img src={URL.createObjectURL(productData.productImage)} alt="product photo"  height={'200px'} className='mt-3'/>
                         </div>
                        )
                    

                        
                        }
                      </div>
                    </div>
                    <div className="mb-3 w-100">
                      <label className='btn btn-secondary w-100'>Upload product Image
                 
                      <input
                        type="file"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Product Image"
                        name='productImage'
                        accept='image/*'
                        onChange={handleChange}
                        required
                        hidden
                      />
                      </label>
                    </div>
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter product discription"
                        name='description'
                        value={productData.description}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-2">
                    
                    <div className="mb-3 w-100">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter Your product Price"
                        id=""
                        name='price'
                        value={productData.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                 
       
                 <div className='mb-3 w-100'>

                 <Select
  className='w-100'
  defaultValue="Select category"
  showSearch
  size='large'
  name="category"
  value={productData.category || undefined }
  onChange={handleSelectChange} 
>
  {categories.map((c) => (
    <Option key={c._id} value={c._id}>{c.name}</Option> 
  ))}
</Select>
                 </div>
                 
                 </div>
                 <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-2">
                  <div className="mb-3 w-100">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter product stock"
                      name='stock'
                      value={productData.stock}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="mb-3 w-100">
                  <select
                  className='w-100 form-select'
            id="status"
            name="status"
            defaultValue="select Status"
            value={productData.status}
            onChange={handleChange}
          >
             <option >select Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Out Of Stock">Out Of Stock</option>
          </select>
                  </div>
                  </div>
                  <div className="py-3 d-flex align-items-center justify-content-center">
                    <button
                      className="bg-orange-color px-5 py-2 border-0 rounded-2 text-white fw-bold"
                      type="submit"
                    >
                      {loading ? "Submitting..." : "Submit"}
                   
                    </button>
                  </div>
                </div>
              </form>
  </div>
</div>
       
       
    </>

  )
}

export default CreateProduct