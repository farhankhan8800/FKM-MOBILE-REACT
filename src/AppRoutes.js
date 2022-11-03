import React from 'react'

import { Routes, Route } from 'react-router-dom';

import Login  from './pages/userAuth/Login/Index';
import SignUp from './pages/userAuth/SignUp/Index';
import ForgotPassword from "./pages/userAuth/ForgotPassword/Index"
import EnterOtp from './pages/userAuth/EnterOtp/Index';
import ResetPassword from './pages/userAuth/ResetPassword/Index';
import DealDetails from './pages/Deals/DealDetail';
import Error from './pages/ErrorPage/Index';
import AllHotDeals from './pages/Deals/Index';
import Coupons from "./pages/coupons/Index";
import FeaturedStoreCard from './pages/coupons/featuredStoreCard/FeaturedStoreCard';
import Home from "./pages/Home/Index"
import CouponsCode from './component/CouponsCode';
import CashbackActivated from './component/CashbackActivated';
import Category from './pages/Category/Index';

const AppRoutes = () => {
  return (
    <div>
      <Routes>
      <Route index path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/enter-otp' element={<EnterOtp />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path= "/deal-details/:producId" element={<DealDetails />} />
      <Route path= "/all-hot-deals" element={<AllHotDeals />} />
      <Route path= "/coupons" element={<Coupons />} />
      <Route path= "/featured-store/:storeId" element={<FeaturedStoreCard />} />
      <Route path= "/coupon-code/:codeId" element={<CouponsCode />} />
      <Route path= "/cashback-activated/:codeId" element={<CashbackActivated />} />
      <Route path= "/category" element={<Category />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </div>
  )
}

export default AppRoutes
