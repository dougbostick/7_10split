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

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div className="navBar">
            <div className="leftNav">
              <Link to="/home">
                {' '}
                <img
                  src="/images/7 - 1 SPLiT.png"
                  style={{ height: '100px', width: '165px' }}
                />
              </Link>
            </div>
            <div className="rightNav">
              <Link to="/products">
                Products
                {/* <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '38px' }}
                >
                  shopping_bag
                </span> */}
              </Link>
              <Link to="/orderhistory">
                Order History
                {/* <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '38px' }}
                >
                  export_notes
                </span> */}
              </Link>
              <button
                type="button"
                onClick={logoutAndRedirectHome}
                className="logoutBtn"
                style={{
                  background: 'none',
                  color: 'black',
                  fontWeight: 'normal',
                  fontSize: '16px',
                }}
              >
                Logout
                {/* <span className="material-symbols-outlined">logout</span> */}
              </button>
              <Link to={`/cart/${user.id}`}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '38px' }}
                >
                  shopping_cart_checkout
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="navBar">
            <div className="leftNav">
              <Link to="/home">
                {' '}
                <img
                  src="/images/7 - 1 SPLiT.png"
                  style={{ height: '100px', width: '165px' }}
                />
              </Link>
            </div>
            <div className="rightNav">
              <Link to="/products">Products</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
