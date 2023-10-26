import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import slider1 from '../public/images/sliderabout1.png'
import slider2 from '../public/images/sliderabout2.png'
import slider3 from '../public/images/sliderabout3.png'
import slider4 from '../public/images/sliderabout4.png'
import slider5 from '../public/images/sliderabout5.png'

import slider7 from '../public/images/sliderabout7.png'
import slider8 from '../public/images/sliderabout8.png'
import slider9 from '../public/images/sliderabout9.png'

export interface SlideraboutProps {
}

export default function Sliderabout(props: SlideraboutProps) {
   const settings = {
      // Cấu hình của Slider (tuỳ chọn)
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 600,
   };
   return (
      <div className='slider'>
         <Slider {...settings}>
            <div className="slider1">
               <Image src={slider1} alt="slider 1" className="sliderabout_image" />
            </div>

            <div className="slider1">
               <Image src={slider2} alt="slider 2" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider3} alt="slider 3" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider4} alt="slider 4" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider5} alt="slider 5" className='sliderabout_image' />
            </div>


            <div className="slider1">
               <Image src={slider7} alt="slider 6" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider8} alt="slider 7" className='sliderabout_image' />
            </div>

            <div className="slider1">
               <Image src={slider9} alt="slider 8" className='sliderabout_image' />
            </div>
         </Slider>
      </div>
   );
}
