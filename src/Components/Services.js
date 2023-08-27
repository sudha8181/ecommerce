import React from 'react';
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
    return (
        <>
        <Wrapper>
        <div className='container'>
            <div className='grid grid-three-column'>
                <div className='services1' style={{background:"#80808024"}}>
                <div>
              <TbTruckDelivery className="icon" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
                </div>
                <div className='services2' style={{background:"#80808024"}}>
                <div className="services-colum-2">
              <div>
                <MdSecurity className="icon" />
                <h3>Non-contact Shipping</h3>
              </div>
            </div>
            <div className="services-colum-2">
              <div>
                <GiReceiveMoney className="icon" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
                </div>
                <div className='services3' style={{background:"#80808024"}}>
                <div>
              <RiSecurePaymentLine className="icon" />
              <h3>Super Secure Payment System</h3>
            </div>
                </div>
               
            </div>
        </div>
        </Wrapper>
        </>
    );
}
const Wrapper=styled.section`
        padding: 9rem 0;

        .container {
    max-width: 103rem;
    margin: 0px auto;
    }
       .grid{
        
        gap: 4.8rem;
        }
           
 .services1,.services2,.services3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: rgb(128 128 128 / 12%);
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    margin: 2rem 0px;
    },
    .services2 {
    gap: 2rem;
    background-color:rgb(228 225 232 / 38%);
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 6rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }

  @media(max-width:${({theme})=>theme.media.mobile}){

    .container{
      padding:0 2rem;
    }
  }
    `;
export default Services;
