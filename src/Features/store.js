import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from "./themeSlice";
import RefreshSliceReducer from "./RefreshSlice";

export const store=configureStore({
    reducer:{
        themeKey:themeSliceReducer,
        refreshKey:RefreshSliceReducer
    },
})