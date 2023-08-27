import React , {useContext}from 'react';
import Herosection from './Components/Herosection';
import { AppContext } from './context/ProductContext';


const About = () => {

    const {myName}=useContext(AppContext);
    const about=" E-store About ";
    return (<>
    {myName}
<Herosection name={about}/>
{myName}
    </>);
}

export default About;

