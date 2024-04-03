import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSingleProduct,
  selectSingleProduct,
} from '../products/singleProductSlice';
import { Link } from 'react-router-dom';
// import landing from '../../../public/images/landing.png';

const Home = () => {
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const [featuredBall, setFeaturedBall] = useState({});
  const [featuredShoe, setFeaturedShoe] = useState({});

  const randomBallNum = Math.ceil(Math.random() * 15);
  const randomShoeNum = Math.ceil(Math.random() * 24 + 16);

  useEffect(() => {
    dispatch(fetchSingleProduct(randomBallNum)).then((res) =>
      setFeaturedBall(res.payload)
    );
    dispatch(fetchSingleProduct(randomShoeNum)).then((res) =>
      setFeaturedShoe(res.payload)
    );
  }, [dispatch]);

  return (
    <div className="homePage">
      <div className="banner">
        <div className="bannerText">
          <Link to={'/products'} className="bannerBtn">
            Shop Now
          </Link>
          <h1>Bowl Responsibly</h1>
          <h3>Discover the modern bowling online shopping experience.</h3>
        </div>
      </div>
      <div className="confidence">
        <h1 className="confidentText">Choose 7-10 With Confidence</h1>
        <div className="confidentReasons">
          <div className="reason">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '5vmin',
                color: 'rgb(191, 45, 41)',
                marginBottom: '2vmin',
              }}
            >
              local_shipping
            </span>

            <div className="confidentLabel">Free Shipping</div>

            <p className="confidentDetails">Free shipping on orders over $50</p>
          </div>
          <div className="reason">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '5vmin',
                color: 'rgb(191, 45, 41)',
                marginBottom: '2vmin',
              }}
            >
              new_releases
            </span>

            <div className="confidentLabel">Lifetime Warranty</div>

            <p className="confidentDetails">
              Guarantee replacement on any ball or shoe
            </p>
          </div>
          <div className="reason">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '5vmin',
                color: 'rgb(191, 45, 41)',
                marginBottom: '2vmin',
              }}
            >
              calendar_month
            </span>
            <div className="confidentLabel">30-Day Returns</div>

            <p className="confidentDetails">Don't worry, shipping is covered</p>
          </div>
          <div className="reason">
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: '5vmin',
                color: 'rgb(191, 45, 41)',
                marginBottom: '2vmin',
              }}
            >
              support_agent
            </span>
            <div className="confidentLabel">customer support</div>
            <p className="confidentDetails">
              Award-winning customer support team standing by
            </p>
          </div>
        </div>
      </div>
      <div className="shopOptions">
        <Link className="shopBalls" to="/products">
          <button className="shoptBtn">Shop Balls</button>
        </Link>
        <Link className="shopShoes" to="/products">
          <button className="shoptBtn">Shop Shoes</button>
        </Link>
      </div>
      <div className="trending">
        <h1 className="trendingTitle">Now Trending</h1>
        <div className="trendingItems">
          <div className="featuredItem">
            <Link className="featureLink" to={`/products/${featuredBall.id}`}>
              <img className="featuredItemImg" src={featuredBall.imgUrl} />
            </Link>
            <div className="featuredText">
              <div>{featuredBall.name}</div>
              <div>${featuredBall.price}</div>
            </div>
          </div>
          <div className="featuredItem">
            <Link className="featureLink" to={`/products/${featuredShoe.id}`}>
              <img className="featuredItemImg" src={featuredShoe.imgUrl} />
            </Link>
            <div className="featuredText">
              <div>{featuredShoe.name}</div>
              <div>${featuredShoe.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
