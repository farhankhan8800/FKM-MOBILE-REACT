import React from 'react'

import {Box, Typography,Grid} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

import CashBackClaimCard from '../../../component/CashBackClaimCard';

import stoerImage from "../../../assets/images/fkm_cover.png"
import SimilarMoreProducts from '../../../component/SimilarMoreProducts';


const FeaturedStoreCard = () => {
  return (
    <div style={{paddingTop:"56px"}}>
     <Box component="div"sx={{bgcolor:"#f1f1f1",padding:"80px 20px 20px"}}>
      <Box component="div" sx={{borderRadius:"10px",width:"100%",p:3,bgcolor:"#fff",position:"relative",alignItems:"center",justifyContent:"center",display:"flex",boxShadow: "1px 2px 29px -19px #000"}}>
        <Box component="div" sx={{width:"150px",bgcolor:"#fff",position:"absolute",top:"-42px",padding:"16px",borderRadius:"8px",boxShadow:"1px 1px 22px 18px #f1f1f1"}}>
            <img src={stoerImage} alt="store image"></img>
           
        </Box>
        <Box component="div" sx={{}}>
          <Box component="div">
            <Typography variant="p" display="flex" alignItems="center" justifyContent="center" component="p"><strong>&#8377; 500 </strong> <big style={{padding:"10px",fontWeight:"400"}}>Cashback</big> <InfoIcon  fontSize="small" sx={{color:"#000"}} /> </Typography>
            <Box component="div" display="flex" alignItems="center" justifyContent="center">
              <StarIcon fontSize="small"/>
              <StarIcon fontSize="small"/>
              <StarIcon fontSize="small"/>
              <StarHalfIcon fontSize="small"/> 
              <StarOutlineIcon fontSize="small"/>
            </Box>
          </Box>
          <Box component="div" >
            <Grid container justifyContent="space-around" spacing={1} sx={{padding:"10px 0"}}>
              <Grid item>
                <Typography sx={{color:"#ad2323"}}  variant="p"  component="p"><small>Confirmation Time</small></Typography>
                <Typography variant="p"sx={{textAlign:"center"}}  component="p"><small>90 Days</small></Typography>
              </Grid>
              <Grid item>
                <Typography variant="p" sx={{color:"#ad2323"}} component="p"><small>Tracking Speed</small></Typography>
                <Typography variant="p"sx={{textAlign:"center"}}  component="p"><small>1-3 Days</small></Typography>
              </Grid>
              <Grid item>
                <Typography variant="p" sx={{color:"#ad2323"}} component="p"><small>Missing Order</small></Typography>
                <Typography variant="p" sx={{textAlign:"center"}} component="p"><small>Accepted</small></Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
        <CashBackClaimCard />
     </Box>
    <SimilarMoreProducts />
  </div>
  )
}

export default FeaturedStoreCard
