const cartReducer=(state,action)=>{

    if(action.type==="ADD_TO_CART"){
        let {id,color,amount,price,product}=action.payload;

      //tackle the existing product
      let existingProduct=state.cart.find((curEle)=>{
        return curEle.id===id+color;
      });

      if(existingProduct){
        let updateProduct=state.cart.map((curElem)=>{
            if(curElem.id===id+color){
                let newAmount=curElem.amount+amount;
              

                if(newAmount=>curElem.max){
                    newAmount=curElem;
                }
                return{
                    ...curElem,
                    amount:newAmount,
                    
                };
            }else{
                return curElem;
            }
        });
        return {
            ...state,
            cart:updateProduct,
        }
      }
      else{
        let cartProduct={
            id:id+color,
            name:product.name,
            color,
            amount,
            price:product.price,
            image:product.image[0].url,
            max:product.stock,
        };
        return {
            ...state,
            cart:[...state.cart,cartProduct]
        };
      }   
    }


    if (action.type === "SET_DECREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let decAmount = curElem.amount - 1;
    
            if (decAmount <= 1) {
              decAmount = 1;
            }
    
            return {
              ...curElem,
              amount: decAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
      }
    
      if (action.type === "SET_INCREMENT") {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === action.payload) {
            let incAmount = curElem.amount + 1;
    
            if (incAmount >= curElem.max) {
              incAmount = curElem.max;
            }
    
            return {
              ...curElem,
              amount: incAmount,
            };
          } else {
            return curElem;
          }
        });
        return { ...state, cart: updatedProduct };
      }

      
    if(action.type==="REMOVE_ITEM"){
        let {id}=action.payload;
        let updateted=state.cart.filter((val,index)=>{

            return val.id!==id;
        })
       
        return{
            ...state,
            cart:updateted,
        };
    }

    if(action.type==="CLEAR_CART"){
       
        return{
            ...state,
            cart:[],
        };
    }

    if (action.type === "CART_TOTAL_ITEM") {
          let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
            let { amount } = curElem;
          
            initialVal = initialVal + amount;
            return initialVal;
          }, 0);
          console.log(updatedItemVal);
          return {
            ...state,
            total_item: updatedItemVal,
          };
        }

    if (action.type === "SUBTOTAL") {
              let total_price = state.cart.reduce((initialVal, curElem) => {
                let { price,amount } = curElem;
              
                initialVal = initialVal + (price*amount);
                return initialVal;
              }, 0);
             
              return {
                ...state,
                total_amount:total_price,
              };
            }
    
}

export default cartReducer;