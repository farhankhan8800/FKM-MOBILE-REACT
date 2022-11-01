import React,{useState} from 'react'

import hotDealsStyle from "./HotDeals.module.css"


import hotDealsImage from '../assets/images/fire.png'

import { Grid, Box, Typography, CardActionArea, CardContent,Card, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {hotDeals} from "../LodingData/lodingData"    


const HotDeals = () => {
   const [countBanner, SetCountBanner]= useState(8)
   const slice = hotDeals.slice(0, countBanner)
   const lodeMore =()=>{
    SetCountBanner(countBanner + 2)
   }
  return (
    <>

        <Grid container textAlign="center" justifyContent="space-between" sx={{padding:"13px 3px 3px"}}>
          <Grid item >
            <Grid container> 
            <Grid item>
                <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                  <img src={hotDealsImage} alt="Hot Deal Of the Day"  style={{width:"100%",}}/>
                </Box>
            </Grid>
            <Grid item>
                <Typography variant="h6" component="h6"> Hot <strong>Deals</strong></Typography>
            </Grid>
            </Grid>
              
          </Grid>
          <Grid item>
            <Button><Link to='/all-hot-deals'>View All</Link></Button>
          </Grid>
        
        </Grid>
      <div  className={hotDealsStyle.flex_div} >
                    {
                    slice.map((item,i)=>{
                        return(
                           
                                <Box sx={{maxWidth:"167px", marginBottom:"10px ", }} component="div" key={i}>
                                    <Card  sx={{background:"#f1f1f1", border:"1px solid #dfdbdb"}} >
                                    <Link className={hotDealsStyle.card_link} to={`/deal-details/${item.producId}`} >
                                        <CardActionArea>
                                          <Box component='div' sx={{padding:"15px 21px 0px"}}>
                                          <img src={item.src} alt={item.alt} style={{borderRadius:"7px", height:"92px", width:"120px"}}/>
                                          </Box>
                                        <CardContent sx={{background:"#f1f1f1", padding:"7px"}}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:"#000",marginBottom:"0" }}>{ item.title} </Typography>
                                            <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0"}}>{ item.text} </Typography>
                                            <Box component="div" sx={{paddingTop:"4px"}}>
                                                <strong className={hotDealsStyle.card_amouunt}>&#8377;{item.mrp}</strong>
                                                <small className={hotDealsStyle.card_small_amouunt}>&#8377;{item.mrp}</small>
                                            </Box>
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
      <Button  onClick={lodeMore} sx={{color:"#fff", fontWeight:"600"}} variant="contained">Lode More</Button>
    </Box>          
    </>
  )
}

export default HotDeals
