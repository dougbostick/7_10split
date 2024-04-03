import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCartItems,
  fetchOrder,
  selectCart,
  selectOrder,
  checkoutOrder,
  updateQuantityAsync,
  removeFromCart,
} from './cartSlice';
import { useParams, Link } from 'react-router-dom';

export default function Cart() {
  const user = useSelector((state) => state.auth.me);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const order = useSelector(selectOrder);
  const cart = useSelector(selectCart);

  useEffect(() => {
    dispatch(fetchOrder(userId)).then((order) =>
      dispatch(fetchCartItems(order.payload.id))
    );
  }, [dispatch]);

  const updateQuantity = (quantity, itemId) => {
    console.log('UPDATE', quantity, itemId);
    dispatch(updateQuantityAsync({ quantity, itemId }));
  };

  const handleCheckout = () => {
    dispatch(checkoutOrder(order.id)).then((order) =>
      dispatch(fetchCartItems(order.payload.id))
    );
  };

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };
  const cartDiv = cart?.length ? (
    cart.map((item) => {
      // console.log("CARTDIV", item);
      return (
        <div key={item.id} className="cartBoxDiv">
          <h3>{item.product.name}</h3>
          <div className="cartBox">
            <img src={item.product.imgUrl} className="productImg" />
            <form>
              <label htmlFor="quantity">Qunantity:</label>
              <input
                name="quantity"
                type="number"
                min={1}
                max={100}
                defaultValue={item.quantity}
                onChange={(e) => updateQuantity(e.target.value, item.id)}
              />
            </form>
            <div className="total">
              Total: $
              {Math.round(item.quantity * item.product.price * 100) / 100}
              <div style={{ marginTop: '8px', fontSize: '16px' }}>
                ${item.product.price} x {item.quantity}
              </div>
            </div>

            <span
              style={{ cursor: 'pointer' }}
              className="material-symbols-outlined"
              onClick={() => handleDelete(item.id)}
            >
              delete
            </span>
          </div>
        </div>
      );
    })
  ) : (
    <div className="gutterMessage">
      <h3>No Cart Items</h3>
      <Link to="/products">Shop Now</Link>
    </div>
  );

  return (
    <div>
      <div className="cartDiv">
        {order.status === 'pending' ? (
          cartDiv
        ) : (
          <div className="gutterMessage">
            <h3>No Cart Items</h3>
            <Link to="/products">Shop Now</Link>
          </div>
        )}
        {cart?.length && order.status === 'pending' ? (
          <button onClick={handleCheckout} style={{ marginTop: '12px' }}>
            Checkout
          </button>
        ) : null}
      </div>
    </div>
  );
}
