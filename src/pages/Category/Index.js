
import React from 'react'
import cardImg from "../../assets/images/taddy-bear.png"

import { Grid,Box, Typography, Button} from '@mui/material'
import { textAlign } from '@mui/system'

const Category = () => {
  return (
    <>
     <div style={{paddingTop:"56px"}}>
        <Box component="div" sx={{p:1}}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box component="div" sx={{border:"1px solid #fff0f0",borderRadius:"10px", width:"100%",padding:"10px 20px",bgcolor:"#F7F7F7"}}>
                <Box component="div" sx={{padding:"5px",bgcolor:"#fff",borderRadius:"7px"}}>
                  <img src={cardImg} alt="taddy bear"></img>
                </Box>
                <Box>
                <Typography component="p" fontWeight="600" fontSize="14px" color="#000" padding="5px" textAlign="center" >Baby,Kids and Toy</Typography>
                <Typography component="p" fontSize="12px"  textAlign="center" ><span>Deals </span><strong> 100</strong> <span> Coupons </span><strong> 100</strong></Typography>
                </Box>
                <Box sx={{textAlign:"center", p:1}}>
                <Button variant="outlined">View Deals</Button>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box component="div" sx={{border:"1px solid #fff0f0",borderRadius:"10px", width:"100%",padding:"10px 20px",bgcolor:"#F7F7F7"}}>
                <Box component="div" sx={{padding:"5px",bgcolor:"#fff",borderRadius:"7px"}}>
                  <img src={cardImg} alt="taddy bear"></img>
                </Box>
                <Box>
                <Typography component="p" fontWeight="600" fontSize="14px" color="#000" padding="5px" textAlign="center" >Baby,Kids and Toy</Typography>
                <Typography component="p" fontSize="12px"  textAlign="center" ><span>Deals </span><strong> 100</strong> <span> Coupons </span><strong> 100</strong></Typography>
                </Box>
                <Box sx={{textAlign:"center", p:1}}>
                <Button variant="outlined">View Deals</Button>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box component="div" sx={{border:"1px solid #fff0f0",borderRadius:"10px", width:"100%",padding:"10px 20px",bgcolor:"#F7F7F7"}}>
                <Box component="div" sx={{padding:"5px",bgcolor:"#fff",borderRadius:"7px"}}>
                  <img src={cardImg} alt="taddy bear"></img>
                </Box>
                <Box>
                <Typography component="p" fontWeight="600" fontSize="14px" color="#000" padding="5px" textAlign="center" >Baby,Kids and Toy</Typography>
                <Typography component="p" fontSize="12px"  textAlign="center" ><span>Deals </span><strong> 100</strong> <span> Coupons </span><strong> 100</strong></Typography>
                </Box>
                <Box sx={{textAlign:"center", p:1}}>
                <Button variant="outlined">View Deals</Button>
                </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box component="div" sx={{border:"1px solid #fff0f0",borderRadius:"10px", width:"100%",padding:"10px 20px",bgcolor:"#F7F7F7"}}>
                <Box component="div" sx={{padding:"5px",bgcolor:"#fff",borderRadius:"7px"}}>
                  <img src={cardImg} alt="taddy bear"></img>
                </Box>
                <Box>
                <Typography component="p" fontWeight="600" fontSize="14px" color="#000" padding="5px" textAlign="center" >Baby,Kids and Toy</Typography>
                <Typography component="p" fontSize="12px"  textAlign="center" ><span>Deals </span><strong> 100</strong> <span> Coupons </span><strong> 100</strong></Typography>
                </Box>
                <Box sx={{textAlign:"center", p:1}}>
                <Button variant="outlined">View Deals</Button>
                </Box>
            </Box>
          </Grid>
         </Grid>
        </Box>
     </div>
    </>
  )
}

export default Category
