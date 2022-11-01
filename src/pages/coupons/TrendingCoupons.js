import React from 'react'

import livdealStyle from "../Home/LiveDeals.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import hotImage from '../../assets/images/hot_burn.png'
import { Grid, Box, Typography, CardActionArea, CardContent,Card } from '@mui/material';
        const banner=[
          {
            src:"https://images.freekaamaal.com/sticky/india-circus-crafted-coffee-mugs-(18-oct)jpg.webp",
            alt:"banner",
            link:"https://freekaamaal.com/",
            mrp:300,
            text:" Lizards are a widespread group of squamate  ",
            Viewers:5
         },
         {
           src:"https://images.freekaamaal.com/sticky/flipkart-grocery-items-from-rs1-(20-oct)jpg.webp",
           alt:"banner",
           link:"https://freekaamaal.com/",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5
         },
         {
           src:"https://images.freekaamaal.com/sticky/wingreenworld-raw-healthy-smoothie-combo-(20-oct)jpg.webp",
           alt:"banner",
           link:"https://freekaamaal.com/",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5
         }, 
         {
           src:"https://images.freekaamaal.com/sticky/india-circus-crafted-coffee-mugs-(18-oct)jpg.webp",
           alt:"banner",
           link:"https://freekaamaal.com/",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5
         }
        ]

const TrendingCoupons = () => {
    const options = {
        perPage: 3,
        gap   : '.9rem',
        drag   : 'free',
        autoScroll: {
          speed: 1,
        },
      };
  return (
    <>

        <Grid container sx={{padding:"13px 3px"}}>
        <Grid item>
            <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
            <img src={hotImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
            </Box>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="h6"> Trending <strong>Coupons</strong></Typography>
        </Grid>
        </Grid>
      <Splide  className='deal_of_the_day' options={ options } >

                    {
                    banner.map((item,i)=>{
                        return(
                           
                                <SplideSlide key={i}>
                                    <Card   sx={{padding:"5px",border:"1px solid #a19b9b",borderRadius:"8px"  }}  >
                                      <a className={livdealStyle.card_link} style={{borderRadius:"0"}} href={item.link} target="_blank">
                                          <CardActionArea>
                                          <img style={{borderRadius:"0"}} src={item.src} alt={item.alt}/>
                                          <CardContent sx={{ padding:"5px 0 0"}}>
                                              <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0 0",fontSize:"12px",textAlign:"justify"}}>{ item.text} </Typography>
                                          </CardContent>
                                          </CardActionArea>
                                      </a>
                                   </Card>
                                </SplideSlide>
                        )
                    })
                }
    </Splide>
               
    </>
  )
}



export default TrendingCoupons

