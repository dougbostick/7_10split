import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('getProducts', async () => {
    try{
        const res = await axios.get('/api/products');
        // console.log('FETCH', res.data)
        return res.data;
    } catch (err){
        console.log(err);
    }
});

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        allProducts: [],
        filteredProducts: []
    },
    reducers: {
        sortByCategory(state, action){
            console.log('SORT REDUCER')
            if(action.payload === 'all'){
                state.filteredProducts = state.allProducts;
            } else {
                state.filteredProducts = state.allProducts.filter((product) => product.category === action.payload)

            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // console.log('BUILDER', action.payload)
            state.allProducts = action.payload;
        });
    }
})

export const { sortByCategory } = productsSlice.actions;

export const selectProducts = (state) => {
    console.log('SELECT PRODUCTS', state)
    return state.products.allProducts;
}

export const selectFilteredProducts = (state) => {
    return state.products.filteredProducts;
}

    
export default productsSlice.reducer;