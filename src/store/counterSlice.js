import {createSlice} from "@reduxjs/toolkit"


// initialState
const initialState={
    counter:0,
};

// Reducer
export const counterSlice =createSlice({
    name:'counter',
    initialState,
    reducers:{
        incrementCounter:(state,action)=>{
            state.counter =state.counter + action.payload
        },

        deCrementCounter:(state,action)=>{
            state.counter =state.counter - action.payload
        },
    },
});



// Action

export const {incrementCounter,deCrementCounter}=counterSlice.actions;

export default counterSlice;