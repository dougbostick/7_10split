import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchOrder = createAsyncThunk('getOrder', async (userId) => {
  try {
    const res = await axios.get(`/api/orders/${userId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const checkoutOrder = createAsyncThunk(
  'checkoutOrder',
  async (orderId) => {
    try {
      const res = await axios.put(`/api/orders/${orderId}/checkout`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  'getCartItems',
  async (orderId) => {
    try {
      const res = await axios.get(`/api/lineItems/${orderId}`);
      // console.log('FETCH CART', res.data)
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addToCart = createAsyncThunk('addToCart', async (addObject) => {
  const { orderId, productId, quantity } = addObject;
  try {
    const res = await axios.post('/api/lineItems/add', {
      orderId,
      productId,
      quantity: quantity * 1,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

export const removeFromCart = createAsyncThunk(
  'removeFromCart',
  async (lineItemId) => {
    try {
      const res = await axios.delete(`/api/lineItems/${lineItemId}`);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchOrderHistory = createAsyncThunk(
  'fetchOrderHistory',
  async (userId) => {
    try {
      const res = await axios.get(`/api/orders/${userId}/history`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchPaidItems = createAsyncThunk(
  'fetchPaidItems',
  async (orderArr) => {
    try {
      const paidItems = [];
      for (const order of orderArr) {
        const orderId = order.id;
        const items = await axios.get(`/api/lineItems/${orderId}`);
        paidItems.push({ order, items: items.data });
      }
      return paidItems;
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateQuantityAsync = createAsyncThunk(
  'updateQuantity',
  async (updateObj) => {
    try {
      const { quantity, itemId } = updateObj;
      const res = await axios.put('/api/lineItems/update', {
        quantity: quantity * 1,
        itemId,
      });
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    order: {},
    cart: [],
    orderHistory: [],
    paidItems: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      state.cart = action.payload;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.cart.push(action.payload);
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(checkoutOrder.fulfilled, (state, action) => {
      state.order = action.payload;
    });
    builder.addCase(fetchOrderHistory.fulfilled, (state, action) => {
      state.orderHistory = action.payload;
    });
    builder.addCase(fetchPaidItems.fulfilled, (state, action) => {
      state.paidItems = action.payload;
    });
    builder.addCase(updateQuantityAsync.fulfilled, (state, action) => {
      const itemToUpdate = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemToUpdate.quantity = action.payload.quantity;
    });
  },
});

export const selectCart = (state) => {
  return state.cart.cart;
};

export const selectOrder = (state) => {
  return state.cart.order;
};

export const selectOrderHistory = (state) => {
  return state.cart.orderHistory;
};

export const selectPaidItems = (state) => {
  return state.cart.paidItems;
};

export default cartSlice.reducer;
