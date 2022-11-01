import React , {useState} from 'react'

import {Box,Grid,Button,Divider,Card,CardActionArea,CardContent,Typography,List,ListItem,ListItemText, IconButton} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Link } from 'react-router-dom';
import hotDealsStyle from "../../component/HotDeals.module.css"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DealsFilterDrower from './DealsFilterDrower';
import {HotDealmain} from "../../LodingData/lodingData"


const HotDealInternal = () => {
   const [allHotDealsPopup , setAllHotDealsPopup] = useState(false);
   const [drowerHotDealsPopup , setDrowerHotDealsPopup] = useState(false);
   const [filter, setFilter]=useState(HotDealmain)

  const toggleClick= ()=>{
    setAllHotDealsPopup(!allHotDealsPopup)
  }
  const FliterButtonClick=()=>{
    setTimeout(()=>{
      setAllHotDealsPopup(false)
    },500);
  }
  const togalDrower = () => {
    setTimeout(()=>{
      setDrowerHotDealsPopup(!drowerHotDealsPopup)
    },500);
      
  }
  const lowPriceClick = ()=>{
    setFilter(filter.sort((a,b)=> a.mrp - b.mrp))
  }
  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  const togalBox={
    position: "fixed",
    width: "90%",
    zIndex: 100,
    top: "26%",
    left:" 19px",
    borderRadius: "7px",
    boxShadow: "0px 0px 19px -6px grey",
    overflow: "hidden"
  }
    
  return (
    <>
      <div  style={{paddingTop:"56px"}}>
      <Box component="div" sx={{p:1, position:"relative"}}>
        <Box component="div"  sx={{bgcolor:"#f1f1f1",p:1,borderRadius:"4px",m:2}}>
          <Grid justifyContent="space-around" alignItems="center" container>
              <Grid item>
              <Button onClick={toggleClick} sx={{color:"#000"}} variant="text" startIcon={<FilterListIcon />}>
                 Popularity
              </Button>
              </Grid>
              <Divider orientation="vertical" variant="middle" flexItem />
              <Grid item>
              <Button onClick={togalDrower}   sx={{color:"#000"}}  variant="text" startIcon={<FilterAltIcon />}>
                  Filter
              </Button>
              </Grid>
          </Grid>
        </Box>
        <Box component="div" >
          <Grid container>
            <Grid>
              <div  className={hotDealsStyle.flex_div} >
                  {
                  filter.map((item,i)=>{
                      return( 
                        <Box sx={{maxWidth:"167px", marginBottom:"10px ", }} component="div" key={i}>
                        <Card  sx={{background:"rgb(248 248 248)", border:"1px solid #dfdbdb"}} >
                        <Link className={hotDealsStyle.card_link} to={`/deal-details/${item.producId}`} >
                            <CardActionArea>
                              <Box component='div' sx={{padding:"15px 21px 0px"}}>
                              <img src={item.src} alt={item.alt} style={{borderRadius:"7px",height:"92px", width:"120px"}}/>
                              </Box>
                            <CardContent sx={{background:"rgb(248 248 248)", padding:"7px"}}>
                                <Typography gutterBottom variant="h5" component="div" sx={{color:"#000",marginBottom:"0" }}>{ item.title} </Typography>
                                <Typography variant="body2" sx={{color:"#000" ,padding:"4px 0"}}>{ item.text} </Typography>
                                <Box component="div" sx={{paddingTop:"4px"}}>
                                    <strong className={hotDealsStyle.card_amouunt}>&#8377;{item.mrp}</strong>
                                    <small className={hotDealsStyle.card_small_amouunt}>&#8377;{item.mrp}</small>
                                </Box>
                            </CardContent>
                            </CardActionArea>
                        </Link>
                       </Card>
                    </Box>
                      )
                    })
                   }
               </div>
            </Grid>
    
          </Grid>
        </Box>
        {
          allHotDealsPopup? <Box  componnt="div" sx={togalBox}>
          <List sx={style} component="nav" aria-label="mailbox folders">
              <ListItem sx={{position:"relative"}} >
                <Typography   variant="h5" component="h5">Filter</Typography>
                <div onClick={toggleClick} style={{position:"absolute",right:"18px"}}><IconButton><ClearOutlinedIcon color="warning" /></IconButton></div>
             </ListItem>
            <Divider />
            <ListItem button onClick={FliterButtonClick}>
              <ListItemText sx={{margin:"0",}}>Popular</ListItemText>
            </ListItem>
            <ListItem button onClick={FliterButtonClick} >
              <ListItemText onClick={lowPriceClick} sx={{margin:"0",}} >Low Prize</ListItemText>
            </ListItem>
            <ListItem button onClick={FliterButtonClick}>
              <ListItemText sx={{margin:"0",}}>Discount</ListItemText>
            </ListItem>
            <ListItem button onClick={FliterButtonClick}>
              <ListItemText sx={{margin:"0",}}>CashBack</ListItemText>
            </ListItem>
         </List>

      </Box>:""
        }
        <DealsFilterDrower sandClick={drowerHotDealsPopup} togalDrower={togalDrower} />
      </Box>
        
      </div>
    </>
  )
}

export default HotDealInternal
