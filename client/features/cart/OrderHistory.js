import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchOrderHistory,
  fetchPaidItems,
  selectPaidItems,
} from './cartSlice';

export default function OrderHistory() {
  const dispatch = useDispatch();
  const paidItems = useSelector(selectPaidItems);
  const user = useSelector((state) => state.auth.me);

  // console.log("PAID ITEMS", paidItems)
  useEffect(() => {
    dispatch(fetchOrderHistory(user.id)).then((orderArr) => {
      // console.log(orderArr)
      dispatch(fetchPaidItems(orderArr.payload));
    });
  }, [dispatch]);

  const paidItemsDiv = paidItems?.length ? (
    paidItems.map((orderInfo) => {
      const date = Date(orderInfo.order.updatedAt).slice(0, 25);
      return (
        <div key={orderInfo.id}>
          <h2 style={{ marginLeft: '58px' }}>Purchased on {date}</h2>
          {orderInfo.items.map((item) => {
            return (
              <div className="cartDiv" key={item.id}>
                <div className="cartBoxDiv">
                  <div className="cartBox" style={{ marginBottom: '8px' }}>
                    <h4>{item.product.name}</h4>
                    <div>Quantity: {item.quantity}</div>
                    <div className="total">
                      Total: ${item.quantity * item.product.price}
                      <div style={{ marginTop: '8px', fontSize: '16px' }}>
                        ${item.product.price} x {item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    })
  ) : (
    <div className="gutterMessage">
      <h3>You Need To Shop First</h3>
      <img
        src={'/images/gutterball.jpeg'}
        style={{ width: '350px', height: '250px' }}
      />
    </div>
  );
  return (
    <div className="orderHistory">
      <h1 style={{ marginLeft: '55px' }}>Order History</h1>
      {paidItemsDiv}
    </div>
  );
}
