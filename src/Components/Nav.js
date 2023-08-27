import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import {CgMenu} from 'react-icons/cg';
import {CgClose} from 'react-icons/cg';
import { CartContext } from '../context/cart_context';




const Nav=()=>{

  const {total_item}=useContext(CartContext);
  console.log(total_item);

  const[menuicon,setMenuIcon]=useState("");


const NavData=styled.nav`
background:transparent;
.navbar-list{ 
 display:flex;
 gap:2.0rem;
 align-items:center;  
 justify-content:space-evenly; 
 background:${({theme})=>theme.colors.bg};

  .cart-trolley--item{
    border-radius: 20px;
    background: rgb(103, 58, 183);
    color: white;
    width: 13rem;
    padding: 0.5rem;
    position: relative;
    height: 3rem;
    top: -2.4rem;
    left: -0.6rem;
  }
  
              
.navbar-link{
   &:link,
   &:visited{
   display:inline block;
   text-decoration:none;
   font-size:1.2rem;
   font-weight:bold;
   text-transform: uppercase;
   color:color: ${({ theme }) => theme.colors.black};
   transition: color 0.3s linear;
  },
  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.helper};
  }

},
  .cart-trolley{
      ${'' /* position:relative; */}
      font-size:2.5rem;
  },
},

.navbar{
     .mobile-navbar-btn{
      display:none;
      background:transparent;
      cursor:pointer;
      border:none
      .close-outline{
        display:none;
      }
      
@media(max-width:${({theme})=>theme.media.mobile}){
 .navbar-list{
   
  background: white;
  position: absolute;
  left: 0rem;
  height: 100vh;
  width: 100vw;
  top: 0rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 3rem;
  transform: translateY(0%);
  visibility: hidden
  },
 
.active .navbar-list{

visibility: visible;
gap: 4rem;
overflow:hidden;

.navbar-link {
  font-size: 3.2rem;
}
},

.mobile-navbar-btn{
display:inline-block;
z-index:9999;
border:${({theme})=>theme.colors.black};
cursor:po
 .active .mobile-nav-icon{
  display: none;
  font-size: 4.2rem;
  background:white;
  position: absolute;
  top: 3%;
  right: 10%;
  color: ${({ theme }) => theme.colors.black};
  z-index: 9999;

  .active .close-outline {
       display: inline-block;
       font-size:4.2rem;
       
    }
    .active .mobile-nav-icon[name="close-outline"] {
      display: inline-block;
      font-size:4.2rem;
      }


    }
             
  }
       
}   
   `; 
    return (<>
        <NavData>
        <div className={menuicon?"navbar active":"navbar"}>
            <ul className='navbar-list'>
                <li><NavLink to="/"  className="navbar-link home-link">Home</NavLink></li>
                <li><NavLink to="/about"  className="navbar-link home-link">About us</NavLink></li>
                <li><NavLink to="/contact"  className="navbar-link home-link">Contact us</NavLink></li> 
                <li><NavLink to="/product"  className="navbar-link home-link">Product page</NavLink></li>
                <li><NavLink to="/cart"  className="navbar-link home-link ">

                <FiShoppingCart className='cart-trolley'/>
                {
                  total_item>1? <span className='cart-trolley--item'>{total_item}</span>:""
                }
              
                </NavLink></li>
                {/* <li><NavLink to="/SingleProduct"  className="navbar-link home-link">Single Product</NavLink></li> */}
            </ul>

            {/* two buttons for open and close of menu*/}
            <div className='mobile-navbar-btn'>
                <CgMenu name="menu-outline" className="mobile-nav-icon"
                  onClick={()=>setMenuIcon(true)}
                />
                <CgClose name="close-outline" className="mobile-nav-icon close-outline"
                   onClick={()=>setMenuIcon(false)}
                />
            </div>
        </div>
        </NavData>
        
      
        
    </>)
};

export default Nav;


