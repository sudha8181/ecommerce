import React, { useContext } from 'react';
import { FilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
const { filter_products,grid_view}=useContext(FilterContext);

if(grid_view){
    return <GridView products={filter_products}/>
}
if(!grid_view){
    return <ListView products={filter_products}/>
}

};
export default ProductList;
