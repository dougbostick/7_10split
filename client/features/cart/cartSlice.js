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

export const checkoutOrder = createAsyncThunk('checkoutOrder', async (orderId) => {
    try{
        const res = await axios.put(`/api/orders/${orderId}/checkout`)
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

export const fetchOrderHistory = createAsyncThunk('fetchOrderHistory', async(userId) => {
    try{
        const res = await axios.get(`/api/orders/${userId}/history`);
        // console.log('order history fetch', res.data)
        //new Date(stuff)
        return res.data;
    } catch(err){
        console.log(err);
    }
})

export const fetchPaidItems = createAsyncThunk('fetchPaidItems', async (orderArr) => {
    try{
    console.log('ORder ARR', orderArr)

        const paidItems = [];
        for(const order of orderArr){
            const orderId = order.id;
            console.log('Order Id', orderId)
            const items = await axios.get(`/api/lineItems/${orderId}`);
            console.log('ITEMS', items)
            paidItems.push({order, items: items.data});
        }
        return paidItems;
    } catch(err){
        console.log(err);
    }
})

export const cartSlice = createSlice({
    name: 'cart',  
    initialState: {
        order: {},
        cart: [],
        orderHistory: [],
        paidItems: []
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
        builder.addCase(checkoutOrder.fulfilled, (state, action) => {
            state.order = action.payload;
        })
        builder.addCase(fetchOrderHistory.fulfilled, (state, action) => {
            state.orderHistory = action.payload;
        })
        builder.addCase(fetchPaidItems.fulfilled, (state, action) => {
            state.paidItems = action.payload;
        })
    }
});

export const selectCart = (state) => {
    console.log('SELECT CART', state)
    return state.cart.cart
};

export const selectOrder = (state) => {
    console.log('SELECT ORDER', state)
    return state.cart.order
};

export const selectOrderHistory = (state) => {
    return state.cart.orderHistory;
}

export const selectPaidItems = (state) => {
    return state.cart.paidItems;
}

export default cartSlice.reducer;