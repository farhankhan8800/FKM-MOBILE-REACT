import React from 'react'
import { useSearchParams } from 'react-router-dom';


import Deals from './ProductDetail'
import SimilarMoreProducts from '../../component/SimilarMoreProducts'
const DealDetails = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('utm_source')); // ▶ URLSearchParams {}
  console.log(searchParams.get('name')); // ▶ URLSearchParams {}

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
