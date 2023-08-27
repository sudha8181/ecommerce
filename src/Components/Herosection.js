import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';



const Herosection=(Props)=>{
 return <Wrapper><div className="containter">
  <div className="grid grid-two-column">
    <div className='hero-section-data'>
    <p className='intro-data'>welcome</p>
    <h1>{Props.name}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Incidunt explicabo ratione fuga eligendi sed,
       ducimus numquam animi nesciunt dicta quos earum
       nostrum deleniti temporibus iusto.</p>
    <NavLink to="/product">
      <Button>SHOP NOW</Button>
    </NavLink>
    </div>
    <div className="hero-section-image">
    <figure>
    <img src="images/hero.jpg" alt="heo-image"  
      className='img-style' />
    </figure>
     
    </div>
  </div>
  </div>
  </Wrapper>;
};

const Wrapper=styled.section`
padding:12rem 0;

img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data{
    margin: 6rem;

    .intro-data {
    margin-bottom: 0px;
    text-transform: uppercase;
    color: rgb(81, 56, 238);
    }

    h1{
      text-transform: capitalize;
    font-size: bold;
    }
    p{
      
      margin: 2rem 0;
    }
  },
  .hero-section-image{
    width: 100%;
    /* margin: -11rem; */
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    figure{
      position:relative;

      &::after{
    content: "";
    width: 55%;
    height: 100%;
    background-color: rgba(81, 56, 238, 0.4);
    position: absolute;
    left: 32%;
    top: -4rem;
    z-index: -1;
    

      }
    .img-style {
    width: 80%;
    height: auto;
  }
    }
  }

  @media(max-width:${({theme})=>theme.media.mobile}){

    .hero-section-data{
      margin:3rem;
    }
  }
 
`;


export default Herosection;


