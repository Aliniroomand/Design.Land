import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface favorites_type {
    id:number,
    title:string,
    image:string,
}
const initialState:favorites_type[]=[]

export const favorites_slice=createSlice({
    name:"favorites",
    initialState,
    reducers:{
        addToFavorites: (state, action: PayloadAction<favorites_type>) => {
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex === -1) {
              state.push(action.payload);
            } else {
              window.alert("شما این مورد رو به علاقه مندی هاتون اضافه کردین");
            }
          },
        removeFromFavorites:(state , action:PayloadAction<number>)=>{
           return state.filter((item)=>item.id !== action.payload)
        }
    }
});
export const {addToFavorites,removeFromFavorites}=favorites_slice.actions;
export default favorites_slice.reducer;
