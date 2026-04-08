import React from 'react'
import { Link } from 'react-router'
import Input from '../components/ui/input'
import Button from '../components/ui/Button'
import Footer from '../components/Layout/Footer'

const Login = () => {
  return (
    <div>
       <div className="flex flex-col items-center justify-center h-screen dark">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-secondary mb-4">Login</h2>
        <form className="flex flex-col">
          <Input label="Full Name" placeholder="Inter Your Full Name"/>
          <Input type='Email' label='Email' placeholder='Enter Your Email'/>
          <Input type='Password' label='Password' placeholder='Enter Your Password'/>
          
          <div className="flex items-center justify-between flex-wrap">
             <Link to="/login" className="text-sm text-secondary hover:underline mb-0.5">Forgot password?</Link>
             <div className='mt-6'>
               <p className="text-secondary">Already have an account?
                 <Link to="/registration" className="text-sm text-blue-500 -200 hover:underline mt-6">Registration</Link>
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

export default Login
