import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import ProductCard from '../ui/ProductCard'
import { IoIosArrowDown } from 'react-icons/io'
import Button from '../ui/Button'

const FeaturedProducts = () => {
  return (
    <section className='pb=12'>
        <div className="container">
            <div className='flex justify-between'>
                <h3 className='sub_head'>Featured Product</h3>
                <Link to ="/" className='text-base font-normal text-secondary flex items-center gap-4'>View more <FaArrowRightLong/></Link>
            </div>
            <div className='grid grid-cols-4 mt-4 gap-5'>
                <ProductCard img='card(5).png' head='Men and Women fashionable watch set' price='৳10500'/>
                <ProductCard img='card(6).png' head='Headrest Executive Mesh Office Chair set' price='৳1000'/>
                <ProductCard img='card(7).png' head='Headrest Executive Mesh Office Chair set' price='৳5000'/>
                <ProductCard img='card(8).png' head='Headrest Executive Mesh Office Chair set' price='৳1000.00'/>
                <ProductCard img='card(9).png' head='Men and Women fashionable watch set' price='৳10500'/>
                <ProductCard img='card(10).png' head='Women fashionable Luxury dress set' price='৳1000.00'/>
                <ProductCard img='card(11).png' head='Women fashionable Luxury dress set' price='৳5000'/>
                <ProductCard img='card(12).png' head='Women fashionable Luxury dress set' price='৳1000'/>
                <ProductCard img='card(13).png' head='Women fashionable Luxury dress set' price='৳10500'/>
                <ProductCard img='card(14).png' head='Women fashionable Luxury dress set' price='৳1000.00'/>
                <ProductCard img='card(15).png' head='Headrest Executive Mesh Office Chair set' price='৳5000'/>
                <ProductCard img='card(16).png' head='Women fashionable Luxury dress set' price='৳1000'/>
                <ProductCard img='card(17).png' head='Men and Women fashionable watch set' price='৳10500'/>
                <ProductCard img='card(18).png' head='Exclusive Home Décor Plug-in LED Light' price='৳1000.00'/>
                <ProductCard img='card(19).png' head='Women fashionable Luxury handsbag' price='৳5000'/>
                <ProductCard img='card(20).png' head='Men and Women fashionable backpack' price='৳1000'/>
                
            </div>
            <div className='flex items-center justify-center'>
            <Button className='flex items-center justify-center mt-16 gap-1'>Show more <IoIosArrowDown /></Button>
            

            </div>
           
        </div>
      </section>
  )
}

export default FeaturedProducts