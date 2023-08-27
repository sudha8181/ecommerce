import React from 'react';
import styled from 'styled-components';

 const Trusted = () => {
    return (
       <><Wrapper>
        <div className='container'>
        <h3>Trusted by 1000+ company</h3>
         <div className='brand-section-slider'>
            <div className='brand-slider'><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="trusted-brand" /></div>
            <div className='brand-slider'><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="trusted-brand" /></div>
            <div className='brand-slider'><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="trusted-brand" /></div>
            <div className='brand-slider'><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="trusted-brand" /></div>
            <div className='brand-slider'><img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="trusted-brand" /></div>
        </div>
        </div>
        </Wrapper>
       </>
    );
};
const Wrapper=styled.section`
padding:5rem 0;
.container{
    text-align:center;
}
.brand-section-slider{
    display: flex;
    justify-content: center;
    gap: 9rem;
    padding: 5rem 0;
}
img {
    min-width: 10rem;
    height: 10rem;
  }


  @media(max-width:${({theme})=>theme.media.mobile}){
    .container{
        padding:0 2rem;
    }
    .brand-section-slider{
        gap:0rem;
    }
  }
`;
export default Trusted;