
import React from 'react'
import cardImg from "../../assets/images/taddy-bear.png"

import { Grid,Box, Typography} from '@mui/material'
import DealsAndCoupons from '../coupons/featuredStoreCard/DealsAndCoupons'


const CategoryDetail = () => {
  return (
    <>
     <div style={{paddingTop:"56px"}}>
        <Box component="div" sx={{paddingTop:"80px",bgcolor:"#F7F7F7"}}>
            <Box component="div" sx={{width:"100%",padding:"10px 20px",bgcolor:"#fff",position:"relative"}}>
                <Box component="div" sx={{p:2,bgcolor:"#fff",borderRadius:"100px",position:"absolute",left:"50%",width:"100px",transform:"translate(-50%,0)",top:"-60px",height:"100px",boxShadow:"0px 1px 14px -9px #dbcccc"}}>
                  <img src={cardImg} alt="taddy bear"></img>
                </Box>
                <Box component="div" sx={{paddingTop:"50px"}}>
                <Typography component="p" fontWeight="600" fontSize="14px" color="#000" padding="5px" textAlign="center" >Baby,Kids and Toy</Typography>
                <Typography component="p" color="#000" fontSize="12px"  textAlign="center" > and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</Typography>
                </Box>
            </Box>
            <DealsAndCoupons />
          </Box>
     </div> 
    </>
  )
}

export default CategoryDetail

