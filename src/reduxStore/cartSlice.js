import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
      restaurant:new Array(1)
        
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            console.log(action.payload)
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;