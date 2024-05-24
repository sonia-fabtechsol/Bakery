import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SEO from "../component/SEO";

const Cart = () => {
  const [cart, setCart] = useCart();
  const { user } = useSelector((state) => state.auth);

  const deleteCardItem = (pid) => {
    try {
      const myCart = [...cart];
      const index = myCart.findIndex((Item) => Item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice =()=>{
    try {
      let total=0;
      {cart.map((item)=>{
        total=total + item.price;
      })
      return total.toLocaleString()
      
    } 
   
    
    }
    catch (error) {
      console.log("error in price calculation", error)
      
    }


  }
  return (
    <>
    <SEO
    title="Cart Products"
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
      <div className="" style={{ marginTop: "12rem" }}>
        <div className="text-center">
          <p className="fw-bold fs-2">Cart</p>

          {/* <p className="mb-0 fw-bold " style={{ display: "inline-block" }}>
            Hello <span className="fs-4 text-orange">{user.name}</span> You have{" "}
          </p> */}
          {cart.length < 1 ? (
            <div>
              <p className="fs-6 mb-0 text-black" style={{ display: "inline-block" }}>
                Your Cart Empty
              </p>
              <Link className="text-black" to="/buy" style={{textDecoration:"none"}}>Continue Shopping</Link>
            </div>
          ) : (
            <div>
              <span className="fs-6 mb-0">Total {cart.length} Items In cart</span>
              <Link to="/buy" className="fw-bold ps-2 text-black" style={{textDecoration:"none"}}>Continue Shopping</Link>
            </div>
          )}
        </div>
        <div className="container p-lg-5 p-2 d-flex  flex-lg-row flex-column align-items-start justify-content-between ">
          <div className="col-lg-6 col-12">
            {cart.map((p) => (
              <div className="mb-2">
                <div className="p-3 d-flex  align-items-start justify-content-start border bg-white">
                  <div className="col-lg-5 d-flex align-items-center justify-content-center">
                    <div style={{ width: "150px" }}>
                      <img
                        src={p.productImage}
                        alt=""
                        className="w-100 h-100 rounded-2"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="px-3">
                      <h5 className="fw-bold fs-5 mb-0">{p.name}</h5>
                      <p className="fs-6 fw-bold mb-0">
                        RS. <span className="">{p.price}</span>{" "}
                      </p>
                      <p className="fs-6 fw-bold mb-0">items. </p>
                      <button
                        className="bg-danger border-0 rounded-1 px-3 py-1 text-white fw-bold"
                        onClick={() => deleteCardItem(p._id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-4 col-12">
            <div>
            <p className="fw-bold fs-3 text-center">Cart Summery</p>
              <p className="fw-bold fs-6 text-center">Payement || GateWay</p>
              <hr />
              <p className="text-center">Total Price : {totalPrice()}</p>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
