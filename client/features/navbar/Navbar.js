import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };
  const user = useSelector((state) => state.auth.me);
  // console.log(user)

  return (
    <div>
      <h1>7-10 Split</h1>
      <nav>
        {isLoggedIn ? (
          <div>
            {/* The navbar will show these links after you log in */}
            <Link to="/home">Home</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            <Link to='/products'>Products</Link>
            <Link to={`/cart/${user.id}`}>Cart</Link>
            <Link to='/orderhistory'>Order History</Link>
          </div>
        ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to='/products'>Products</Link>
            <Link to='/cart'>Cart</Link>

          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
