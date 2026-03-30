import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import ProductCard from '../ui/ProductCard'

const FeaturedProducts = () => {
  return (
    <section className='pb=12'>
        <div className="container">
            <div className='flex justify-between'>
                <h3 className='sub_head'>Featured Product</h3>
                <Link to ="/" className='text-base font-normal text-secondary flex items-center gap-4'>View more <FaArrowRightLong/></Link>
            </div>
            <div className='grid grid-cols-4 mt-4 gap-5'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
           
        </div>
      
    </section>
  )
}

export default FeaturedProducts