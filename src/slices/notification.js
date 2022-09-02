import { createSlice } from "@reduxjs/toolkit";

const notifSlice = createSlice({
    name:'notif',
    initialState: {success:"",error:""},
    reducers : {
        showSuccess (state,action){
            state.success = action.payload
        },

        hideSuccess (state,action){
            state.success = ""
        },

        showError (state,action){
            state.error = action.payload
        },

        hideError (state,action){
            state.error = action.payload
        }
    }
});

export const notifActions = notifSlice.actions;
export default notifSlice;
