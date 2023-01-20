import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('getProducts', async () => {
    try{
        const res = await axios.get('/api/products');
        console.log('FETCH', res.data)
        return res.data;
    } catch (err){
        console.log(err);
    }
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            console.log('BUILDER', action.payload)
            return action.payload;
        });
    }
})

export const selectProducts = (state) => {
    console.log('SELECT PRODUCTS', state)
    return state.products;
}

    
export default productsSlice.reducer;