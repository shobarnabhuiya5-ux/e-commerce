import React from 'react'
import Selectinput from '../components/ui/Selectinput'
import ProductCard from '../components/ui/ProductCard'
import { Link } from 'react-router'
import Footer from '../components/Layout/Footer'

const Shop = () => {
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
    ]
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
            <div className='grid grid-cols-3 gap-6 mt-6'>
                <ProductCard img='card.png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳10500'/>
                <ProductCard img='card(1).png' head='Women fashion dress set' discount='-25% OFF' price='৳1000'/>
                <ProductCard img='card (2).png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳5000'/>
                <ProductCard img='card(3).png' head='Women black dress and red hat collections' discount='-25% OFF' price='৳1000.00'/>
                <ProductCard img='card.png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳10500'/>
                <ProductCard img='card(1).png' head='Women fashion dress set' discount='-25% OFF' price='৳1000'/>
                <ProductCard img='card (2).png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳5000'/>
                <ProductCard img='card(3).png' head='Women black dress and red hat collections' discount='-25% OFF' price='৳1000.00'/>
                <ProductCard img='card.png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳10500'/>
                <ProductCard img='card(1).png' head='Women fashion dress set' discount='-25% OFF' price='৳1000'/>
                <ProductCard img='card (2).png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳5000'/>
                <ProductCard img='card(3).png' head='Women black dress and red hat collections' discount='-25% OFF' price='৳1000.00'/>
            </div>
        </div>
        
      </div>
      <div className='mt-28'>
      <Footer/>
      </div>
     
    </main>
  )
}

export default Shop
