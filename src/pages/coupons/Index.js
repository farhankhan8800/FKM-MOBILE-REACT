
import React from 'react'

import { Typography,Box,Divider } from '@mui/material'

import FeaturedStore from './FeaturedStore'
import TrendingCoupons from './TrendingCoupons'
import TopCoupons from './TopCoupons'

const Coupons = () => {
  return (
    <div style={{paddingTop:"56px"}}>
      {/* <Box component="div" sx={{p:1}} >
        <Typography paddingBottom={1}  variant="h5" component="h5">Coupons</Typography>
        <Divider />
      </Box> */}
     <FeaturedStore />
     <TrendingCoupons />
     <TopCoupons />
    </div>
  )
}

export default Coupons
