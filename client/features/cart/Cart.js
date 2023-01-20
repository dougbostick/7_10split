import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, fetchOrder, selectCart, selectOrder } from './cartSlice';
import { useParams } from 'react-router-dom';

export default function Cart() {

const user = useSelector((state) => state.auth.me);
const { userId } = useParams();
const dispatch = useDispatch();
const order = useSelector(selectOrder);
const cart = useSelector(selectCart);
console.log('CART', cart)
useEffect(() => {
    dispatch(fetchOrder(userId)).then((order) => dispatch(fetchCartItems(order.payload.id)))
}, [dispatch])

const cartDiv = cart?.cart.length ? cart.cart.map((item) => {
    console.log('CARTDIV', item)
    return (
        <div key={item.id}>
            <h1>{item.product.name}</h1>
            <div>{item.product.description}</div>
            <div>${item.product.price}</div>
            <div>Quantity: {item.quantity}</div>
            <div>Total: ${item.quantity * item.product.price}</div>
        </div>
    )
}) : 'no cart items';
  return (
    <div>
        <h1>{user.username}'s cart</h1>
        {cartDiv}
    </div>
  )
}
