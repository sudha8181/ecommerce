import React from 'react';
import styled from 'styled-components';
import { Button } from './styles/Button';
import { NavLink } from 'react-router-dom';


const Error = () => {
    return <Wrapper>
     <div className='container'>
        <div className='content'>
            <h1>404</h1>
            <h2>UH OH ! You're lost</h2>
            <p>The page you are looking for does not exist.how you got is a mystery.
            But you can click the button below to go back to the homepage.</p>
           
        </div>
        <NavLink to="/">
        <Button>HOME</Button>
        </NavLink>
        
     </div>
    </Wrapper>;
}

const Wrapper=styled.section`

margin:10rem;
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
}
.content{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
}
`;

export default Error;
