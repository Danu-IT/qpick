import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProdictI } from "../../interfaces/data";

interface isProductsState {
    filteredId: number;
    fullProducts: ProdictI[];
    filteredProducts: ProdictI[];
}

const initialState: isProductsState = {
    filteredId: 1,
    fullProducts: [],
    filteredProducts: [],
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
        }
    }
})

export default isProductsSlice.reducer;
export const { changeFilteredId, fetchFullProducts, changeFilteredProducts } = isProductsSlice.actions;