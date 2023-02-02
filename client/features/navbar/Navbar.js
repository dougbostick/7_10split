import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../app/store";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate("/login");
  };
  const user = useSelector((state) => state.auth.me);
  // console.log(user)

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div className="navBar">
            <div className="leftNav">
              <Link to="/home">
                {" "}
                <h1>7-10 Split</h1>
              </Link>
            </div>
            <div className="rightNav">
              <button type="button" onClick={logoutAndRedirectHome}>
                Logout
              </button>
              <Link to="/products">Products</Link>
              <Link to={`/cart/${user.id}`}>
                <span class="material-symbols-outlined" style={{fontSize: '38px'}}>
                  shopping_cart_checkout
                </span>
              </Link>
              <Link to="/orderhistory">Order History</Link>
            </div>
          </div>
        ) : (
          <div className="navBar">
            <div className="leftNav">
              <h1>7-10 Split</h1>
            </div>
            <div className="rightNav">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/products">Products</Link>
              <Link to="/cart">
                <span class="material-symbols-outlined" style={{fontSize: '38px'}}>
                  shopping_cart_checkout
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
