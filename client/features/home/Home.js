import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../products/singleProductSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const [featuredBall, setFeaturedBall] = useState({});
  const [featuredShoe, setFeaturedShoe] = useState({});

  // console.log(featuredBall);
  // console.log(featuredShoe);
  // console.log(images)

  const randomBallNum = Math.ceil(Math.random() * 15);
  // console.log(randomBallNum);
  const randomShoeNum = Math.ceil(Math.random() * 24 + 16);
  // console.log(randomShoeNum);

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
      <div className="featureDiv">
        <div className="featureInfo">
          <h3>Featured Ball</h3>
          <div className="expoDiv">
            <img
              className="explosion"
              src={"/images/explosion-clip-art-15.png"}
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
              style={{ marginTop: "18px" }}
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
              src={"/images/explosion-clip-art-52.png"}
            />
            <div className="expoText" style={{ color: "black" }}>
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
            style={{ marginTop: "18px" }}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
