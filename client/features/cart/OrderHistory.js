import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchOrderHistory,
  fetchPaidItems,
  selectPaidItems,
} from "./cartSlice";

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

  const paidItemsDiv = paidItems?.length
    ? paidItems.map((orderInfo) => {
        const date = Date(orderInfo.order.updatedAt).slice(0, 25);

//         return (
//     <div key={item.id} className="cartBoxDiv">
//       <h1>{item.product.name}</h1>
//       <div className="cartBox">
//         <img src={item.product.imgUrl} className="productImg" />
//         <div>Quantity: {item.quantity}</div>
//         <div className="total">
//           Total: ${item.quantity * item.product.price}
//           <div style={{ marginTop: "8px", fontSize: '16px' }}>
//             ${item.product.price} x {item.quantity}
//           </div>
//         </div>
//       </div>
//     </div>
//   );

        return (
          <div>
            <h2 style={{marginLeft: '28px'}}>Purchased on {date}</h2>
            {orderInfo.items.map((item) => {
             return (
                <div className="cartDiv">
                <div key={item.id} className="cartBoxDiv">
                  <div className="cartBox" style={{marginBottom: '8px'}}>
                    <h4>{item.product.name}</h4>
                    <div>Quantity: {item.quantity}</div>
                    <div className="total">
                      Total: ${item.quantity * item.product.price}
                      <div style={{ marginTop: "8px", fontSize: '16px' }}>
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
    : "You need to shop first!";
  return (
    <div>
      <h1>Order History</h1>
      {paidItemsDiv}
    </div>
  );
}

