import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState: null,
    reducers : {
        login (state,action){
            return action.payload
        },

        logout(state,action){
            return null
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice;
