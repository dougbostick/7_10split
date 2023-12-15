import React, { useEffect, useState } from 'react';
import CarouselComp from './CarouselComp';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSingleProduct,
  selectSingleProduct,
} from '../products/singleProductSlice';
import { Link } from 'react-router-dom';

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
      <div className="welcome">Welcome, {username}</div>
      <div className="mission">
        <p>
          "Here at 7-10 Split, we aim to provide a top notch shopping experience
          for all your bowling needs. We've been voted #1 best online store for
          bowling 15 years in a row. Thank you to our loyal customers and
          welcome! Let's bowl!" -Sole Engineer, Doug Bostick
        </p>
      </div>

      <CarouselComp />
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
      </div>
    </div>
  );
};

export default Home;
