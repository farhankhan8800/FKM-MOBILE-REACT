import React from 'react'
import {Box, Button,Divider, TextField,Typography} from '@mui/material'

import couponCard from "../assets/images/fkm_cover.png"
import { Link } from 'react-router-dom'

const cardCupon = {
  position: "absolute",
  top: "-64px",
  padding: "15px",
  background:" #fff",
  boxShadow:" 0px 1px 22px -6px #ada4a4",
  width: "210px",
  left: "50%",
  transform: "translate(-50%,0%)",
  borderRadius: "7px",
}

const copyCode = ()=>{
 const copyValue = document.getElementById("couponCode")
 copyValue.select();
 navigator.clipboard.writeText(copyValue.value);
 document.getElementById("copyButton").innerHTML = 'copied';
}


const CouponsCode = () => {

  return (
    <>
      <div style={{paddingTop:"56px"}}>
        <Box component='div' sx={{p:4,paddingTop:"100px"}}>
          <Box component='div' sx={{padding:"50px 15px 20px",position:"relative",textAlign:"center",border:"2px solid #e7dede",borderRadius:'10px'}}>
            <Box component="div" style={cardCupon} sx={{position:"absolute"}}>
              <img src={couponCard} alt=""></img>
            </Box>
            <Box>
            <Typography component="p" sx={{fontWeight:"600",fontSize:"14px"}}>
             Flat Rs.300 Off on Order Of Rs.979 Or More ( Mandatory to Use ) + Earn Extra &#8377; 450.00 Cash back.
           </Typography>
           <Typography component="p" sx={{marginTop:"20px",fontSize:"14px"}}>
             Through This coupon, you will get Rs.300 Off on min Order value must be Rs.987 or more valid  for all Users
           </Typography>
           
            </Box>
            <Box component="div" margin="10px 0" position="relative" >
            <input id="couponCode"  style={{width:"100%",padding:"10px", color:"red",border:"2px solid #f27935",borderRadius:'5px'}} readOnly value="FKM57635"  variant="outlined" />
            <Button onClick={copyCode} id="copyButton" sx={{color:"#fff",position:"absolute",padding:"6px 40px",top:"1px", right:"0", borderRadius:"none"}} variant="contained">Copy</Button>
            </Box>
            <Box display="flex" justifyContent="space-around" padding="5px 0" >
             <Button ><Link to={`/cashback-activated/${1}`} style={{color:"green"}}>Earn Cashback</Link > </Button>
             <Divider orientation="vertical" flexItem />
             <Button ><Link to="/" style={{color:"gray"}}>Skip Cashback</Link> </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default CouponsCode
