import React from 'react'

import { motion } from "framer-motion"

import { Box,Grid, Divider,Typography,Avatar,Button,ListItemButton,ListItemIcon,ListItemText,List} from '@mui/material'
import InboxIcon from '@mui/icons-material/Inbox';
import StoreIcon from '@mui/icons-material/Store';
import LogoutIcon from '@mui/icons-material/Logout';
import CallIcon from '@mui/icons-material/Call';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiscountIcon from '@mui/icons-material/Discount';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = ({togalButton}) => {



  return (
    <Box>
    { togalButton? <Box component="div" style={{width:"80%", minWidth:"250px", backgroundColor:"#fff",minHeight:"94vh", top:"55px", position:"fixed", zIndex:"9981",left:"-2px",overflow:"auto" }}>
                    <Box component="div"style={{width:"100%",padding:"20px 10px"}}>
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
                            <ListItemButton  >
                                <ListItemIcon>
                                <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                            <Divider />
                            <ListItemButton  >
                                <ListItemIcon>
                                <StoreIcon />
                                </ListItemIcon>
                                <ListItemText primary="Store" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Category" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <DiscountIcon />
                                </ListItemIcon>
                                <ListItemText primary="Coupons" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <BrunchDiningIcon />
                                </ListItemIcon>
                                <ListItemText primary="Fastivals" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <AccountBalanceWalletIcon />
                                </ListItemIcon>
                                <ListItemText primary="100% Cashback" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <DescriptionIcon />
                                </ListItemIcon>
                                <ListItemText primary="Hindi Artical" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <BusinessCenterIcon />
                                </ListItemIcon>
                                <ListItemText primary="Career" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <CallIcon />
                                </ListItemIcon>
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <SupervisedUserCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="Help & Support" />
                            </ListItemButton>
                            <Divider sx={{opacity:"0.3"}} />
                            <ListItemButton  >
                                <ListItemIcon>
                                <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                            
                    </List>
                    </Box>
                   </Box>
               </Box>:"" 
    }
    </Box>
    
  )
}

export default Sidebar
