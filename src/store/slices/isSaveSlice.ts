import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProdictCurrentI } from "../../interfaces/data";

interface isAuthState {
    basket: ProdictCurrentI[],
    favorites: ProdictCurrentI[],
}


const initialState: isAuthState = {
    basket: [],
    favorites: []
}

export const isSaveSlice = createSlice({
    name: 'save',
    initialState,
    reducers: {
        changeBasketItem: (state, action: PayloadAction<ProdictCurrentI>) => {
            const index = state.basket.findIndex(el => el.id === action.payload.id);
            if(index !== -1){
                const newState = [...state.basket].filter(el => el.id !== action.payload.id);
                state.basket = [...newState];
            } else {
                state.basket.push(action.payload);
            }
        },
    }
})

export default isSaveSlice.reducer;
export const { changeBasketItem } = isSaveSlice.actions;