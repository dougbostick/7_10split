import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleProduct = createAsyncThunk('getProduct', async (id) => {
    try{
        const res = await axios.get(`/api/products/${id}`);
        console.log('FETCH', res.data)
        return res.data;
    } catch (err){
        console.log(err);
    }
});

export const productSlice = createSlice({
    name: 'single product',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            console.log('BUILDER', action.payload)
            return action.payload;
        });
    }
})

export const selectSingleProduct = (state) => {
    console.log('SELECT PRODUCTS', state)
    return state.singleProduct;
}

    
export default productSlice.reducer;