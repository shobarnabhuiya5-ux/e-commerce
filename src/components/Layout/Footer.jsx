import React from 'react'
import { FaHeadset, FaStar, FaTruck } from 'react-icons/fa'
import { GiBackwardTime } from 'react-icons/gi'
import { MdOutlinePayment } from 'react-icons/md'
import { Link } from 'react-router'


const Footer = () => {
  const services = [
    {
      title:"FREE SHIPPING",
      subtitle:"Order via Campaign",
      icon: FaTruck
      
    },
    {
      title:"Best Price",
      subtitle:"Quality products",
      icon: FaStar
    },
    {
      title:"Free Retern",
      subtitle:"Within 7 days returns",
      icon: GiBackwardTime
    },
    {
      title:"Secure Payment",
      subtitle:"100% secure payment",
      icon: MdOutlinePayment
    },
  ]
  
  return (
    <section>
      <div className='container mt-12 pb-12'>
        <div>
          <div className='flex items-center justify-center gap-18'>
            {services.map((item) => (
            <Link key = {item.title} className= 'flex pb-12 items-center gap-4'>{<item.icon className='text-5xl text-brand'/>}
            <div>
              <h5 className='font-medium text-[20px] text-primary'>{item.title}</h5>
              <p className='text-base font-normal text-[#757575]'>{item.subtitle}</p>
            </div>
            </Link>
            ))}
           </div>
        
        </div>
        <div className='grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 flex border-t-2 border-[#E5E5E5] pt-12 border-b-2 border-[#E5E5E5]'>
        <div>
            <div>
               <Link to ="/">
               <img src="/logo.png" alt="logo" />
               </Link>
              <p className='pt-8 pb-7 w-90'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className=' flex gap-3 w-40 h-40 mb-4'>
            <Link to="/">
            <img src="/facebook.png" alt="facebook"/> 
            </Link>
            <Link to="/"> <img src="/twitter.png" alt="twiter" /></Link>
            <Link to="/"><img src="/linkedin.png" alt="linkedin" /></Link>
            <Link to="/"><img src="/instagram.png" alt="instagram" /></Link>
          </div>
        </div>
        <div>
          <h5 className='pb-6 font-medium text-[20px] text-primary'>QUICK LINKS</h5>
          <ul>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">About us</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Contact us</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Products</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Login</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Sign Up</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='pb-6 font-medium text-[20px] text-primary'>CUSTOMER AREA</h5>
          <ul>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">My Account</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Orders</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Terms</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Privacy Policy</Link></li>
            <li className='pb-6 text-[#333333CC]'><Link to ="/">Shipping Information</Link></li>
          </ul>
        </div>
        <div>
          <h5 className='pb-6 font-medium text-[20px] text-primary'>CONTACT</h5>
          <p className='w-80 text-[#333333CC]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
          <div className='flex gap-4 mt-8'>
          <FaHeadset className='text-[#8D8D8D] text-5xl' />
          <div>
          <h5 className='font-medium text-normal text-primary'>Have any question?</h5>
          <p className='text-xl font-normal text-brand'>099 456 789</p>
          </div>

          </div>
        </div>
        </div>
        <div className='flex justify-between'>
          <p className='text-[#757575]'>Projectnirvoya -   © 2021 All Rights Reserved</p>
         <div className='flex'>
            <p className='text-brand pt-1'>Pay With</p>
            <Link to="/">
              <img src="/image1.png" alt="image" />
            </Link>
         </div>
        </div>
     </div>  
      
       
      
    </section>
  )
}

export default Footer
