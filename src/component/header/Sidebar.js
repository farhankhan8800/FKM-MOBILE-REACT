import React from 'react'

import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import { Box,Grid, Divider,Typography,Avatar,Button,ListItemButton,ListItemIcon,ListItemText,List} from '@mui/material'

import dashboardIcon from "../../assets/images/icon/dashboard.png"
import shopIcon from "../../assets/images/icon/shop.png"
import categoryIcon from "../../assets/images/icon/category.png"
import promoCodeIcon from "../../assets/images/icon/promo-code.png"
import confettiIcon from "../../assets/images/icon/confetti.png"
import cashbackIcon from "../../assets/images/icon/cashback.png"
import contentWritingIcon from "../../assets/images/icon/content-writing.png"
import briefcaseIcon from "../../assets/images/icon/briefcase.png"
import phoneCallIcon from "../../assets/images/icon/phone-call.png"
import questionIcon from "../../assets/images/icon/question.png"
import powerOffIcon from "../../assets/images/icon/power-off.png"

export const menuList = [
  {
      link:"/",
      menuName:"Dashboard",
      menuIcon: dashboardIcon
  },
  {
      link:"/all-store",
      menuName:"Store",
      menuIcon: shopIcon
  },
  {
      link:"/category",
      menuName:"Category",
      menuIcon: categoryIcon
  },
  {
      link:"/coupons",
      menuName:"Coupons",
      menuIcon:promoCodeIcon
  },
  {
      link:"/",
      menuName:"Festival",
      menuIcon: confettiIcon
  },
  {
      link:"/",
      menuName:"100% Cashback",
      menuIcon: cashbackIcon
  },
  {
      link:"/",
      menuName:"Hindi Artical",
      menuIcon: contentWritingIcon
  },
  {
      link:"/",
      menuName:"Carrer",
      menuIcon: briefcaseIcon
  },
  {
      link:"/",
      menuName:"Contact Us",
      menuIcon: phoneCallIcon
  },
  {
      link:"/",
      menuName:"Help & Support",
      menuIcon: questionIcon
  },
  {
      link:"/",
      menuName:"Logout",
      menuIcon: powerOffIcon
  }

]



const Sidebar = ({togalButton,closeSidebar}) => {

 const sidebarClose=()=>{
    setTimeout(()=>{
        closeSidebar()
    },200)
    
    }


  return (
    <Box >
    { togalButton? <Box  onClick={sidebarClose}  component="div" style={{width:"100%", backgroundColor:"transparent", top:"55px", position:"fixed", zIndex:"9981",left:"-2px",overflow:"auto" }}>
                   
                    <Box component="div"style={{width:"80%",minWidth:"250px",maxWidth:"450px", backgroundColor:"#fff",padding:"20px 10px",minHeight:"94vh",boxShadow:"0px 0px 28px -3px"}}>
                    <Box component="div" style={{backgroundColor:"#f5f3f3",padding:"10px 20px",borderRadius:"10px"}}>
                        <Grid container justifyContent="space-between" alignItems="center">
                         <Grid item> 
                         <Avatar alt="Freekaamaal" src="/static/images/avatar/1.jpg" />
                         </Grid>
                         <Grid item>
                            <Typography variant="p" component="p" >Hello </Typography>
                            <Typography variant="h6" component="h6" sx={{fontWeight:"600"}}>  Freekaamaal</Typography>
                         </Grid>
                         <Grid item>
                            <Button variant="contained" sx={{color:"#fff",borderRadius:"30px"}}  size='small'>Edit</Button>
                         </Grid>
                        </Grid>  
                    </Box>
                    <Box component="div">
                    <List component="nav" aria-label="main mailbox folders" sx={{ width: '100%',}} >
                        {
                          menuList.map((item,i)=>
                          <div key={i+1}>
                          <Link to={item.link}>
                            <ListItemButton  onClick={sidebarClose}  >
                                    <ListItemIcon>
                                    <img style={{width:"17px"}} src={item.menuIcon} alt="menuIcon"></img>   
                                    </ListItemIcon>
                                    <ListItemText sx={{color:"#000"}} primary={item.menuName} />
                            </ListItemButton>
                          </Link>
                          <Divider sx={{opacity:"0.4"}} />
                          </div>
                          )  
                        }    
                    </List>
                    </Box>
                   </Box>
               </Box>:"" 
    }
    </Box>
    
  )
}

export default Sidebar
