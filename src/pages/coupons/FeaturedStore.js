import React from 'react';

import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import shopImage from '../../assets/images/restaurant.png'
import { Grid, Box, Typography } from '@mui/material';
        const banner=[
          {
            src:"https://images.freekaamaal.com/sticky/india-circus-crafted-coffee-mugs-(18-oct)jpg.webp",
            alt:"banner",
            link:"1"
         },
         {
           src:"https://images.freekaamaal.com/sticky/wingreenworld-raw-healthy-smoothie-combo-(20-oct)jpg.webp",
           alt:"banner",
           link:"2"
         },
         {
           src:"https://images.freekaamaal.com/sticky/flipkart-grocery-items-from-rs1-(20-oct)jpg.webp",
           alt:"banner",
           link:"3"
         },
         {
            src:"https://images.freekaamaal.com/sticky/flipkart-grocery-items-from-rs1-(20-oct)jpg.webp",
            alt:"banner",
            link:"4"
          }, 
          {
            src:"https://images.freekaamaal.com/sticky/flipkart-grocery-items-from-rs1-(20-oct)jpg.webp",
            alt:"banner",
            link:"5"
          },  
         {
           src:"https://images.freekaamaal.com/sticky/cadbury-diwali-oreo-gift-set-(20-oct)jpg.webp",
           alt:"banner",
           link:"6"
         }
        ]


const FeaturedStore = () => {
    const options = {
      gap   : '1rem',
      drag   : 'free',
      perPage: 4,
      autoScroll: {
        speed: 1,
      },
    };
      return (
                <>
                 <Grid container sx={{ padding:"13px 3px 2px"}}>
                   <Grid item>
                      <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                        <img src={shopImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                      </Box>
                   </Grid>
                   <Grid item>
                      <Typography variant="h6" component="h6"> Featured <strong>Store</strong></Typography>
                   </Grid>
                 </Grid>
                <Splide  className='deal_of_the_day' options={ options } >
                                {
                                banner.map((item,i)=>{
                                    return(
                                    <SplideSlide key={i}>
                                        <Link to={`/featured-store/${item.link}`}><img src={item.src} alt={item.alt}/></Link>
                                    </SplideSlide>
                                    )
                                })
                            }
                </Splide>
                </>         
       ) 
  }
  
export default FeaturedStore

