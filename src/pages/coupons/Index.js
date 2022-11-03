
import React from 'react'
import FeaturedStore from './FeaturedStore'
import TrendingCoupons from './TrendingCoupons'
import TopCoupons from './TopCoupons'

const Coupons = () => {
  return (
    <div style={{paddingTop:"56px"}}>
     <FeaturedStore />
     <TrendingCoupons />
     <TopCoupons />
    </div>
  )
}

export default Coupons
