import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../slices/user";
import toggleSlice from "../slices/toggle";
import notifSlice from "../slices/notification";
import listSlice from "../slices/list";

export const store = configureStore({
    reducer : {
        user : userSlice.reducer,
        toggle : toggleSlice.reducer,
        notif : notifSlice.reducer,
        lists : listSlice.reducer
    }
});