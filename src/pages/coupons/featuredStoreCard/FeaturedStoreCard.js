import React from 'react'

import {Box, Typography,Grid, Button} from '@mui/material';
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
      <Box component="div" sx={{margin:"22px 0",padding:"20px 9px",background:"#fff",borderRadius:"5px"}}> 
        <Typography component="p">Cashback <strong>Rates</strong> </Typography>
       <Box component="div" sx={{display:"flex",}} >
        <Box component="div" sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",borderTopLeftRadius: "7px",borderBottomLeftRadius: "7px",margin:" 10px 0",padding:"10px",color:"#fff",backgroundColor:"#f27935",flexBasis:"30%"}}>
          <strong>&#8377; 500</strong>
          <Typography component="small" varient="small">Cashback</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:'column' ,alignItems:"center",justifyContent:"flex-start",borderTopRightRadius: "7px",borderBottomRightRadius: "7px",margin:" 10px 0",padding:"10px",flexBasis:"70%",border:"2px  dashed #f27935",borderLeft:"none"}}>
            <strong>valid stawid</strong>
          <Typography component="small" fontSize="12px"  varient="small">Shop any thins wort 699 in just 199 [enculiding shiping]</Typography>
        </Box>
       </Box>
       <Box component="div" sx={{display:"flex",marginBottom:"15px"}} >
        <Box component="div" sx={{display:"flex",flexDirection:"column", alignItems:"center",justifyContent:"center",borderTopLeftRadius: "7px",borderBottomLeftRadius: "7px",margin:" 10px 0",padding:"10px",color:"#fff",backgroundColor:"#f27935",flexBasis:"30%"}}>
          <strong>&#8377; 500</strong>
          <Typography component="small"  varient="small">Cashback</Typography>
        </Box>
        <Box component="div" sx={{display:"flex",flexDirection:'column' ,alignItems:"center",justifyContent:"flex-start",borderTopRightRadius: "7px",borderBottomRightRadius: "7px",margin:" 10px 0",padding:"10px",flexBasis:"70%",border:"2px  dashed #f27935",borderLeft:"none"}}>
            <strong>valid stawid</strong>
          <Typography component="small" fontSize="12px" varient="small">Shop any thins wort 699 in just 199 [enculiding shiping]</Typography>
        </Box>
       </Box>
       <Button variant="outlined" sx={{width:"100%"}}>Show more</Button>
      </Box>
        <CashBackClaimCard />
     </Box>
    <SimilarMoreProducts />
  </div>
  )
}

export default FeaturedStoreCard
