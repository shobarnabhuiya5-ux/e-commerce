import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/category'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Footer from '../components/Layout/Footer'
import SmartPhones from '../components/Home/SmartPhones'


const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <SmartPhones/>
      <FeaturedProducts/>
      <Footer/>
      
    </>
  )
}

export default Home
