import React from 'react'
import { BsCart4 } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { IoStarSharp } from 'react-icons/io5'

const ProductCard = ({img, discount, price, head}) => {
  return (
    <div className='p-2.5 border border-[#E9E9E9] rounded-2xl'>
        <div className='rounded-2xl overflow-hidden relative'>
            <img src={img} alt="card"className='w-full'/>
            {discount && (<p className='py-1 px-3 bg-badge absolute top-0 left-0 rounded text-white'>{discount}</p>)}
            <span className='absolute top-5 right-3.5 text-3xl text-gray-400 cursor-pointer'><FaRegHeart/>
            </span>
        </div>
      
      <div className='pt-3.5 px-1'>
          <div className='flex items-center gap-1 text-amber-300'>
             <IoStarSharp/>
             <IoStarSharp/>
             <IoStarSharp/>
             <IoStarSharp />
             <IoStarSharp className='text-[#D3D3D3]'/>
             <span className='text-[#333333]'>(0)</span>
          </div>
          <h4 className='text-lg font-normal text-primary py-2.5'>
             {head}
          </h4>
          <div className='flex justify-between'>
             <p className='font-medium text-2xl text-brand'>{price}</p>
             <button><BsCart4 className='text-3xl text-brand'/></button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard
