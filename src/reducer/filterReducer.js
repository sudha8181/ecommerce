const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
         let priceArr = action.payload.map((curElem) => curElem.price);

         let maxPrice = Math.max(...priceArr);

     
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters: { ...state.filters, maxPrice, price: maxPrice },
          
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };

        case "SET_LIST_VIEW":
          return {
            ...state,
            grid_view: false,
          };

          case "GET_SORT_VALUE":


            return {
              ...state,
              sorting_value: action.payload,
            
            };

            case "SORTING_PRODUCTS":
              let newSortData;
             // let tempSortProduct = [...action.payload];
        
             const {filter_products}=state;
             let tempSortProduct=[...filter_products];
             
              function sortingProducts(a, b) {
                if (state.sorting_value === "lowest") {
                  console.log("call");
                  return a.price - b.price;
                }
        
                if (state.sorting_value === "highest") {
                  console.log("call");
                  return b.price - a.price;
                }
        
                if (state.sorting_value === "a-z") {
                  return a.name.localeCompare(b.name);
                }
        
                if (state.sorting_value === "z-a") {
                  return b.name.localeCompare(a.name);
                }
              }
        
              newSortData = tempSortProduct.sort(sortingProducts);
              console.log("newsoprt dat" + newSortData[0]);
        
              return {
                ...state,
                filter_products: newSortData,
              };


              case "UPDATE_FILTER_VALUE":

               const {name,value}=action.payload;

                return{
                  ...state,
                filters:{
                  ...state.filters,
                  [name]:value,
                }
                };


                case "FILTER_PRODUCTS":
                 let {all_products}=state;
                 let tempFilterProduct=[...all_products];

                 const {text,category,company,color,price}=state.filters;

                 if(text){
                  tempFilterProduct=tempFilterProduct.filter((current)=>{
                    return current.name.toLowerCase().includes(text);
                  });
                 }

                 if(category!=="All"){
                  tempFilterProduct=tempFilterProduct.filter((current)=>{
                    return current.category===category;
                  });
                 }
                 if(company!=="All"){
                  tempFilterProduct=tempFilterProduct.filter((current)=>{
                    return current.company.toLowerCase()===company;
                  });
                 }

                //  if (color) {
                //   tempFilterProduct = tempFilterProduct.filter((curElem) =>
                //     curElem.colors.includes(color)
                //   );
                // }

                if (price === 0) {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price == price
                  );
                } else {
                  tempFilterProduct = tempFilterProduct.filter(
                    (curElem) => curElem.price <= price
                  );
                }


               return {
                ...state,
                filter_products:tempFilterProduct,
               };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;