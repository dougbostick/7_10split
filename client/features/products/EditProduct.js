import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from  'react-router-dom';
import { selectSingleProduct, fetchSingleProduct, editSingleProduct } from "./singleProductSlice";
import { selectUser } from '../auth/authSlice';



export default function EditProduct() {

const [name, setName] = useState('');
const [imgUrl, setImageUrl] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0);
    
const { id } = useParams();
const dispatch = useDispatch();
const singleProduct = useSelector(selectSingleProduct)
const user = useSelector(selectUser);
// console.log(user)

useEffect(() => {
    dispatch(fetchSingleProduct(id)).then((res) => {
        const {name, imgUrl, description, price} = res.payload;
        setName(name);
        setImageUrl(imgUrl);
        setDescription(description);
        setPrice(price);
    });
}, [id])

const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(editSingleProduct({id, user, name, imgUrl, description, price}))
}
  return (
  <div>
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
        name='productName'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label>Image Url:</label>
        <input 
        name='imgUrl'
        value={imgUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        />
        <label>Description:</label>
        <input 
        name='productDescription'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price:</label>
        <input 
        name='productPrice'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
    <button type='submit'>Submit Edits</button>

    </form>
  </div>
  )};
