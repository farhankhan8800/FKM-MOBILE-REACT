import React,{useState} from 'react'
import cashBackStoreStyle from './CashBackStore.module.css'

import { Grid, Box,  Typography,Card,CardActionArea} from '@mui/material';
import cashbackImage from '../../assets/images/money.png'

import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';

import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';

const Tab = styled(TabUnstyled)`
font-family: IBM Plex Sans, sans-serif;
color: #fff;
cursor: pointer;
font-size: 0.875rem;
font-weight: 600;
background-color: transparent;
min-width:130px ;
padding: 10px 12px;
margin: 6px 6px;
border: none;
border-radius: 7px;
display: flex;
justify-content: center;

&:hover {
  background-color: #f27935;
}

&:focus {
  color: #fff;
  
}

&.${tabUnstyledClasses.selected} {
  background-color: #fff;
  color:#f27935;
}
`;

const TabsList = styled(TabsListUnstyled)(
    ({ theme }) => `
    background-color: #f27935;
    display: flex;
    overflow-x: scroll;
    align-items: center;
    justify-content: space-between;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ?"#fff" :"#fff"};
    `,
  );
const TabPanel = styled(TabPanelUnstyled)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    overflow:auto;
    padding: 20px 12px;
    background:rgb(248 248 248);
    border-radius: 7px;
    `,
  );

const CashBackStore = () => {
  const [store, setStore] = useState([]);
  
  React.useEffect(() => {
    fetch('https://freekaamaal.com/react-test/json.php')
      .then(results => results.json())
      .then(data => {
      //  console.log(data.CbStore)
        setStore(data.CbStore)
      });
  }, [])


  return (
   
    <>
            <Grid container sx={{padding:"13px 3px 3px"}}>
                <Grid item>
                    <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                    <img src={cashbackImage} alt="cashback image"  style={{width:"100%"}}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6" component="h6"> Cashback <strong>Store</strong></Typography>
                </Grid>
            </Grid>
                    <Box sx={{ width: '100%' }}>
                    <TabsUnstyled defaultValue={0}>
                        <TabsList className={cashBackStoreStyle.tabsList} sx={{bgcolor:"#f279359e"}} >
                            <Tab>All Store</Tab>
                            <Tab>Beauty Product</Tab>
                            <Tab>Kids</Tab>
                            <Tab>food</Tab>
                        </TabsList>
                        <TabPanel value={0}>
                                <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                             
                                  {
                                   store.map((item,i)=>{
                                    return(
                                      <Grid key={i} item >
                                      <Card  sx={{ maxWidth:"120px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,boxShadow:"0 0 0 "}}>
                                      <a className={cashBackStoreStyle.cash_back_store_link} href={item.link}>
                                      <CardActionArea>
                                        <Box component='div' sx={{display:"flex",alignItems:"center",justifyContent:"center", width:"100px",padding:"10px"}}>
                                        <img src={item.imgSrc} alt="store" height="30px"  width="100%"/>
                                        </Box>
                                       <p className={cashBackStoreStyle.cash_back_store_offer} >{item.storeName}</p>
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
                               <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                             
                                  {
                                   store.map((item,i)=>{
                                    if(item.category==="beautyProduct"){
                                     
                                      return(
                                        <Grid key={i} item >
                                      <Card  sx={{ maxWidth:"120px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,boxShadow:"0 0 0 "}}>
                                      <a className={cashBackStoreStyle.cash_back_store_link} href={item.link}>
                                      <CardActionArea>
                                        <Box component='div' sx={{display:"flex",alignItems:"center",justifyContent:"center", width:"100px",padding:"10px"}}>
                                        <img src={item.imgSrc} alt="store" height="30px"  width="100%"/>
                                        </Box>
                                       <p className={cashBackStoreStyle.cash_back_store_offer} >{item.storeName}</p>
                                      </CardActionArea>
                                      </a>
                                      </Card>
                                      </Grid>
                                      )
                                    }
                                  })
                                  }
                               
                                </Grid>
                            
                        </TabPanel>


                        <TabPanel value={2}>
                        <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                             
                             {
                              store.map((item,i)=>{
                               if(item.category==="kids"){
                             
                                 return(
                                  <Grid key={i} item >
                                  <Card  sx={{ maxWidth:"120px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,boxShadow:"0 0 0 "}}>
                                  <a className={cashBackStoreStyle.cash_back_store_link} href={item.link}>
                                  <CardActionArea>
                                    <Box component='div' sx={{display:"flex",alignItems:"center",justifyContent:"center", width:"100px",padding:"10px"}}>
                                    <img src={item.imgSrc} alt="store" height="30px"  width="100%"/>
                                    </Box>
                                   <p className={cashBackStoreStyle.cash_back_store_offer} >{item.storeName}</p>
                                  </CardActionArea>
                                  </a>
                                  </Card>
                                  </Grid>
                                 )
                               }
                             })
                             }
                           </Grid>
                        </TabPanel>
                        <TabPanel  value={3}>
                        <Grid container  direction="row" justifyContent="space-around" alignItems="center"> 
                             {
                              store.map((item,i)=>{
                               if(item.category==="food"){
                                
                                 return(
                                  <Grid key={i} item >
                                  <Card  sx={{ maxWidth:"120px",padding:"5px 3px 7px 3px ",marginBottom:"10px" ,boxShadow:"0 0 0 "}}>
                                  <a className={cashBackStoreStyle.cash_back_store_link} href={item.link}>
                                  <CardActionArea>
                                    <Box component='div' sx={{display:"flex",alignItems:"center",justifyContent:"center", width:"100px",padding:"10px"}}>
                                    <img src={item.imgSrc} alt="store" height="30px"  width="100%"/>
                                    </Box>
                                   <p className={cashBackStoreStyle.cash_back_store_offer} >{item.storeName}</p>
                                  </CardActionArea>
                                  </a>
                                  </Card>
                                  </Grid>
                                 )
                               }
                             })
                             }
                           </Grid>
                        </TabPanel>
                   </TabsUnstyled>
                  </Box>
    </>
  )
}

export default CashBackStore


