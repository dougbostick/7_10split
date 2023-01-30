import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrderHistory, fetchPaidItems, selectPaidItems } from './cartSlice';


export default function OrderHistory() {

    const dispatch = useDispatch();
    const paidItems = useSelector(selectPaidItems)
    const user = useSelector((state) => state.auth.me);

    console.log("PAID ITEMS", paidItems)
    useEffect(() => {
        dispatch(fetchOrderHistory(user.id)).then((orderArr) => {
            // console.log(orderArr)
            dispatch(fetchPaidItems(orderArr.payload))
        })
    }, [dispatch])

    const paidItemsDiv = paidItems?.length ? paidItems.map((orderInfo) => {
     
        const date = Date(orderInfo.order.updatedAt).slice(0, 25);
     
        return (
            <div>
                <h2>Purchased on {date}</h2>
               
               {orderInfo.items.map((item) => {
                   return (
                    <div>{item.product.name}</div>
                   ) 
                })}
               
            </div>
        )
    }) : 'You need to shop first!'
  return (
    <div>
        <h1>Order History</h1>
        {paidItemsDiv}
    </div>
  )
}
