import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';

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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

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
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Carousel>
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
