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
              <button type="button" onClick={logoutAndRedirectHome} className='logoutBtn'>
                <span className="material-symbols-outlined">logout</span>
              </button>
              <Link to="/products">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "38px" }}
                >
                  shopping_bag
                </span>
              </Link>
              <Link to={`/cart/${user.id}`}>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "38px" }}
                >
                  shopping_cart_checkout
                </span>
              </Link>
              <Link to="/orderhistory">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "38px" }}
                >
                  export_notes
                </span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="navBar">
            <div className="leftNav">
              <Link to="/home">
                {" "}
                <h1>7-10 Split</h1>
              </Link>
            </div>
            <div className="rightNav">
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
              <Link to="/products">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: "38px" }}
                >
                  shopping_bag
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
