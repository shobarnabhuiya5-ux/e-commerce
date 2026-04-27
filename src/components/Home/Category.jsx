import React from 'react'
import { BsWatch } from 'react-icons/bs'
import { FaHome, FaTools } from 'react-icons/fa'
import { FaShirt } from 'react-icons/fa6'
import { GiAmpleDress, GiDiamondRing, GiNotebook } from 'react-icons/gi'
import { LuNotebook } from 'react-icons/lu'
import { MdArrowForwardIos, MdHealthAndSafety, MdLocalGroceryStore, MdToys } from 'react-icons/md'
import { PiHandbagSimpleBold, PiHandbagSimpleFill, PiShirtFolded } from 'react-icons/pi'
import { RiJewelryFill } from 'react-icons/ri'
import { TbShoppingBag } from 'react-icons/tb'
import { Link } from 'react-router'
import { useGetCategoryListQuery } from '../../services/api'

const Category = () => {
    const {data} = useGetCategoryListQuery();
  return (
    <section className='py-12'>
        <div className="container">
            <h3 className='sub_head'>Category</h3>
            <div className='mt-8 grid grid-cols-5 gap-3.5'>
                {
                    categories.map((item) => (
                        <Link key={item.title} to ={`/shop?category${item}`} className='p-4 shadow flex items-center  rounded-xl'>
                            <item.icon className='text-xl text-brand'/>
                            <p className='pl-2.5 pr-6 font-normal text-base text-secondary'>{item.title}</p>
                            <MdArrowForwardIos  className='text-[##999999] ml-auto'/>
                       </Link>

                    ))
                }
            </div>
        </div>
       
      
    </section>
  )
}

export default Category
