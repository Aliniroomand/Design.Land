import { configureStore } from "@reduxjs/toolkit";
import  favorites_slice  from "../slices/favoritesSlice";

export const store = configureStore({
    reducer:{
        favorites:favorites_slice,
    },}
)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch