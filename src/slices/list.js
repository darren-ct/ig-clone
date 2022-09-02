import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
    name:'lists',
    initialState: {modal:[],home:[],story:[],explore:[],profile:[]},
    reducers : {
        fillModal (state,action){
            state.modal = action.payload
        },

        closeModal (state,action){
            state.modal = []
        }
    }
});

export const listActions = listSlice.actions;
export default listSlice;
