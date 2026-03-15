import React from 'react'
import "slick-carousel/slick/slick.css";
import { Link } from 'react-router';
import Slider from 'react-slick'

const Banner = () => {
   const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <section>
      <div className='container'>
        <div>
        <Slider {...settings}>
            <Link>
            <img src="/banner.png" alt="banner" />

            </Link>
      
       </Slider>
        </div>
      </div>
    </section>
  )
}

export default Banner
