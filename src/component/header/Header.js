import React, { useState } from 'react'

import {Toolbar, AppBar, Box, IconButton, Grid} from '@mui/material';
import menuButton from "../../assets/images/icon/menu-button.png"
import searchButton from '../../assets/images/icon/search.png'
import accountButton from '../../assets/images/icon/account.png'

import Sidebar from './Sidebar'
import { Link } from 'react-router-dom';

import fkmLogo from '../../assets/images/fkm-logo/fkm-logo.png'
const Header = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

 

 const toggleClick = ()=>{
  setSidebarToggle(!sidebarToggle)
   }
  return (
    <Box sx={{  position:"relative"}} >
      <AppBar  sx={{ flexGrow: 1,maxWidth:"600px", position:"fixed",width:"100%", zIndex:"9999",margin:"auto",left:"0" }} >
        <Toolbar sx={{alignItems:"center",justifyContent:"space-between",p:0 }}>
            <IconButton  size="large" aria-label="MenuIcon"sx={{color:"#fff"}}>
            <img  src={menuButton} onClick={toggleClick} alt="menuButton" />
            </IconButton>
            <Link style={{width:"300px",alignItems:"center",justifyContent:"center",display:"flex"}} to='/'><img style={{width:"100%"}} src={fkmLogo} alt="fkm-Logo"></img></Link>
            <Grid container  justifyContent="flex-end" alignItems="center">
             <Grid item>
             <IconButton  size="large" aria-label="SearchIcon"sx={{color:"#fff"}}>
               <img src={searchButton} alt="search button" />
            </IconButton>
             </Grid>
             <Grid item>
             <IconButton  size="large" aria-label="PersonOutlineIcon">
             <Link  style={{color:"#fff", display:"flex", alignItems:"center",justifyContent:"center"}} to='/login'><img src={accountButton} alt="account Button"  /></Link> 
            </IconButton>
             </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
       <Sidebar closeSidebar={toggleClick} togalButton={sidebarToggle} />
    </Box>
  )
}

export default Header
