import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, fetchProducts } from './allProductsSlice';
import { selectUser } from '../auth/authSlice'
import { fetchOrder, selectCart, addToCart } from '../cart/cartSlice';
import { Link } from 'react-router-dom'

export default function AllProducts() {

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const user = useSelector(selectUser);
  const cart = useSelector(selectCart);

  
  console.log(user.me)
  console.log('cart', cart)


useEffect(() => {
  dispatch(fetchProducts());
}, [dispatch])

// useEffect(() => {
//   if(user.me.id) {
//   dispatch(fetchCart(user.me.id));
//   }
// }, [dispatch])

const handleAddToCart = (productId) => {
  console.log(productId)
  if(!user.me.id) return 'not logged in';
  dispatch(fetchOrder(user.me.id)).then((res) => {
    console.log('handle cart', res.payload);
    const orderId = res.payload.id;
    dispatch(addToCart({orderId, productId}))
  });
}

  const productsDiv = products ? products.map((product) => {
    return (
      <div key={product.id} className='productDiv'>  
      <Link to={`/products/${product.id}`} >
          <img src={product.imgUrl} className='productImg'/>
          </Link>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>{product.price}</div>
          <button onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
      </div>
    )
  }) : null;

  return (
    <div>
    <h1>All Products</h1>
    <div>{products.length ? productsDiv : 'no products'}</div>
    </div>
  )
}
