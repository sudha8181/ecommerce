import React from 'react';
import styled from 'styled-components';
import Herosection from './Components/Herosection';
import Services from './Components/Services';
import Trusted from './Components/Trusted';
import FeaturedProducts from './Components/FeaturedProducts';


const Home=()=>{

    const data="E-Store";
    return (<>
      <Herosection name={data}/>
      <FeaturedProducts/>
      <Services/>
      <Trusted/>
    </>);
    
}



export default Home;