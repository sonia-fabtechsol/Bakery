import React from 'react'


const Whatsapp = () => {
    const whatsappNumber='03446358518';

    const openWhatsApp = () => {
        // Construct the WhatsApp link
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello,%20I%20would%20like%20to%20get%20in%20touch.`;
        window.open(whatsappLink, '_blank');
      };

  return (
   <>
    
     <button onClick={openWhatsApp} className='bg-transparent border-0 whatsapp-button'>
        <div className='d-flex ' >
      <img src={require('../../img/whatsap.png')} alt="WhatsApp Icon" className='w-100 h-100 img-object-fit' />
      </div>
   {/* <RiWhatsappFill  className='text-success fs-1'/> */}
    </button>
   </>
  )
}

export default Whatsapp