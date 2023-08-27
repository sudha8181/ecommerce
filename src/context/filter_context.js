import { createContext, useContext, useReducer, useEffect } from "react";
import { AppContext,AppProvider } from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters:{
    text:"",
    category:"All",
    campany:"All",
    color:"all",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  
     
  }
};

 const FilterContextProvider = ({ children }) => {
  const { products } = useContext(AppContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };


  // to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting=(event)=>{
    const value=event.target.value;
    return dispatch({type:"GET_SORT_VALUE",payload:value});
  };


  //update the filter context
  const updateFilterValue=(event)=>{
    let name=event.target.name;
    let value=event.target.value;

    return(dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}}))

  };


  
  // to sort the product
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS", payload: products });
  }, [products, state.sorting_value, state.filters]);

  
  // to load all thr product for grid and list
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView,setListView,sorting,updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export {FilterContextProvider,FilterContext};
