import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from  'react-router-dom';
import { selectSingleProduct, fetchSingleProduct } from "./singleProductSlice";

export default function SingleProduct() {

const { id } = useParams();
const dispatch = useDispatch();
const singleProduct = useSelector(selectSingleProduct)
console.log(singleProduct);

useEffect(() => {
    dispatch(fetchSingleProduct(id));
}, [dispatch])
  return <div>
    {singleProduct.name}
  </div>;
}
