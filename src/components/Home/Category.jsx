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

const Category = () => {
    const categories = [
        {
            title: "Health & Household",
            icon: MdHealthAndSafety

        },
        {
            title: "Kids Fashion",
            icon: FaShirt
        },
        {
            title: "Toys",
            icon: MdToys
        },
        {
            title: "Groceries",
            icon: MdLocalGroceryStore
        },
        {
            title: "Home & Lifestyle",
            icon: FaHome
        },
        {
            title: "Men Fashion",
            icon: PiShirtFolded
        },
        {
            title: "Women’s Fashion",
            icon: GiAmpleDress
        },
        {
            title: "Stationary & Books",
            icon: GiNotebook
        },
        {
            title:"Leather Goods",
            icon: PiHandbagSimpleFill
        },
        {
            title:"Jewelleries ",
            icon: RiJewelryFill
        },
        {
            title:"Watches",
            icon: BsWatch
        },
        {
            title:"Men Fashion",
            icon: GiDiamondRing 

        },
        {
            title:"Tools & Hardware",
            icon: FaTools
        },
        {
            title:"Pet Supplies",
            icon: TbShoppingBag
        },
        {
            title:"Seasonal",
            icon: LuNotebook
        }
        
    ]
  return (
    <section className='py-12'>
        <div className="container">
            <h3 className='sub_head'>Category</h3>
            <div className='mt-8 grid grid-cols-5 gap-3.5'>
                {
                    categories.map((item) => (
                        <Link key={item.title} to ="/" className='p-4 shadow flex items-center  rounded-xl'>
                            <item.icon className='text-xl'/>
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
