import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
      restaurant:[]
        
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            console.log(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
            state.restaurant.length=0;
        },
        addRest:(state,action)=>{
            state.restaurant.splice(0,1,(action.payload))
            console.log(action.payload)
            console.log(current (state.restaurant))
        },
        getTotal:(state,action)=>{
            console.log(action.payload)
            let {total,quantity}= state.items.reduce((x,y)=>{
                const {price}=x
                console.log(price)
                console.log(total,quantity)
            })
        }
    }
})
export const {addItem,removeItem,clearCart,addRest,getTotal}=cartSlice.actions;
export default cartSlice.reducer;