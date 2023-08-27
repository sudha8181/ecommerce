import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const MainHeader=styled.header`
background:${({theme})=>theme.colors.bg};
display: flex;
justify-content: space-between;
align-items: center;
padding:1.0rem 0.5rem 0.5rem 1.0rem;
height:7rem;
`;

const Header=()=>{
 return  (
 <>
  <MainHeader>
     <NavLink to="/">
      <img src="./images/Logo2.png" alt="my logo" />
     </NavLink> 
     <Nav/>

 
 </MainHeader>      
 </>);
 
 

};




export default Header;




