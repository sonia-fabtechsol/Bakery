import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { LoadSpinner } from "../../component";
import SEO from "../../component/SEO";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading]=useState(false)
  const [name, setName] = useState("");
  const [modalShow, setModalShow]=useState(false);
  const [selectedCategoryId, setSelectedCategoryId]=useState(null)
  const { user , token} = useSelector((state) => state.auth); 

  const submitCategory = async (e) => {
    e.preventDefault();
    try {
      const category = await axios.post("/api/v1/category/create-category", {
        name,
      });
      if (!category) {
        toast.error("Category Cannot Created");
      } else {
        toast.success("Category Created Successfully");
        getCategory();
        setName("")
      }
    } catch (error) {
      console.log("Error in category creation", error);
    }
  };

  const deleteCategory = async (id) => {
    try {
      console.log("token inside delete category", user?.refreshToken)
      const res = await axios.delete(`/api/v1/category/delete-category/${id}`
      // ,{
      //   headers:{
      //     Authorization:token,
      // }
      // }
      );
      if (!res) {
        toast.error(res?.data?.message);
      } else {
        toast.success("Category deleted successfully");
        getCategory(); // Refresh the category list after deletion
      }
    } catch (error) {
      console.log("Error in deleting category", error);
      toast.error("Error in deleting category");
    }
  };
  

  const getCategory = async () => {
    try {
      setLoading(true)
      const response = await axios("/api/v1/category/all-category");
      setLoading(false)
      if (!response) {
        toast.error(response?.data.message);
      }
      // console.log(response?.data.data);
      setCategory(response?.data.data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };



  const editCategory=async(e)=>{
    e.preventDefault();
    try {
      const category = await axios.put(`/api/v1/category/update-category/${selectedCategoryId}`, {
        name,
      });
      if (!category) {
        toast.error("Category Cannot Update");
      } else {
        toast.success("Category Updated Successfully");
        getCategory();
        setModalShow(false)
        setName("")
      
      }
    } catch (error) {
      console.log("Error in category updation", error);
    }

  }
  useEffect(() => {
    getCategory();
  }, []);




  
  return (
    <>
     <SEO
    title="Categories "
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
      <div className="d-flex align-items-center justify-content-center p-2">
        <div className="col-lg-10 col-12">
          <form onSubmit={submitCategory}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Category name"
                aria-label="Category name"
                aria-describedby="button-addon2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <button
                className="bg-primary text-white  px-4 rounded-2  fw-bold border-0 text-nowrap"
                type="submit"
                id="button-addon2"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className=" d-flex align-items-center justify-content-center mt-5 p-2">
        <div className="col-lg-10 col-12">
          <div className="bg-white rounded-4 p-4">
          <table className="table table-responsive">
            <thead className="bg-orange-color ">
              <tr className="bg-orange-color rounded-4" >
              <th className="ps-3 bg-orange-color text-white" style={{borderTopLeftRadius:"10px"}}>Id</th>
                <th className="ps-3 bg-orange-color text-white" >Name</th>
                <th className="ps-4 bg-orange-color text-white" style={{borderTopRightRadius:"10px"}}>Action</th>
              </tr>
            </thead>

            {loading ? (
    <div className='d-flex align-items-center justify-content-center m-5'>
      
    <LoadSpinner />
    
    </div>
  ):(
    <tbody>
    {category.map((item, index) => (
      <tr className="ps-5" key={item._id}>
        <td scope="row">{index+1}</td>
        <td className="px-3">{item.slug}</td>
        <td>
          <div className="d-flex align-items-center justify-content-start gap-3">
            <button className="bg-primary rounded-2 py-1 border-0 text-white px-2 fw-bold"
             onClick={() => {setModalShow(true);
              setSelectedCategoryId(item._id);
              setName(item.name)

            }}
           
            >
              Edit
            </button>
            <MyVerticallyCenteredModal
show={modalShow}
editCategory={editCategory}
setName={setName}
name={name}

onHide={() => setModalShow(false)}
/>
            <button className="bg-danger rounded-2 py-1 border-0 text-white px-2 fw-bold" 
            onClick={()=>deleteCategory(item._id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    ))}

          
            </tbody>
              )
          }
          </table>
          </div>
        </div>
      </div>

      <table class="table"></table>
    </>
  );
};

export default Category;


function MyVerticallyCenteredModal({editCategory,setName, name, ...props}) {
 
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-orange-color text-white">
        
      </Modal.Header>
      <Modal.Body>
      <form onSubmit={editCategory}>
          <div className="d-flex flex-column  my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
             
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <div className="my-3">
            <button
              className="bg-orange-color text-white py-1 px-4 rounded-2  fw-bold border-0 text-nowrap"
              type="submit"
             
            >
             Update
            </button>
            </div>
          </div>
        </form>
      </Modal.Body>
    
       
     
    </Modal>
  );
}