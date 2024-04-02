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
          <button className="bannerBtn">Shop Now</button>
          <h1>Bowl Responsibly</h1>
          <h3>Discover the modern bowling online shopping experience.</h3>
        </div>
      </div>
      <div className="confidence">
        <h1 className="confidentText">Choose 7-10 With Confidence</h1>
        <div className="confidentReasons">
          <div className="reason">
            <span
              class="material-symbols-outlined"
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
              class="material-symbols-outlined"
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
              class="material-symbols-outlined"
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
              class="material-symbols-outlined"
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
      {/* <div className="welcome">Welcome, {username}</div>
      <div className="mission">
        <p>
          "Here at 7-10 Split, we aim to provide a top notch shopping experience
          for all your bowling needs. We've been voted #1 best online store for
          bowling 15 years in a row. Thank you to our loyal customers and
          welcome! Let's bowl!" -Sole Engineer, Doug Bostick
        </p>
      </div>
      <div className="featureDiv">
        <div className="featureInfo">
          <h3>Featured Ball</h3>
          <div className="expoDiv">
            <img
              className="explosion"
              src={'/images/explosion-clip-art-15.png'}
            />
            <div className="expoText">
              <h5>15% OFF!!!</h5>
              <h5>
                Buy now for: {Math.round(featuredBall.price * 0.85 * 100) / 100}
              </h5>
            </div>
          </div>
        </div>
        <div className="featureDescription">
          <p>"{featuredBall.description}"</p>
        </div>
        <div className="featureItem">
          {featuredBall.name}
          <Link to={`/products/${featuredBall.id}`}>
            <img
              src={featuredBall.imgUrl}
              className="featImg"
              style={{ marginTop: '18px' }}
            />
          </Link>
        </div>
      </div>
      <div className="featureDiv">
        <div className="featureInfo">
          <h3>Featured Shoe</h3>
          <div className="expoDiv">
            <img
              className="explosion"
              src={'/images/explosion-clip-art-52.png'}
            />
            <div className="expoText" style={{ color: 'black' }}>
              <h5>15% OFF!!!</h5>
              <h5>
                Buy now for: {Math.round(featuredShoe.price * 0.85 * 100) / 100}
              </h5>
            </div>
          </div>
        </div>
        <div className="featureDescription">
          <p>"{featuredShoe.description}"</p>
        </div>
        <div className="featureItem">
          {featuredShoe.name}
          <Link to={`/products/${featuredShoe.id}`}>
            <img
              src={featuredShoe.imgUrl}
              className="featImg"
              style={{ marginTop: '18px' }}
            />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
