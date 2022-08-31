import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name:'toggle',
    initialState: {
        logoDrop : false,
        searchDrop : false,
        likesDrop : false,
        postModal : false,
        iconDrop : false
    },
    reducers : {
        toggleLogo (state){
            state.logoDrop = !state.logoDrop
        },

        toggleSearch(state){
            state.searchDrop = !state.searchDrop
        },

        toggleLikes(state){
            state.likesDrop = !state.likesDrop
        },

        toggleIcon(state){
            state.iconDrop = !state.iconDrop
        },

        togglePost(state){
            state.postModal = !state.postModal
        }
    }
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;