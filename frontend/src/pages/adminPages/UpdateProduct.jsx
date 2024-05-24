import React, { useState, useEffect } from "react";
import { Select } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import SEO from "../../component/SEO";

const UpdateProduct = () => {
  const { Option } = Select;
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [productData, setProductData] = useState({
    name: "",
    productImage: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    status:"",
  });

  const handleSelectChange = (value) => {
    setProductData({ ...productData, category: value });
  };

  const handleChange = (e) => {
    const { value, files, name } = e.target;
    if (files && files.length > 0) {
      const file = files[0];
      setProductData({ ...productData, [name]: file });
      setSelectedImageFile(URL.createObjectURL(file));
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  // const handleChange = (e) => {
  //   const { value, files, name } = e.target;
  //   if (files && files.length > 0) {
  //     const file = files[0];
  //     setProductData({ ...productData, [name]: file });
  //   } else {
  //     setProductData({ ...productData, [name]: value });
  //   }
  // };
  

  const handleUpdating = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("name", productData.name);
     
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      formData.append("category", productData.category);
      formData.append("stock", productData.stock);
      formData.append("status", productData.stock);

      if (productData.productImage) {
        formData.append("productImage", productData.productImage);
      }
      
    

      const response = await axios.put(
        `/api/v1/product/update-product/${id}`,
        formData
      );
      setIsLoading(false);
      if (response) {
        setProductData(response.data.data);
        navigate("/admin/ProductList");
        toast.success("Product updated successfully");
      } else {
        toast.error("Product cannot be updated");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error("Product cannot be updated");
      console.error("Error updating product:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get("/api/v1/category/all-category");
      setCategories(response.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`/api/v1/product/single-product/${id}`);
      if(response){
        setProductData(response?.data.data);
        console.log("products that fetch are", response?.data.data)

      }
     
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();
  }, [id]);

  return (
    <>
     <SEO
    title="Update Products"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
     <div className="d-flex align-items-center justify-content-center m-3">
      <div className="p-4 col-lg-8 col-md-10 col-12 bg-light shadow rounded-4 overflow-hidden">
        <div className="text-center my-3 fw-bold fs-4">Product Update Form</div>
        <form onSubmit={handleUpdating}>
          <div className="form-font">
            <div className="mb-3 w-100">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter product name"
                name="name"
                value={productData.name}
                onChange={handleChange}
                required
              />
              <div className="mb-3">
               
                  <div className="text-center">
                    <img
                      src={selectedImageFile || productData.productImage}
                      alt="product"
                      height="200px"
                      className="mt-3 overflow-hidden img img-responsive"
                    />
                  </div>
            
              </div>
            </div>
            <div className="mb-3 w-100">
              <label className="btn btn-secondary w-100">
                Upload Product Image
                <input
                  type="file"
                  className="form-control form-control-lg"
                  name="productImage"
                  accept="image/*"
                  onChange={handleChange}
                  hidden
                />
              </label>
            </div>
            <div className="mb-3 w-100">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter product description"
                name="description"
                value={productData.description }
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-2">
              <div className="mb-3 w-100">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter product price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 w-100">
                <Select
                  className="w-100"
                  placeholder="Select category"
                  showSearch
                  size="large"
                  value={productData.category}
                  onChange={handleSelectChange}
                >
                  {categories.map((c) => (
                    <Option key={c._id} value={c._id}>
                      {c.name}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control form-control-lg"
                placeholder="Enter product stock"
                name="stock"
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
            <option value="In Stock">In Stock</option>
            <option value="Out Of Stock">Out Of Stock</option>
          </select>
                  </div>
            <div className="py-3 d-flex align-items-center justify-content-center">
              <button
                className="bg-orange-color px-5 py-2 border-0 rounded-2 text-white fw-bold"
                type="submit"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
   
  );
};

export default UpdateProduct;
