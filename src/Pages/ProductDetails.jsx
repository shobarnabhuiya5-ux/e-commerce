import React, { useEffect, useRef, useState } from 'react'
import { FaHeart } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdCheckmarkCircle } from 'react-icons/io';
import { IoRadioButtonOnOutline, IoStarSharp } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import Button from '../components/ui/Button';
import { Link } from 'react-router';
import Footer from '../components/Layout/Footer';

function NextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-secondary flex justify-center w-3/4 mt-2`}
      onClick={onClick}
   >
    <IoIosArrowDown className='text-xl'/>

   </div>
  );
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-secondary flex justify-center w-3/4 mb-2`}
      onClick={onClick}
    >
        <IoIosArrowUp className='text-xl'/>

    </div>
  );
}

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState("XL");
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [quantity, setQuantity] = useState(1)
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);
  const increaseQuantity = ()  =>{
    setQuantity((prev)=> prev+1);
  };
  const decreaseQuantity = ()  =>{
    setQuantity((prev)=> (prev+1 ? prev - 1 : 1));
  };

  const settingsLarge = {
        dots: false,
        slidesToShow: 1,
        arrows: false,
  };
  const settingSmall = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
     nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  const SIZES =["S","M","L","XL","XXL"]
  return (
    <section className='py-14'>
      <div className="container grid grid-cols-2 gap-28">
        <div className='grid grid-cols-4 gap-10'>
            <Slider className='max-w-xl col-span-3'{...settingsLarge} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
               <div>
                 <p className='flex items-center mb-3'>Home <span><IoIosArrowForward /></span> Men’s fashion <span><IoIosArrowForward/></span> Men's Stand Collar Leather Jacket </p>
                   <img src="/card(12).png" alt="" className='w-full'/>
                </div>
               <div>
                   <img src="/card(6).png" alt="" className='w-full'/>
               </div>
               <div>
                   <img src="/card(7).png" alt="" className='w-full'/>
               </div>
                <div>
                   <img src="/card(13).png" alt="" className='w-full'/>
               </div>
          </Slider>
          <Slider
             asNavFor={nav1}
             ref={slider => (sliderRef2 = slider)}
             slidesToShow={4}
             swipeToSlide={true}
             focusOnSelect={true}
             {...settingSmall}
             
            >
             <div>
               <img src="/card(8).png" alt="" className='w-3/4'/>
             </div>
             <div>
               <img src="/card(9).png" alt="" className='w-3/4'/>
             </div>
             <div>
               <img src="/card(11).png" alt="" className='w-3/4'/>
             </div>
              <div>
               <img src="/card(14).png" alt="" className='w-3/4'/>
             </div>
          </Slider>
           <div className=' flex gap-6 w-70 h-70 mb-4'>
            <h3 className='font-bold text-primary/50'>Share</h3>
            <Link to="/">
            <img src="/facebook.png" alt="facebook"/> 
            </Link>
            <Link to="/"> <img src="/twitter.png" alt="twiter" /></Link>
            <Link to="/"><img src="/linkedin.png" alt="linkedin" /></Link>
            <Link to="/"><img src="/instagram.png" alt="instagram" /></Link>
          </div>
        </div>
        <div>
            <div>
                <h3 className='font-medium text-[26px] text-primary mb-6'>Super Skinny Rib Trouser & Joggers for Men By Sowdagar Trouser</h3>
                <div className='flex gap-4'>
                    <p className='flex gap-1 font-medium text-normal'>4.0 <IoStarSharp className='text-amber-300 text-xl'/>
                    <IoStarSharp className='text-amber-300 text-xl'/>
                    <IoStarSharp className='text-amber-300 text-xl'/>
                    <IoStarSharp className='text-amber-300 text-xl'/>
                    <IoStarSharp className='text-[#D3D3D3] text-xl'/>
                    <span className='text-[#BABABA] gap-4'>(223)</span>
                    </p>
                    <div className='flex  mb-9 border-l-2 text-[#F2F2F2] gap-4'>
                        <FcCheckmark className='text-2xl' />

                        <p className='font-xl text-base text-primary'>4,320 Sold</p>
                         <div className='border-r-2 border-secondary/10 gap-4 text-[#F2F2F2]'></div>
                        <div className='flex items-center gap-4'>
                           <FaHeart className='text-[#C7C7C7]'/>
                           <p className='text-lg text-brand font-normal '>Add to wishlist</p>
                       </div>
                    </div>
                   

                </div>
                <div className='flex items-center gap-6'>
                    <h3 className='gap-6 font-xl text-brand text-[36px]'>$976.33</h3>
                    <span className='text-[26px] text-[#8D8D8D] line-through'>$1,020.99</span>
                    <p className='bg-badge rounded text-white text-normal'>20%</p>
                    
                </div>
                <div className='border-b-2 border-secondary/10'>
                    <p className='mt-3 mb-4 flex items-center gap-5'>SKU: 12314124124 
                      <span><IoMdCheckmarkCircle className='text-[#3AB137]'/></span>In Stock
                     
                     </p>
                </div>
                <div className='mt-4'>
                  <p className='mb-4 text-[20px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  <div className='text-[18px] font-normal'>
                    <div className='flex items-center mt-2'>
                       <LuDot className='text-3xl gap-2'/>
                        <p> Direct Full Array</p>
                    </div>
                    <div  className='flex items-center mt-2'>
                      <LuDot className='text-3xl gap-2'/>
                      <p>Quantum Dot Technology</p>
                    </div>
                   <div  className='flex items-center mt-2'>
                     <LuDot className='text-3xl gap-2'/>
                    <p> Ambient Mode</p>
                   </div>
                    <div  className='flex items-center mt-2'>
                      <LuDot className='text-3xl gap-2'/>
                      <p>One Remote Control</p>
                    </div>
                  </div>
                </div>
                <div className='flex items-center mt-4 gap-4 text-lg'>
                  Size
                     {
                      SIZES.map((item) => (
                        <label key={item} htmlFor={item} className={`uppercase py-1 px-2.5 border border-secondary/10 ${selectedSize === item && "bg-brand text-white"}`}>
                          {item}
                          <input onChange={(e) => setSelectedSize(e.target.value)} 
                          value ={item} type="radio" name="size"  id={item} hidden />
                        </label>
                      ))
                    }
                </div>
                <div className='flex items-center gap-9 mt-7'>
                  <div className='flex gap-2 items-center'>
                    <h3 className='text-secondary/80'>Quantity:</h3>
                    <div className='flex items-center bg-secondary/10 rounded-md overflow-hideen'>
                      <button onClick={decreaseQuantity} className='px-3 py-2 text-lg text-secondary/50'>{" "} - </button>
                      <span className='px-3 py-1.5 bg-white text-lg font-medium'>{" "} {quantity}</span>
                      <button onClick={increaseQuantity} className='px-3 py-2 text-lg text-secondary/50'>+</button>
                    </div>
                  </div>
                  <Button className='bg-brand test-white font-medium text-xl py-3 px-11 rounded-md'>Add cart</Button>
                  <Button className='!text-brand bg-brand/10 font-bold border-2 border-brand rounded-md test-xl px-11'>Buy Now</Button>
                  
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
         <div>
          <div className='pt-5 pb-8'>
            <h3 className='text-2xl flex items-center text-brand font-medium pb-11 bg-white border-y-2 border-y-secondary/10'>Producr details of LED Monitor With High Quality In The World</h3>
            <h4 className='text-2xt text-primary font-medium pb-5 pt-4'>See the best picture no matter where you sit</h4>
         </div>
         <div className='flex justify-between pl-6 text-primary text-lg border-b-2 border-b-secondary/10 '>
          <ol className='list-disc'>
            <li >Size : M, L, XL</li>
            <li className='mt-3'>Product Type : Jogger</li>
            <li className='mt-3'>Main Material : Cotton</li>
            <li className='mt-3'>Gender : Male</li>
            <li className='mt-3'>Waist : Mid-rise</li>
            <li className='mt-3'>Zip : Fly</li>
          </ol>
          <ol className='list-disc'>
            <li className='mt-3'>Zipper : Yes</li>
            <li className='mt-3'>Pocket : Two front and One Back Pockets.</li>
            <li className='mt-3'>100% Authentic Product</li>
            <li className='mt-3 max-w-[616px]'>Product color may slightly vary due to our photography and Sometimes it’s vary on our devices</li>
          </ol>
         </div>

        </div>
        <h4 className='text-2xl text-primary fond-medium py-5'>Powerful intelligence for perfection</h4>
        <p className='text-lg text-secondary pb-6'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
        <p className='text-lg text-secondary pb-5'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita </p>
      </div>
      <div className='mt-8'>
        <Footer/>
      </div>
    </section>
  )
}

export default ProductDetails
