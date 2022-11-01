import React from 'react'
import './style.css'

import Deals from '../Deals/ProductDetail'
import SimilarMoreProducts from '../../component/Deals/SimilarMoreProducts'



const DealDetails = () => {
  return (
    <>
      <div style={{paddingTop:"56px"}} classname="hot-deal-con" id="deals">
        <Deals />
        <SimilarMoreProducts />
      </div>
    </>
    
  )
}

export default DealDetails
