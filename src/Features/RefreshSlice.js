import { createSlice } from "@reduxjs/toolkit";
const refreshSlice=createSlice({
    name:'refresh',
    initialState:false,
    reducers:{
        refresh:(state)=>{
            return !state;
        }
    }
})
export const{refresh}=refreshSlice.actions
export default refreshSlice.reducer