import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <div>
      <h3>Welcome, {username}</h3>
      </div>
      <div>
        <hr/>
        Ball of the week
      </div>
      <div>
      <hr/>
        Shoe of the week
      </div>
    </div>
  );
};

export default Home;
