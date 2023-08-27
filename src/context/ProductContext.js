import axios from 'axios';
import React,{createContext, useEffect,useReducer} from 'react';
import reducer from "../reducer/productReducer";



const AppContext=createContext();

const API="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleLoading: false,
    singleProduct: {},
    isSingleError:false
  

};

const AppProvider=({children})=>{

    const[state,dispatch]=useReducer(reducer,initialState);

    const getProduct=async(url)=>{
        dispatch({type:"SET_LOADING"})
      try {
          const res=await axios.get(url);
          const products=await res.data;
          dispatch({type:"SET_API_DATA",payload:products});
      } catch (error) {
        dispatch({type:"ERROR"});
      }
    };


    //2nd api calls for single product
    const getSingleProduct=async(url)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
      try {
          const res=await axios.get(url);
          const products=await res.data;
          console.log(products);
          dispatch({type:"SET_SINGLE_PRODUCT",payload:products});
      } catch (error) {
        dispatch({type:"SET_SINGLE_ERROR"});
      }
    };

    useEffect(()=>{
    getProduct(API);
    },[]);

    return <AppContext.Provider  value={{ ...state ,getSingleProduct}}>{children}</AppContext.Provider>;


}
export {AppProvider,AppContext};


 
