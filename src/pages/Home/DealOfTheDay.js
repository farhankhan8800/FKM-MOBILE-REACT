import React from 'react';

// import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import hotdealImage from '../../assets/images/hot-sale.png'
import { Grid, Box, Typography } from '@mui/material';
import {banner} from "../../LodingData/lodingData"

const DealOfTheDay = () => {
    const options = {
      gap   : '.6rem',
      drag   : 'free',
      perPage: 3,
      autoScroll: {
        speed: 1,
      },
    };
      return (
                <>
                 <Grid container sx={{ padding:"13px 3px 3px"}}>
                   <Grid item>
                      <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                        <img src={hotdealImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                      </Box>
                   </Grid>
                   <Grid item>
                      <Typography variant="h6" component="h6"> Deal <strong>Of The Day</strong></Typography>
                   </Grid>
                 </Grid>
                <Splide  className='deal_of_the_day' options={ options } >
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
                </>         
       ) 
  }
  

export default DealOfTheDay
