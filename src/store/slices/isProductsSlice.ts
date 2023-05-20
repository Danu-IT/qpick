import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProdictCurrentI, ProdictI } from "../../interfaces/data";

interface isProductsState {
    filteredId: number;
    fullProducts: ProdictI[];
    filteredProducts: ProdictI[];
    filteredProductsCurrent: ProdictCurrentI[];
    colorIndex: number;
}

const initialState: isProductsState = {
    filteredId: 1,
    fullProducts: [],
    filteredProducts: [],
    filteredProductsCurrent: [],
    colorIndex: 0,
}

export const isProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        changeFilteredId: (state, action: PayloadAction<number>) => {
            state.filteredId = action.payload;
        },
        fetchFullProducts: (state, action: PayloadAction<ProdictI[]>) => {
            state.fullProducts = action.payload;
        },
        changeFilteredProducts: (state, action: PayloadAction<ProdictI[]>) => {
            state.filteredProducts = action.payload;
        },
        changeFilteredProductsCurrent: (state, action: PayloadAction<ProdictCurrentI[]>) => {
            state.filteredProductsCurrent = action.payload;
        },
        changeColorIndex: (state, action: PayloadAction<number>) => {
            state.colorIndex = action.payload;
        }
    }
})

export default isProductsSlice.reducer;
export const { changeFilteredId, fetchFullProducts, changeFilteredProducts, changeFilteredProductsCurrent, changeColorIndex } = isProductsSlice.actions;