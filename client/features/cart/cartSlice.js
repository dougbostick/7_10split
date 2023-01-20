import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrder = createAsyncThunk('getOrder', async (userId) => {
    try{
        const res = await axios.get(`/api/orders/${userId}`)
        return res.data;
    } catch(err){
        console.log(err);
    }
})

//i think these need a separate slice
export const fetchCartItems = createAsyncThunk('getCartItems', async (orderId) => {
    try{
        const res = await axios.get(`/api/lineItems/${orderId}`);
        console.log('FETCH CART', res.data)
        return res.data;
    } catch(err){
        console.log(err);
    }
})

export const addToCart = createAsyncThunk('addToCart', async (addObject) => {
    const { orderId, productId } = addObject;
    try{
        const res = await axios.post('/api/lineItems/add', {orderId, productId, quantity: 1})
        return res.data;
    } catch(err){
        console.log(err);
    }
})

export const cartSlice = createSlice({
    name: 'cart',  
    initialState: {
        order: {},
        cart: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchOrder.fulfilled, (state, action) => {
            state.order = action.payload;
        });
        builder.addCase(fetchCartItems.fulfilled, (state, action) => {
            state.cart = action.payload;
        })
        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.cart.push(action.payload);
        })
    }
});

export const selectCart = (state) => {
    console.log('SELECT CART', state)
    return state.cart
};

export const selectOrder = (state) => {
    console.log('SELECT ORDER', state)
    return state.order
};

export default cartSlice.reducer;