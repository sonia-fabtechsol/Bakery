import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { MdAddIcCall } from "react-icons/md";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { useState } from "react";
import SEO from "../component/SEO";
const Contact = () => {
  const [loading, setLoading]=useState(false)
  const [contactData, setContactData]=useState({
    name:"",
    email:"",
    message:"",
    subject:""

  })

  const handleChange=(e)=>{
    const {name, files,value}=e.target;
    if(files){
      const file=files[0]
      setContactData({...contactData, [name]: file})
    }
    else{
      setContactData({...contactData, [name]:value})
    }
  }

  // const submitForm=(e)=>{
  //   e.preventDefault()
  //   try {
  //     setLoading(true)
  //     console.log("Contact data",contactData)
  //     setLoading(false)
  //   } catch (error) {
  //     setLoading(false)
  //     console.log("error in contact form",error)
      
  //   }
  // }
  return (
    <>
    <SEO
    title="Contact Us - Anmol "
    description="Welcome to Anmol, the best place to find everything you need at the best prices."
    keywords="shopping, ecommerce, buy online, Anmol, Sweets, Grocery, fast food, cake"
    />
      <div className="" style={{ paddingTop: "8rem" }}>
        <div className="home-banner position-relative">
          <div className=" position-absolute  start-0" style={{ top: "30%" }}>
            <div className="d-flex flex-column col-lg-9 col-md-9 col-12 ps-5 ">
              <h1 className="custom-font text-white">
                Healthy Made Delicious Food
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center m-lg-5 mt-5 m p-3 rounded-4">
        <div className="col-lg-10 col-12 rounded-4" style={{border:"6px solid white"}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6745.3764905402295!2d74.52546544269255!3d32.29335874547774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391ec882d7927a89%3A0x519cc45b9ebca4b2!2sKotli%20Bawa%20Faqir%20Chand%2C%20Sialkot%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1714551625245!5m2!1sen!2s"
         width="100%"
          height="450"
          title="Description of the embedded content"
          className="border-0 rounded-2"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
      </div>

      <div className="bg-dark m-lg-4 p-lg-4 p-2 m-1 rounded-2">
        <div className="p-lg-5 m-3 d-flex flex-lg-row flex-column align-items-start justify-content-center gap-4">
          <div className="col-lg-6 col-12 ">
            <div className="">
              <form  action="https://formspree.io/f/xbjvqela"
                  method="POST">
                <div className="form-font">
                  <div className="mb-3 w-100">
                    <textarea
                      className="form-control form-control-lg"
                      name="message"
                      id=""
                      rows="6"
                      placeholder="Enter Your Message"
                      value={contactData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between gap-2">
                    <div className="mb-3 w-100">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Name"
                        name="name"
                        value={contactData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 w-100">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email"
                        name="email"
                        value={contactData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Your Subject"
                      name="subject"
                      value={contactData.subject}
                      onChange={handleChange}
                      
                    />
                  </div>
                  <div className="mb-3">
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
          <div className="col-lg-4 col-12 mx-lg-0 p-4">
            <div className="d-flex flex-column align-items-start justify-content-center">
              <div className="d-flex align-items-start justify-content-center gap-4">
                <div>
                  <AccountBalanceIcon className="fs-2 text-white" />
                </div>
                <div className="text-start text-white">
                  <p className="fs-6 fw-bold  mb-0 text-uppercase">Location</p>
                  <p className="mb-0  ">Kotli Bawa Faqir Chand</p>
                  <p>Near Pool Nehar</p>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-center gap-4">
                <div>
                  <MdAddIcCall className="fs-2 text-white" />
                </div>
                <div className="text-start text-white">
                  <p className="fs-6 fw-bold  mb-0 text-uppercase">Call Us</p>
                  <p className="mb-0   ">+92 344-6358518</p>
                  <p className="  ">+92 340-4431265</p>
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-center gap-4">
                <div>
                  <AccessTimeFilledIcon className="fs-2 text-white" />
                </div>
                <div className="text-start text-white">
                  <p className="fs-6 fw-bold  mb-0 text-uppercase">
                    Opening hours
                  </p>
                  <p className="mb-0   ">7:00AM - 11:00PM</p>
                  <p>Every Day</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
