import { Grid,Box, Typography } from '@mui/material'

import React from 'react'
import storeimage from "../../assets/images/storeimage.png"

const Index = () => {
    return (
        <>
         <div style={{paddingTop:"56px"}}>
         <Box component="div" sx={{p:2}}>
          <Grid container spacing={2}> 
            <Grid item xs={6}>
            <Box component="div" sx={{position:"relative",border:"2px solid #e9e9e9",borderRadius:"7px",p:2}}>
                <img src={storeimage} width='100px' height='100px' alt="store image"></img>
                <Typography component="p" fontWeight="bold" paddingBottom="10px" textAlign="center" >Fresh To Home</Typography>
                 <Box component="div" sx={{position:"absolute",bgcolor:"#f27935",padding:"6px 14px",left:"50%",transform:"translate(-50%,0)",bottom:"-19px",borderRadius:"7px",minWidth:"154px"}}>
                        <Typography color="#fff">&#8377; 120 Cashback</Typography>
                 </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
            <Box component="div" sx={{position:"relative",border:"2px solid #e9e9e9",borderRadius:"7px",p:2}}>
                <img src={storeimage} width='100px' height='100px' alt="store image"></img>
                <Typography component="p" paddingBottom="10px" textAlign="center" >Fresh To Home</Typography>
                 <Box component="div" sx={{position:"absolute",bgcolor:"#f27935",padding:"6px 14px",left:"50%",transform:"translate(-50%,0)",bottom:"-19px",borderRadius:"7px",minWidth:"154px"}}>
                        <Typography color="#fff">&#8377; 120 Cashback</Typography>
                 </Box>
              </Box>
            </Grid>
          </Grid>
         </Box>
         </div> 
        </>
      )
}

export default Index
