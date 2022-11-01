import React from 'react';
import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter} from 'react-router-dom';
import AppRoutes from './AppRoutes';


import Header from "./component/header/Header"





function App() {
 
  return (
  <Container maxWidth="sm" sx={{p:"0px"}}>
    <BrowserRouter>
    <Header  />
    <AppRoutes />
    </BrowserRouter>
  </Container>
  );
}

export default App;
