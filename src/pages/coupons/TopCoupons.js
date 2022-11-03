import React,{useState} from 'react'

import hotDealsStyle from "../../component/HotDeals.module.css"


import couponImage from '../../assets/images/coupon.png'

import { Grid, Box, Typography, CardActionArea, CardContent,Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
        const banner=[
          {
            src:"https://images.freekaamaal.com/featured_images/large_185287_Untitleddesign-2022-10-21T110259.194.png",
            alt:"banner",
            mrp:300,
            text:" Lizards are a widespread group of squamate  ",
            Viewers:5,
            title:"AURIC",
            producId:1
         },
         {
           src:"https://images.freekaamaal.com/featured_images/large_185255_Untitleddesign-2022-10-20T125630.961.png",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:2
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185255_Untitleddesign-2022-10-20T125630.961.png",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:3
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:4
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:5
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:6
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:4
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:5
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:4
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:5
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:4
         },
         {
           src:"https://images.freekaamaal.com/featured_images/185238_1.jpg",
           alt:"banner",
           mrp:300,
           text:" Lizards are a widespread group of squamate  ",
           Viewers:5,
           title:"AURIC",
           producId:5
         }
        ]



const TopCoupons = () => {
   const [countBanner, SetCountBanner]= useState(10)
   const slice = banner.slice(0, countBanner)
   const lodeMore =()=>{
    SetCountBanner(countBanner + 4)
   }
  return (
    <>

                <Grid container sx={{ padding:"13px 3px 2px"}}>
                   <Grid item>
                      <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                        <img src={couponImage} alt="Hot Deal Of the Day"  style={{width:"100%"}}/>
                      </Box>
                   </Grid>
                   <Grid item>
                      <Typography variant="h6" component="h6"> Top <strong>Coupons</strong></Typography>
                   </Grid>
                 </Grid>
      <div  className={hotDealsStyle.flex_div} >
                    {
                    slice.map((item,i)=>{
                        return(
                           
                                <Box sx={{maxWidth:"167px", marginBottom:"10px ", }} component="div" key={i}>
                                    <Card  sx={{padding:"5px",border:"1px solid #a19b9b",borderRadius:"8px"  }} >
                                    <Link style={{borderRadius:"0"}} className={hotDealsStyle.card_link} to={`/deal-details/${item.producId}`} >
                                        <CardActionArea>
                                        <img style={{borderRadius:"0"}} src={item.src} alt={item.alt}/>
                                        <CardContent sx={{padding:"5px 5px 0"}}>
                                            <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0",textAlign:"justify"}}>{ item.text} </Typography>
                                        </CardContent>
                                        </CardActionArea>
                                    </Link>
                                   </Card>
                                </Box>
                        )
                    })
                }
    </div>
    <Box component="div" sx={{ p: 1, textAlign:"center"}}>
      <Button onClick={lodeMore} sx={{color:"#fff", fontWeight:"600"}} variant="contained">Lode More</Button>
    </Box>          
    </>
  )
}

export default TopCoupons
