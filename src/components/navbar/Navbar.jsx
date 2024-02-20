/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import AuthPopup from "components/auth/AuthPopup";
import SignupAuthPopup from "components/auth/SignupAuthPopup";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import { getUserDetails } from "redux/actions";
import {
  changeSearchText,
  loginUser,
  setAuthPopup,
  setSignupAuthPopup,
  userSignupEmail,
  verifyOtp,
} from "redux/auth/actions";
import { getHomeScreenData } from "redux/product/actions";

const Navbar = ({
  currentUser,
  sendOtp,
  verifyUserOtp,
  getLoggedInUserDetails,
  setSearchText,
  authPopupState,
  signupPopupState,
  changePopupState,
  changeSignupPopupState,
  getHomeScreenDetails,
  homeScreenData,
  keyword,
}) => {
  const [show, setshow] = useState(false);
  const history = useNavigate();
  const [text, settext] = useState("");
  const {
    // brands,
    category,
  } = homeScreenData;

  const closeMenu = () => {
    setshow(false);
  };
  useEffect(() => {
    if (currentUser && !currentUser._id) getLoggedInUserDetails(history);
  }, [currentUser, getLoggedInUserDetails, history]);

  useEffect(() => {
    getHomeScreenDetails();
  }, [getHomeScreenDetails]);

  useEffect(() => {
    if (keyword && keyword.length > 0) history("/products");
    settext(keyword);
  }, [keyword]);
  // search after delay
  React.useEffect(() => {
    const setData = setTimeout(() => {
      setSearchText(text);
    }, 1500);

    return () => clearTimeout(setData);
  }, [text, setSearchText]);
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      // Hide register button if user data is stored in localStorage
      changeSignupPopupState(false);
    }
  }, [changeSignupPopupState]);

  return (
    <>
      <div className="header">
        <nav className="navbar navbar-expand-lg nav-section">
          <div className="container">
            <Link
              className="navbar-brand img-nav"
              to="/"
              onClick={() => {
                setSearchText("");
              }}
            >
              <img
                src="../asstes/img/logo/logo.png"
                alt="logo"
                className="pe-3"
              />
            </Link>
            <button
              className="navbar-toggler btn-nav"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_1"
              aria-controls="navbar_1"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setshow(!show)}
            >
              {/* <span className="navbar-toggler-icon" /> */}
              <i className="fas fa-bars" />
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              id="navbar_1"
              tabIndex="-1"
            >
              <ul className="navbar-nav ms-auto  nav-ul">
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/"
                    onClick={() => {
                      setSearchText("");
                      closeMenu();
                    }}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown position-static">
                  <Link
                    className="nav-link dropdown-toggle category-box"
                    id=""
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Category
                    <span>
                      {" "}
                      <i className="fas fa-chevron-right chevron-right-arrow" />
                    </span>
                  </Link>

                  {Boolean(category?.length) && (
                    <ul className="dropdown-menu ">
                      {category?.map((elem) => (
                        <Link
                          to={`/products/category=${elem._id}`}
                          key={elem._id}
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <li>
                            <div
                              onClick={() => {
                                closeMenu();
                              }}
                              className="dropdown-item"
                            >
                              {elem.name}
                            </div>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>

                {/* <li className="nav-item dropdown">
                  <a className="nav-link ">Brand</a>
                  {Boolean(brands.length) && (
                    <ul className="dropdown-menu">
                      {brands.map((brand) => (
                        <li key={brand._id}>
                          <Link to={`/products/brand=${brand.name}`}>
                            <a className="dropdown-item">{brand.name}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/blog"
                    onClick={() => {
                      setSearchText('');
                    }}
                  >
                    Blog
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/user/wishlist"
                    onClick={() => {
                      setSearchText("");
                      closeMenu();
                    }}
                  >
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/contact-us"
                    onClick={() => {
                      setSearchText("");
                      closeMenu();
                    }}
                  >
                    Contact
                  </Link>
                </li>

                {/* <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/about-us"
                    onClick={() => {
                      setSearchText('');
                      closeMenu();
                    }}
                  >
                    About
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="min-hed">
        <div className="container">
          <div className="head-section" style={{ margin: "auto" }}>
            {/* <div className=" col-md-3  col-sm-0 " /> */}
            <div className="col-md-6 col-sm-6">
              <div action="" className="inputcontainer">
                <input
                  type="text"
                  placeholder="Search for product"
                  value={text}
                  onChange={(e) => settext(e.target.value)}
                />
                <button type="button">
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 ml-3 custom-width ">
              <div className="login-section">
                {!currentUser && !localStorage.getItem("auth_token") ? (
                  <>
                    <a>
                      <p
                        className="login-btn "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => changeSignupPopupState(true)}
                      >
                        Register
                      </p>
                    </a>
                    <a>
                      <p
                        className="login-btn "
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => changePopupState(true)}
                      >
                        Login
                      </p>
                    </a>
                  </>
                ) : (
                  <Link
                    to="/user/profile"
                    onClick={() => {
                      setSearchText("");
                    }}
                  >
                    <p
                      className="login-cart"
                      style={{
                        margin: "0 15px",
                        // borderRadius: '50%',
                        // width: 10,
                      }}
                    >
                      <a>
                        <i className="bi bi-person" />
                        {/* Login */}
                      </a>
                    </p>
                  </Link>
                )}
                <Link
                  to="/user/cart"
                  onClick={() => {
                    setSearchText("");
                  }}
                >
                  <p className="shoping-cart ">
                    <a>
                      <i className="bi bi-cart2" />
                    </a>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AuthPopup
        sendOtp={sendOtp}
        verifyUserOtp={verifyUserOtp}
        authPopupState={authPopupState}
        changePopupState={changePopupState}
      />
      <SignupAuthPopup
        sendOtp={sendOtp}
        verifyUserOtp={verifyUserOtp}
        signupPopupState={signupPopupState}
        changeSignupPopupState={changeSignupPopupState}
      />
    </>
  );
};
const mapStateToProps = ({ user, product }) => {
  const { currentUser, authPopupState, keyword, signupPopupState } = user;

  const { homeScreenData } = product;
  return {
    currentUser,
    authPopupState,
    homeScreenData,
    keyword,
    signupPopupState,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getHomeScreenDetails: () => dispatch(getHomeScreenData()),
  setSearchText: (text) => dispatch(changeSearchText(text)),
  getLoggedInUserDetails: (hsitory) => dispatch(getUserDetails(hsitory)),
  sendOtp: (mobileNo) => dispatch(loginUser(mobileNo)),
  verifyUserOtp: (otpValues, history) =>
    dispatch(verifyOtp(otpValues, history)),
  userSignupEmail: (otpValues, history) =>
    dispatch(userSignupEmail(otpValues, history)),
  changePopupState: (state) => dispatch(setAuthPopup(state)),
  changeSignupPopupState: (state) => dispatch(setSignupAuthPopup(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
