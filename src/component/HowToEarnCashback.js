import React from 'react'

import {Grid,Box,Typography} from '@mui/material';
import cashbackImage from '../assets/images/money.png'

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const spanImage = {
  width: "20px",
  float: "right",
  display: "inline-block",
  paddingTop: "2px",
  marginLeft: "16px",
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
    marginBottom:10,
    borderRadius:8
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const HowToEarnCashback = () => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Grid container sx={{padding:"13px 3px 3px"}}>
                <Grid item>
                    <Box component="div" sx={{ width:"30px", marginRight:"10px"}}>
                    <img src={cashbackImage} alt="cash back image"  style={{width:"100%"}}/>
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6" component="h6"> How To Earn <strong>Cashback?</strong></Typography>
                </Grid>
      </Grid>
      <Box component="div" sx={{ padding:"5px 17px"}}>
        <Box component="div" sx={{borderRadius:"10px",overflow:"hidden",boxShadow:" 0px 0px 6px -2px grey"}}>
        <iframe width="100%" height="200px" src="https://www.youtube.com/embed/hkStK-PBO_k?start=2" title="How to work free kaa maal cashback" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <video  controls poster='' >
                  <source src={cashBackwork} type="video/mp4"/>
                   Your browser does not support the video tag.
                </video> */}
        </Box>
        <Box component="div" sx={{borderRadius:"10px",bgcolor:"#FFECE2", padding:"20px 17px", marginTop:"20px"}}>
        <div>
      <Accordion sx={{borderRadius:"8px"}} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>This is how Cashback works</Typography>
          <span style={spanImage}> <img src={cashbackImage} alt='explane image'></img></span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius:"8px"}} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Frequaintly ask Quaction</Typography>
          <span style={spanImage}> <img  src={cashbackImage} alt='acordion image'></img></span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{borderRadius:"8px"}} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Signup to start Cashback </Typography>
          <span style={spanImage}> <img src={cashbackImage} alt='acordion image'></img></span>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </Box>
      </Box>
     
    </>
  )
}

export default HowToEarnCashback
