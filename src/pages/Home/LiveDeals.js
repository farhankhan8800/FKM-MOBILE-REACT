import React from 'react'

import livdealStyle from "./LiveDeals.module.css"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


import liveDealsImage from '../../assets/images/live-streaming.png'
import { Grid, Box, Typography, CardActionArea, CardContent,Card } from '@mui/material';
    
import {liveDeals} from "../../LodingData/lodingData"

const LiveDeals = () => {
    const options = {
        perPage: 2,
        gap   : '.9rem',
        drag   : 'free',
        perPage: 2,
        autoScroll: {
          speed: 1,
        },
      };
  return (
    <>

        <Grid container sx={{padding:"13px 3px 3px"}}>
        <Grid item>
            <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
            <img src={liveDealsImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
            </Box>
        </Grid>
        <Grid item>
            <Typography variant="h6" component="h6"> Live <strong>Deals</strong></Typography>
        </Grid>
        </Grid>
      <Splide  className='deal_of_the_day' options={ options } >

                    {
                    liveDeals.map((item,i)=>{
                        return(
                           
                                <SplideSlide key={i}>
                                    <Card   sx={{  }}  >
                                    <a className={livdealStyle.card_link} href={item.link} target="_blank">
                                        <div className={livdealStyle.view_count}><p>{item.Viewers} viewers</p></div>
                                        <CardActionArea>
                                        <img src={item.src} alt={item.alt}/>
                                        <CardContent sx={{background:"#f1f1f1", padding:"7px"}}>
                                            <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0"}}>{ item.text} </Typography>
                                            <Box component="div" sx={{paddingTop:"4px"}}>
                                                <strong className={livdealStyle.card_amouunt}>&#8377;{item.mrp}</strong>
                                                <small className={livdealStyle.card_small_amouunt}>&#8377;{item.mrp}</small>
                                            </Box>
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

export default LiveDeals
