import React from 'react';    
// import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {banner} from "../../LodingData/lodingData"
const Carousel = () => {
  const options = {
    type         : 'loop',
    autoplay     : true
  };
    return (
      <div style={{paddingTop:"56px"}}>
         <Splide  className='Carousel_class' options={ options } >
              {
                banner.map((item,i)=>{
                  return(
                    <SplideSlide key={i}>
                      <a href={item.link} target="_blank"><img src={item.src} alt={item.alt}/></a>
                   </SplideSlide>
                  )
                })
             }
          </Splide>
      </div>
           
     ) 
}

export default Carousel;
