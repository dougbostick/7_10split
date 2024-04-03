import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectProducts,
  fetchProducts,
  sortByCategory,
  selectFilteredProducts,
  searchProducts,
} from './allProductsSlice';
import { selectUser } from '../auth/authSlice';
import {
  fetchOrder,
  selectCart,
  addToCart,
  fetchCartItems,
} from '../cart/cartSlice';
import { Link } from 'react-router-dom';

export default function AllProducts() {
  const [category, setCategory] = useState('');
  const [view, setView] = useState('all');
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const filteredProducts = useSelector(selectFilteredProducts);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (productId) => {
    console.log(productId);
    if (!user.me.id) {
      alert('Please log in/ sign up to use cart!');
    }
    dispatch(fetchOrder(user.me.id)).then((res) => {
      const orderId = res.payload.id;
      dispatch(addToCart({ orderId, productId, quantity: 1 })).then(() =>
        dispatch(fetchCartItems(orderId)).then(() => alert('Added to cart'))
      );
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handlesub', category);
    dispatch(sortByCategory(category));
    setView('filtered');
  };

  useEffect(() => {
    if (search.length) {
      dispatch(searchProducts(search));
      setView('filtered');
    } else {
      setView('all');
    }
  }, [search]);

  const allProductsDiv = products?.length
    ? products.map((product) => {
        return (
          <div key={product.id} className="productDiv">
            <Link className="productLink" to={`/products/${product.id}`}>
              <img className="productImg" src={product.imgUrl} />
            </Link>
            <div className="productText">
              <button
                onClick={() => handleAddToCart(product.id)}
                style={{ marginBottom: '12px' }}
              >
                Add To Cart
              </button>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        );
      })
    : 'no products';

  const filteredProductsDiv = filteredProducts
    ? filteredProducts.map((product) => {
        return (
          <div key={product.id} className="productDiv">
            <Link className="productLink" to={`/products/${product.id}`}>
              <img className="productImg" src={product.imgUrl} />
            </Link>
            <div className="productText">
              <button
                onClick={() => handleAddToCart(product.id)}
                style={{ marginBottom: '12px' }}
              >
                Add To Cart
              </button>
              <div>{product.name}</div>
              <div>${product.price}</div>
            </div>
          </div>
        );
      })
    : 'no filtred products';

  const productsDiv = view === 'all' ? allProductsDiv : filteredProductsDiv;
  return (
    <div>
      <div className="prod-container">
        <div className="filters">
          <form className="prodSearch">
            <input
              className="searchInput"
              placeholder="search products..."
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <form className="prodFilter">
            <select
              className="searchInput"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Products</option>
              <option value="ball">Bowling Balls</option>
              <option value="shoe">Bowlings Shoes</option>
            </select>
            <button onClick={handleSubmit} className="searchInput searchBtn">
              Apply Filter
            </button>
          </form>
        </div>
        {productsDiv}
      </div>
    </div>
  );
}
