import React,{useState} from 'react'
import similarMoreProductsStyle from '../../../component//similarMoreProduct.module.css'

import { Grid, Box,Card,CardActionArea, Typography,Button} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { Link } from 'react-router-dom';


import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
font-family: IBM Plex Sans, sans-serif;
color: #fff;
cursor: pointer;
font-size: 0.875rem;
font-weight: 600;
background-color: transparent;
min-width:130px ;
padding: 16px 39px;
margin: 2px 2px;
border: none;
border-radius: 7px;
display: flex;
justify-content: center;


&.${tabUnstyledClasses.selected} {
  background-color: #fff;
  color:#f27935;
}
`;

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    background-color: #f27935;
    display: flex;
    border-radius: 7px;
    align-items: center;
    justify-content: space-around;
    align-content: center;
  
    `,
  );
const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? " #f27935" : '#fff'};
    border-radius: 0px;
    `,
  );

const DealsAndCoupons = () => {
  const [store, setStore] = useState([]);

  
  React.useEffect(() => {
    fetch('http://localhost:3004/cashBackStore')
      .then(results => results.json())
      .then(data => {
        // console.log(data)
        setStore(data)
      });
  }, [])

  return (
   
    <>
        <Box sx={{ width: '100%',padding:"10px 17px" }}>
        <TabsUnstyled defaultValue={0}>
            <TabsList className={similarMoreProductsStyle.tabsList} sx={{bgcolor:"#f27935"}} >
                <Tab>Deals (15)</Tab>
                <Tab>Coupons (10)</Tab>
            </TabsList>
            <TabPanel value={0}>
                    <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                      {
                        store.map((item,i)=>{
                        return(
                          <Grid key={i} item sx={{}}>
                          <Card  sx={{ maxWidth:"150px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,bgcolor:"#f1f1f1"}}>
                          <a className={similarMoreProductsStyle.cash_back_store_link} href={item.link}>
                          <CardActionArea>
                          <img src={item.imgSrc} alt="store"  width="100%"/>
                          <p className={similarMoreProductsStyle.cash_back_store_offer} >{item.storeName}</p>
                          </CardActionArea>
                          </a>
                          </Card>
                          </Grid>
                        )
                      })
                      }
                    
                    </Grid>
            </TabPanel>
            <TabPanel value={1}>
                  <Box component="div" >
                     <Box component="div"  sx={{padding:"15px 0px 0", border:"1px solid #e1dada",overflow:"hidden", borderRadius:"10px",marginBottom:"20px"}}>
                      <Box sx={{padding:"0 15px"}}>
                                <Typography color="black" component="p" fontWeight="bold">Get 10% off upto Rs 200/- on Home and Kitchan Application</Typography>
                                 <Grid sx={{padding:"10px 0"}} container justifyContent="space-between" alignItem="center">
                                <Grid item>
                                    <Button  variant="outlined"><Link to={`/coupon-code/${1}`} style={{color:"#f27935"}}>Get Code</Link></Button>
                                </Grid>
                                <Grid item>
                                    <Typography justifyContent="center" color="gray" alignItems="center"  component="small"><AccessTimeFilledIcon fontSize='10px' /> <small>End in 20 Days</small> </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                       <Box component="div" sx={{padding:"1px 10px",background:"#f5f1f1"}}>
                         <Grid container justifyContent="space-around" alignItem="center">
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <RemoveRedEyeIcon fontSize='18px' sx={{marginRight:"7px"}}/>  2k views
                              </Button>
                            </Grid>
                             <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <FavoriteIcon fontSize='18px' sx={{marginRight:"7px"}} /> 10 Likes
                              </Button>
                            </Grid>
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}> 
                              <ShareIcon fontSize='18px' sx={{marginRight:"7px"}}  /> Share
                              </Button>
                            </Grid>
                        </Grid>
                       </Box>
                     </Box>
                     <Box component="div"  sx={{padding:"15px 0px 0", border:"1px solid #e1dada",overflow:"hidden", borderRadius:"10px",marginBottom:"20px"}}>
                      <Box sx={{padding:"0 15px"}}>
                                <Typography color="black" component="p" fontWeight="bold">Get 10% off upto Rs 200/- on Home and Kitchan Application</Typography>
                                 <Grid sx={{padding:"10px 0"}} container justifyContent="space-between" alignItem="center">
                                <Grid item>
                                    <Button  variant="outlined"><Link to={`/coupon-code/${1}`} style={{color:"#f27935"}}>Get Code</Link></Button>
                                </Grid>
                                <Grid item>
                                    <Typography justifyContent="center" color="gray" alignItems="center"  component="small"><AccessTimeFilledIcon fontSize='10px' /> <small>End in 20 Days</small> </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                      
                       <Box component="div" sx={{padding:"1px 10px",background:"#f5f1f1"}}>
                         <Grid container justifyContent="space-around" alignItem="center">
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <RemoveRedEyeIcon fontSize='18px' sx={{marginRight:"7px"}}/>  2k views
                              </Button>
                            </Grid>
                             <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <FavoriteIcon fontSize='18px' sx={{marginRight:"7px"}} /> 10 Likes
                              </Button>
                               
                            </Grid>
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}> 
                              <ShareIcon fontSize='18px' sx={{marginRight:"7px"}}  /> Share
                              </Button>
                               
                            </Grid>
                        </Grid>
                       </Box>
                     </Box> 
                      <Box component="div"  sx={{padding:"15px 0px 0", border:"1px solid #e1dada",overflow:"hidden", borderRadius:"10px",marginBottom:"20px"}}>
                      <Box sx={{padding:"0 15px"}}>
                                <Typography color="black" component="p" fontWeight="bold">Get 10% off upto Rs 200/- on Home and Kitchan Application</Typography>
                                 <Grid sx={{padding:"10px 0"}} container justifyContent="space-between" alignItem="center">
                                <Grid item>
                                    <Button  variant="outlined"><Link to={`/coupon-code/${1}`} style={{color:"#f27935"}}>Get Code</Link></Button>
                                </Grid>
                                <Grid item>
                                    <Typography justifyContent="center" color="gray" alignItems="center"  component="small"><AccessTimeFilledIcon fontSize='10px' /> <small>End in 20 Days</small> </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                      
                       <Box component="div" sx={{padding:"1px 10px",background:"#f5f1f1"}}>
                         <Grid container justifyContent="space-around" alignItem="center">
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <RemoveRedEyeIcon fontSize='18px' sx={{marginRight:"7px"}}/>  2k views
                              </Button>
                            </Grid>
                             <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <FavoriteIcon fontSize='18px' sx={{marginRight:"7px"}} /> 10 Likes
                              </Button>
                               
                            </Grid>
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}> 
                              <ShareIcon fontSize='18px' sx={{marginRight:"7px"}}  /> Share
                              </Button>
                               
                            </Grid>
                        </Grid>
                       </Box>
                     </Box>  
                     <Box component="div"  sx={{padding:"15px 0px 0", border:"1px solid #e1dada",overflow:"hidden", borderRadius:"10px",marginBottom:"20px"}}>
                      <Box sx={{padding:"0 15px"}}>
                                <Typography color="black" component="p" fontWeight="bold">Get 10% off upto Rs 200/- on Home and Kitchan Application</Typography>
                                 <Grid sx={{padding:"10px 0"}} container justifyContent="space-between" alignItem="center">
                                <Grid item>
                                    <Button  variant="outlined"><Link to='' style={{color:"#f27935"}}>Get Code</Link></Button>
                                </Grid>
                                <Grid item>
                                    <Typography justifyContent="center" color="gray" alignItems="center"  component="small"><AccessTimeFilledIcon fontSize='10px' /> <small>End in 20 Days</small> </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                      
                       <Box component="div" sx={{padding:"1px 10px",background:"#f5f1f1"}}>
                         <Grid container justifyContent="space-around" alignItem="center">
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <RemoveRedEyeIcon fontSize='18px' sx={{marginRight:"7px"}}/>  2k views
                              </Button>
                            </Grid>
                             <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}>
                              <FavoriteIcon fontSize='18px' sx={{marginRight:"7px"}} /> 10 Likes
                              </Button>
                               
                            </Grid>
                            <Grid item>
                              <Button sx={{color:"gray",textTransform:"capitalize"}}> 
                              <ShareIcon fontSize='18px' sx={{marginRight:"7px"}}  /> Share
                              </Button>
                               
                            </Grid>
                        </Grid>
                       </Box>
                     </Box>


                  </Box>
            </TabPanel>
        </TabsUnstyled>
      </Box>
    </>
  )
}

export default DealsAndCoupons



