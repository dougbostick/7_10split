import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from  'react-router-dom';
import { selectSingleProduct, fetchSingleProduct } from "./singleProductSlice";
import { selectUser } from '../auth/authSlice';
import { fetchOrder, addToCart } from '../cart/cartSlice';


export default function SingleProduct() {

const { id } = useParams();
const dispatch = useDispatch();
const singleProduct = useSelector(selectSingleProduct)
const user = useSelector(selectUser);
// console.log(user)

useEffect(() => {
    dispatch(fetchSingleProduct(id));
}, [dispatch])

const handleAddToCart = (productId) => {
    // console.log(productId)
    if(!user.me.id) return 'not logged in';
    dispatch(fetchOrder(user.me.id)).then((res) => {
    //   console.log('handle cart', res.payload);
      const orderId = res.payload.id;
      dispatch(addToCart({orderId, productId}))
    });
  }

  return (
  <div>
    <h1>{singleProduct.name}</h1>
    <img src={singleProduct.imgUrl}></img>
    <div>{singleProduct.description}</div>
    <button onClick={() => handleAddToCart(singleProduct.id)}>Add To Cart</button>
  </div>
  )};
