import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSingleProduct,
  selectSingleProduct,
} from "../products/singleProductSlice";

const Home = () => {
  const username = useSelector((state) => state.auth.me.username);
  const dispatch = useDispatch();
  const [featuredBall, setFeaturedBall] = useState({});
  const [featuredShoe, setFeaturedShoe] = useState({});

  console.log(featuredBall);
  console.log(featuredShoe);



  const randomBallNum = Math.ceil(Math.random() * 15);
  console.log(randomBallNum);
  const randomShoeNum = Math.ceil(Math.random() * 24 + 16);
  console.log(randomShoeNum);

  useEffect(() => {
    dispatch(fetchSingleProduct(randomBallNum)).then((res) => setFeaturedBall(res.payload));
    dispatch(fetchSingleProduct(randomShoeNum)).then((res) => setFeaturedShoe(res.payload));
  }, [dispatch])

  return (
    <div>
      <div>
        <h3>Welcome, {username}</h3>
      </div>
      <div>
        <h3>Featured Ball</h3>
        {featuredBall.name}
      </div>
      <div>
        <h3>Featured Shoes</h3>
        {featuredShoe.name}
      </div>
    </div>
  );
};

export default Home;
