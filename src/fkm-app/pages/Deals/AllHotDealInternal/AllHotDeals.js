import React , {useState} from 'react'

import {Box,Grid,Button,Divider,Card,CardActionArea,CardContent,Typography,List,ListItem,ListItemText, IconButton} from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterListIcon from '@mui/icons-material/FilterList';
import image from '../../../assets/images/img.jpg'
import { Link } from 'react-router-dom';
import hotDealsStyle from "../../../component/home/HotDeals.module.css"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DealsFilterDrower from './DealsFilterDrower';


const banner=[
  {
     src:image,
     alt:"banner",
     mrp:200,
     text:" Lizards are a widespread group of squamate  ",
     Viewers:5,
     category:"child",
     store:"auric",
     title:"AURIC",
     producId:1
  },
  {
    src:image,
    alt:"banner",
    mrp:140,
    category:"child",
    store:"jokey",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    category:"man",
    store:"yxyxx",
    mrp:300,
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    mrp:700,
    category:"food",
    store:"freshtohome",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    mrp:30,
    category:"food",
    store:"freshtohome",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    mrp:100,
    category:"man",
    store:"sery",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    mrp:160,
    category:"food",
    store:"peesafe",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:2
  },
  {
    src:image,
    alt:"banner",
    mrp:30,
    category:"food",
    store:"freshtohome",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:3
  },
  {
    src:image,
    alt:"banner",
    mrp:80,
    category:"food",
    store:"peesafe",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:4
  },
  {
    src:image,
    alt:"banner",
    mrp:900,
    category:"chlid",
    store:"jockey",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:4
  },
  {
    src:image,
    alt:"banner",
    mrp:300,
    category:"man",
    store:"bage",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:4
  },
  {
    src:image,
    alt:"banner",
    mrp:360,
    category:"food",
    store:"freshtohome",
    text:" Lizards are a widespread group of squamate  ",
    Viewers:5,
    title:"AURIC",
    producId:4
  }
]
const HotDealInternal = () => {
   const [allHotDealsPopup , setAllHotDealsPopup] = useState(false);
   const [drowerHotDealsPopup , setDrowerHotDealsPopup] = useState(false);
   const [filter, setFilter]=useState(banner)

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
                                  <Card  sx={{background:"#f1f1f1", border:"1px solid gary"}} >
                                  <Link className={hotDealsStyle.card_link} to={`/deal-details/${item.producId}`} >
                                      <CardActionArea>
                                      <img src={item.src} alt={item.alt}/>
                                      <CardContent sx={{background:"#f1f1f1", padding:"7px"}}>
                                          <Typography gutterBottom variant="h5" component="div" sx={{color:"#000" }}>{ item.title} </Typography>
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
