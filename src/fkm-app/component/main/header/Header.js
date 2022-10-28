import React, { useState } from 'react'

import {Toolbar, AppBar, Box, IconButton, Grid} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import Sidebar from './sidebar/Sidebar';
import { Link } from 'react-router-dom';

import fkmLogo from '../../../assets/images/fkm-logo.png'
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
            <MenuIcon  fontSize="inherit" onClick={toggleClick} />
            </IconButton>
            <Link style={{width:"300px",alignItems:"center",justifyContent:"center",display:"flex"}} to='/'><img style={{width:"100%"}} src={fkmLogo} alt="fkm-Logo"></img></Link>
            <Grid container  justifyContent="flex-end" alignItems="center">
             <Grid item>
             <IconButton  size="large" aria-label="SearchIcon"sx={{color:"#fff"}}>
            <SearchIcon  fontSize="inherit" />
            </IconButton>
             </Grid>
             <Grid item>
             <IconButton  size="large" aria-label="PersonOutlineIcon">
             <Link  style={{color:"#fff", display:"flex", alignItems:"center",justifyContent:"center"}} to='/login'><PersonOutlineIcon  fontSize="inherit" /></Link> 
            </IconButton>
             </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
       <Sidebar togalButton={sidebarToggle} />
    </Box>
  )
}

export default Header
