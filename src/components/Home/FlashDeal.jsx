import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router'
import ProductCard from '../ui/ProductCard'


const FlashDeal = () => {
  return (
    <section className='pb-12'>
        <div className="container">
            <div className='flex justify-between'>
                <h3 className='sub_head'>Flash Deals</h3>
                <Link to ="/" className='text-base font-normal text-secondary flex items-center gap-4'>View more <FaArrowRightLong/></Link>
            </div>
            <div className='grid grid-cols-4 mt-4 gap-5'>
                <ProductCard img='card.png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳10500'/>
                <ProductCard img='card(1).png' head='Women fashion dress set' discount='-25% OFF' price='৳1000'/>
                <ProductCard img='card (2).png' head='Headrest Executive Mesh Office Chair set' discount='-25% OFF' price='৳5000'/>
                <ProductCard img='card(3).png' head='Women black dress and red hat collections' discount='-25% OFF' price='৳1000.00'/>
            </div>
           
        </div>
      
    </section>
  )
}

export default FlashDeal
