import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import { CartProvider,CartContext } from '../context/cart_context';


export const AddToCart = ({product}) => {

  const {addToCart}=useContext(CartContext);

    const {id,colors,stock}=product;

    const [color,setColor]=useState(colors[0]);
    const [amount,setAmount]=useState(0);

    const setDecrease=()=>{
        amount>1?setAmount(amount-1):setAmount(1);
    }
    const setIncrease=()=>{
        amount>1?setAmount(amount+1):setAmount(stock);
        amount>=stock?setAmount(stock):setAmount(amount+1);
    }
    return (
       <Wrapper>
        <div className="colors">
            <p>
                Colors:
                {colors.map((curCol,index)=>{
                   return <button key={index} style={{backgroundColor:curCol}}
                   className={color === curCol? "btnStyle active" : "btnStyle"} 
                   onClick={() => setColor(curCol)}> 
                    {color === curCol? <FaCheck className="checkStyle" /> : null}</button>
                })}
            </p>
        </div>

        {/*add to cart*/}
        <CartAmountToggle
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
        />

        {/* add to cart button*/}
        <NavLink to="/cart"
        onClick={()=>addToCart(id,color,amount,product)}>
          <Button>Add to Cart</Button>
        </NavLink>
       </Wrapper>
    )
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .active {
    opacity: 1;
  }

  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }

  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  @media(max-width:${({theme})=>theme.media.mobile}){
    .grid-two-column{
      margin: 0 6rem;
      grid-template-grid:none;
    }
  }
`;
export default AddToCart;