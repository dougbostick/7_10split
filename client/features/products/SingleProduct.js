import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleProduct, fetchSingleProduct } from './singleProductSlice';
import { selectUser } from '../auth/authSlice';
import { fetchOrder, addToCart, fetchCartItems } from '../cart/cartSlice';
import EditProduct from './EditProduct';
import { useNavigate, Link } from 'react-router-dom';

export default function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector(selectSingleProduct);
  const user = useSelector(selectUser);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    if (!user.me.id) return 'not logged in';
    dispatch(fetchOrder(user.me.id)).then((res) => {
      const orderId = res.payload.id;
      dispatch(addToCart({ orderId, productId, quantity })).then(() =>
        dispatch(fetchCartItems(orderId))
      );
    });
  };

  return (
    <div className="singleProductDiv">
      <div className="singleLeft">
        <img src={singleProduct.imgUrl} className="singleProductImg"></img>
      </div>
      <div className="singleRight">
        <h2>{singleProduct.name}</h2>
        <div style={{ fontSize: '22px' }}>{singleProduct.description}</div>
        <div style={{ fontSize: '22px' }}>${singleProduct.price}</div>

        <form>
          <label htmlFor="quantity">Qunantity:</label>
          <input
            name="quantity"
            type="number"
            min={1}
            max={100}
            defaultValue={1}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </form>

        <button
          style={{ width: '25%' }}
          onClick={() => handleAddToCart(singleProduct.id)}
        >
          Add To Cart
        </button>
        {isAdmin ? (
          <Link to={`/products/${id}/edit`} style={{ fontSize: '22px' }}>
            {' '}
            Edit Product Details{' '}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
