import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/category'
import FlashDeal from '../components/Home/FlashDeal'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Footer from '../components/Layout/Footer'





const Home = () => {
  return (
    <>
      <Banner/>
      <Category/>
      <FlashDeal/>
      <FeaturedProducts/>
      <Footer/>
      
    </>
  )
}

export default Home
