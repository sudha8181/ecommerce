import React, { useContext } from 'react';
import { FormatPrice } from '../Helper/FormatPrice';
import { FaTrash } from 'react-icons/fa';
import { CartContext } from '../context/cart_context';
import CartAmountToggle from './CartAmountToggle';
import { useState } from 'react';

const CartItem = ({id,name,image,color,amount,price,max}) => {
  const {removeItem,setDecrease,setIncrement}=useContext(CartContext);
 
  return <div className="cart_heading grid grid-five-column">
           {/* cart item image */}
           <div className='cart-image--name'>
             <div>
               <figure>
                <img src={image} alt="" />
               </figure>  
             </div>
      
             <div>
                <p>{name}</p>
                <div className='color-div'>
                <p>color:</p>
                <div className='color-style' style={{background:color,color:color}}></div>
                </div>
                </div>
            </div>

            {/* price */}     
            <div className='cart-hide'>
              <p>
              <FormatPrice price={price}/>
              </p>
            </div>

              {/* Quantity  */}
              <CartAmountToggle
              amount={amount}
              setDecrease={() => setDecrease(id)}
              setIncrease={() => setIncrement(id)}/>

              {/* //Subtotal */}
              <div className="cart-hide">
                <p>
                  <FormatPrice price={price*amount} />
                </p>
               </div>

             <div>
            <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
           </div>
        </div>


  
}

export default CartItem;
