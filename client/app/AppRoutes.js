import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import AllProducts from '../features/products/AllProducts';
import Cart from '../features/cart/Cart';
import { me } from './store';
import SingleProduct from '../features/products/SingleProduct';
import EditProduct from '../features/products/EditProduct';
import OrderHistory from '../features/cart/OrderHistory';
import CarouselComp from '../features/home/CarouselComp';

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route to="/home" element={<Home />} />
          <Route path="/cart/:userId" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
          <Route path="/caro" element={<CarouselComp />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
