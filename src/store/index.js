import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../slices/user";
import toggleSlice from "../slices/toggle";

export const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        toggle : toggleSlice.reducer
    }
});