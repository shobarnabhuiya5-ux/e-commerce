import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import ProductCard from '../ui/ProductCard'
import { useGetProductsQuery } from '../../services/api'
import Category from './category'


const SmartPhones = () => {
    const {data, isLoading, isError} = useGetProductsQuery({
     limit:4,
     skip:0,
     Category:"Smartphones"
    });
  return (
    <section className='pb-12'>
        <div className="container">
            <div className='flex justify-between'>
                <h3 className='sub_head'>Smart Phones</h3>
                <Link to ="/shop?category=smartphones" className='text-base font-normal text-secondary flex items-center gap-4'>View more <FaArrowRightLong/></Link>
            </div>
            <div className='grid grid-cols-4 mt-4 gap-5'>
                {
                    data?.products.map((item) =>(
                      <ProductCard img='card.png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳10500' key={item.id} data={item}/>  
                    )

                    )
                }
                
            </div>
           
        </div>
      
    </section>
  )
}

export default SmartPhones 
