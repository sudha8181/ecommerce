import { createContext,useEffect,useReducer } from "react";
import reducer from "../reducer/cartReducer";


const CartContext = createContext();


const getLocalCartData=()=>{
    const newCartData=localStorage.getItem("cartdata");

    if(newCartData===[])
    return [];
    else
    return JSON.parse(newCartData);
}

const initialState={
// cart:[],
cart:getLocalCartData(),
total_item:"",
total_amount:"",
shipping_fee:5000
};
const CartProvider=({children})=>{
const [state,dispatch]=useReducer(reducer,initialState);

const addToCart=(id,color,amount,product)=>{
    dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}});
  
   
}

 // increment and decrement the product

 const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

//to reomove the individual item from cart
const removeItem=(id)=>{
    dispatch({type:"REMOVE_ITEM",payload:{id}});
}

const clearCart=()=>{
    dispatch({type:"CLEAR_CART"});
}

//to add the data in localstorage
//get vs set



useEffect(()=>{
    dispatch({type:"CART_TOTAL_ITEM"});
    dispatch({type:"SUBTOTAL"});
    localStorage.setItem("cartdata",JSON.stringify(state.cart));
},[state.cart]);


return <CartContext.Provider value={{...state,addToCart,removeItem,clearCart,setDecrease,setIncrement}}>
{children}</CartContext.Provider>;


}

export {CartProvider,CartContext};