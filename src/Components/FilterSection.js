import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../context/filter_context';
import { FaCheck } from "react-icons/fa";
import { FilterContextProvider } from '../context/filter_context';
import { FormatPrice } from '../Helper/FormatPrice';

const FilterSection = () => {

  const {
    filters:{text,category,company,color,price,maxPrice,minPrice},
    all_products,
    updateFilterValue}=useContext(FilterContext);

   // GET THE UNIQUE VALUE
    const getUniqueData=(data,property)=>{
      let newData=data.map((curElem)=>{
         return curElem[property];

      });

      if(property==="colors"){
       // return  newData=["All",...new Set([].concat(...newData))];
       newData=newData.flat();
      }
       return  newData=["All",...new Set(newData)];
       
    }

    //we nned a common fuction to get category
 const categoryOnlyData=getUniqueData(all_products,"category");

 const CompanyOnlyData=getUniqueData(all_products,"company");

 const colorsOnlyData=getUniqueData(all_products,"colors");


  return (
    <Wrapper>
            {/* filter -search */}
            <div className='filter-search'>
               <form onSubmit={(e)=>e.preventDefault()}>
                <input
                 type='text'
                 name='text'
                 value={text}
                 onChange={updateFilterValue}
                 placeholder='search'/>
                 
              </form>
            </div>

              {/* filter by category */}
            <div className='filter-category'>
            <h3>Category</h3>
              <div>
                 {categoryOnlyData.map((curElem,index)=>{
                  return <button key={index}
                          type='button' 
                          name='category'
                          value={curElem}
                          onClick={updateFilterValue}>
                         {curElem}
                      </button>
                  })}
              </div>
            </div>
           
              {/* filter by company */}
            <div className='filter-company'>
             <h3>Company</h3>
                <form action='#'>
                   <select 
                      name='company'
                      id='company'  
                      className='filter-company--select'
                      onClick={updateFilterValue}>
                      {
                        CompanyOnlyData.map((curElem,index)=>{
                          return <option key={index} name='campany' value={curElem}>
                          {curElem}</option>
                        })
                      }
                    </select>
                </form>
             </div>


        
            {/*filter by price*/}
            <div className="filter_price">
             <h3>Price</h3>
               <p>
                <FormatPrice price={price} />
               </p>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue}
               />
             </div>
    </Wrapper>
  );
};

const Wrapper=styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding: 2rem 0;
    font-size: bold;
  }

  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category{
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;

      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }

      .active {
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }

  .filter-company--select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }


  .filter-color-style {
    display: flex;
    justify-content: center;
  }

  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle{
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

  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }
  `;


  export default FilterSection;
