import React from 'react'
import Input from '../components/ui/input'
import Button from '../components/ui/Button'
import { Link } from 'react-router'
import Footer from '../components/Layout/Footer'

const Registration = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Registration</h2>
        <form className="flex flex-col">
          <Input label="Full Name" placeholder="Inter Your Full Name"/>
          <Input type='Email' label='Email' placeholder='Enter Your Email'/>
          <Input type='Password' label='Password' placeholder='Enter Your Password'/>
          
          <div className="flex items-center justify-between flex-wrap">
             <div className='mt-6'>
               <p className="text-secondary mt-5">Already have an account?
                 <Link to="/login" className="text-sm text-blue-500 -200 hover:underline mt-4">Login</Link>
               </p>
             </div>
          </div>
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Registration
