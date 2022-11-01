import React from 'react'


import Deals from './ProductDetail'
import SimilarMoreProducts from '../../component/SimilarMoreProducts'
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
