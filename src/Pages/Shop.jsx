import React, { useEffect, useState } from 'react'
import Selectinput from '../components/ui/Selectinput'
import ProductCard from '../components/ui/ProductCard'
import { Link } from 'react-router'
import Footer from '../components/Layout/Footer'
import { MdDownloading } from 'react-icons/md'
import { useGetProductsQuery } from '../services/api'

const Shop = () => {
    const {data, isLoading, isError} = useGetProductsQuery();
    const sortOptions = [
        {
            value:"newest_items",
            label:"Newest Items"
        },
        {
            value:"oldest_items",
            label:"Oldest Items"
        }
    ]
    const categories =[
        {
            title:"Men’s fashion",
        },
        {
            title:"Men’s Jacket",
        },
        {
            title:"Casual Shirts",
        },
        {
            title:"Summer T-Shirts",
        },
        {
            title:"Men's T-Shirts",
        }
    ];
  return (
    <main className='py-12'>
      <div className='container grid grid-cols-12 gap-14'>
        <div className='col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0'>
            <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
            <div className='space-y-1.5 mt-1'>
                {
                    categories.map((item)=>(
                        <Link to="/shop" key={item.title} className='block test-base text-secondary'>{item.title}</Link>
                    ))
                }
            </div>
            <div className='mt-12 border-y-2 border-[#F4F4F4]'>
                <h3>Filter by Price</h3>
                 <input type="range" name="" id="" className='w-full my-6'/>
                 <p className='text-[#A7A7A7]'>Price: <span className='text-secondary'>৳1000 - ৳2500</span> </p>
            </div>
        </div>
        <div className='col-span-9'>
            <div className='flex items-center justify-between'>
                <p className='text-[#42424180]/50 font-medium text-lg'>Showing <span className='text-secondary'>20</span> of <span className='text-secondary'>160</span> product</p>
                <div className='w-fit flex items-center gap-7'>
                    <p>Sort by:</p>
                    <div>
                    <Selectinput className='w-44' options={sortOptions}/> 
                    </div>
                 </div>
            </div>
            <Link to="/" className="pt-5 grid grid-cols-3 gap-6 min-h-screen">
              {isLoading ? (
                <div className="col-span-3 flex justify-center items-center">
      
                  <div className="flex flex-col gap-4 items-center justify-center">
        
                    <div className="w-20 h-20 border-4 border-transparent border-t-brand rounded-full animate-spin flex items-center justify-center">
          
                      <div className="w-14 h-14 border-4 border-transparent border-t-red-400 rounded-full animate-spin"></div>
        
                    </div>

                    <p className="text-secondary text-xl">Loading products...</p>

                  </div>

                </div>
              ) : error ? (
                 <div className="col-span-3 flex justify-center items-center">
                   <Error/>
                 </div>
               ) : (
                data?.products?.map((item) => (
                  <ProductCard key={item.id} head={item.title} img={item.thumbnail} price={item.price} />
                ))
              )}
            </Link>
        </div>
        
      </div>
      <div className='mt-28'>
      <Footer/>
      </div>
     
    </main>
  )
}

export default Shop
