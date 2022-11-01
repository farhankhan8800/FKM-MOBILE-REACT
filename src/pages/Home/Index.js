
import React from 'react'

// import homeStyle from "./Index.module.css"
import Carousel from './Carousel'
import DealOfTheDay from './DealOfTheDay'
import LiveDeals from './LiveDeals'
import CashBackStore from './CashBackStore'
import HowToEarnCashback from "../../component/HowToEarnCashback"
import HotDeals from '../../component/HotDeals'

const Home = () => {
  return (
    <div>
     <Carousel />
     <DealOfTheDay />
     <LiveDeals /> 
     <HotDeals />
     <CashBackStore />
     <HowToEarnCashback />
    </div>


  )
}

export default Home
