import React from 'react'
import { Button } from '../styles/Button';
import styled from 'styled-components';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    return (
        <Wrapper>
          <div className='container'>
             <div>
               <p>Ready to get Started??</p>
               <p>Talk to us today</p>
             </div>
           <div>
          <Button>GET STARTED</Button>
            </div>
        
        
        </div>
        <div className='footer'>
          <div className='section'>
          <div className='footer-item-1'>
          <div>
         <p>Online Store</p></div>
         <div><p>Lorem ipsum dolor sit amet</p>
              <p>adipisicing elit. Tenetur, nisi.</p></div> 
        </div>
        <div className='footer-item-2'>
         <p>Subscriber to get important updates</p>
         <input type="email" name="email" id="" placeholder='Enter Your Email'/>
         <Button>SUBSCRIBE</Button>
        </div>
          </div>
          
           <div className='section2'>
          <div className='footer-item-3'>
          <p>follow us</p>
          <div className='footer-social-icons'>
              <div className="icon"><FaDiscord></FaDiscord></div>
              <div className="icon"><FaInstagram></FaInstagram></div>
              <div className="icon"> <FaYoutube></FaYoutube></div>
           </div>
             </div>
     <div className='footer-item-4'>
      <p>call us</p>
      <p>+91123456789</p>
     </div>
  </div>
          </div>
          
        </Wrapper>
    );
};

const Wrapper=styled.section`
.container{
    display: flex;
    justify-content:space-between;
    background:rgb(232 232 232);
    padding:2rem 3rem;
    width: 77rem;
    align-items: center;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
}
.footer{
    position: relative;
    height: 30rem;
    width: 100%;
    background: rgba(2, 4, 43, 0.95);
    z-index: -1;
    top: -5rem;
    color: white;
    display: flex;
    justify-content: center;
    padding: 9rem 0;
    gap: 10rem;
    
    .section{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    

    .footer-item-1{
        display:flex;
        flex-direction:column;
        gap:1.5rem;
    }
    .footer-item-2{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
.section2{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}
} 
    .footer-social-icons{
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    gap: 1rem;

   .icon{
    border: 1px solid white;
    border-radius: 10rem;
    padding: 0.5rem;
    }

    }
}

@media(max-width:${({theme})=>theme.media.mobile}){
    .container{
        margin:0 8rem;
        width:60rem;
    }
    .footer{
        gap:11rem;
        flex-direction:row;
        height:auto;

        .section{
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 2rem;
        }
        .section2{
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 2rem;
        }
    }

}
`;
export default Footer;
