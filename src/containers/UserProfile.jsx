import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  changeSearchText,
  logOutUser,
  setForgotPopup,
  updateUserDetails,
} from "redux/auth/actions";
import ForgotAuthPopup from "components/auth/ForgotAuthPopup";

function UserProfile({
  currentUser,
  logOut,
  keyword,
  setSearchText,
  forgotAuthPop,
  changeForgotPass,
  updateDetails,
}) {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    mobileNo: "",
    email: "",
  });

  useEffect(() => {
    if (currentUser)
      setUserDetails({
        firstName: currentUser.firstName,
        lastName: currentUser?.lastName,
        mobileNo: currentUser.mobileNo,
        email: currentUser.email,
      });
  }, [currentUser]);

  useEffect(() => {
    setSearchText("");
  }, []);

  useEffect(() => {
    //  if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  return (
    <>
      <div>
        <div className="container-xxl ">
          <div className="profile-section">
            <div className="row">
              <div
                className="col-lg-2 col-md-4 p-0 order-lg-1 order-2 order-md-1"
                style={{ borderRight: "1px solid #E9E9E9 " }}
              >
                <div className="profile-left-body">
                  <div className="d-flex py-2">
                    <Link to="/user/orders" className="d-flex">
                      <label htmlFor="Orders" className="p-1">
                        <iconify-icon
                          icon="mdi:calendar-text-outline"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Orders">
                        Orders
                      </p>
                    </Link>
                  </div>

                  <div className="d-flex py-2">
                    <Link to="/user/address" className="d-flex">
                      <label htmlFor="Address" className="p-1">
                        <iconify-icon
                          icon="ph:map-pin-light"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Address">
                        Addresses
                      </p>
                    </Link>
                  </div>

                  <div className="d-flex py-2">
                    <Link to="/user/wishlist" className="d-flex ">
                      <label htmlFor="Wishlist" className="p-1">
                        <iconify-icon
                          icon="mdi:cards-heart-outline"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Wishlist">
                        Wishlist
                      </p>
                    </Link>
                  </div>
                  <div className="d-flex py-2">
                    <Link to="/about-us" className="d-flex ">
                      <label htmlFor="Wishlist" className="p-1">
                        <iconify-icon
                          icon="material-symbols:info-outline-rounded"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Wishlist">
                        About Us
                      </p>
                    </Link>
                  </div>
                  <div className="d-flex py-2">
                    <Link to="/contact-us" className="d-flex ">
                      <label htmlFor="Wishlist" className="p-1">
                        <iconify-icon
                          icon="material-symbols:contact-support-outline"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Wishlist">
                        Contact Us
                      </p>
                    </Link>
                  </div>
                  <div className="d-flex py-2">
                    <Link to="/privacy-n-policy" className="d-flex ">
                      <label htmlFor="Wishlist" className="p-1">
                        <iconify-icon
                          icon="material-symbols:privacy-tip-outline-rounded"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Wishlist">
                        Privacy Policy
                      </p>
                    </Link>
                  </div>
                  <div className="d-flex py-2">
                    <Link to="/terms-of-use" className="d-flex ">
                      <label htmlFor="Wishlist" className="p-1">
                        <iconify-icon
                          icon="fluent:calendar-info-20-regular"
                          style={{ color: "#7d7d7d" }}
                        />
                      </label>
                      <p className="ps-3 profile-ptage" id="Wishlist">
                        Terms of Use
                      </p>
                    </Link>
                  </div>

                  {/* <div className="d-flex py-2">
                  <Link to="/user/address" className="d-flex">
                    <label for="About-Us" className="p-1">
                      <iconify-icon icon="material-symbols:info-outline-rounded"></iconify-icon>
                    </label>
                    <p className="ps-3 profile-ptage" id="About-Us">
                      About Us
                    </p>
                  </Link>
                </div>

                <div className="d-flex py-2">
                  <a href="Contact-us-page.html" className="d-flex">
                    <label for="Contact-us" className="p-1">
                      <iconify-icon icon="material-symbols:contact-support-outline"></iconify-icon>
                    </label>
                    <p className="ps-3 profile-ptage" id="Contact-us">
                      Contact us
                    </p>
                  </a>
                </div>

                <div className="d-flex py-2">
                  <a href="Privacy-Policy.html" className="d-flex">
                    <label for="Privacy-Policy" className="p-1">
                      <iconify-icon icon="material-symbols:privacy-tip-outline-rounded"></iconify-icon>
                    </label>
                    <p className="ps-3 profile-ptage" id="Privacy-Policy">
                      Privacy Policy
                    </p>
                  </a>
                </div>

                <div className="d-flex py-2">
                  <a href="terms-of-use-policy.html" className="d-flex ">
                    <label for="Terms-of-use" className="p-1">
                      <iconify-icon icon="fluent:calendar-info-20-regular"></iconify-icon>
                    </label>
                    <p id="Terms-of-use" className="ps-3  profile-ptage">
                      Terms of use
                    </p>
                  </a>
                </div> */}

                  <div className="d-flex py-2" style={{ cursor: "pointer" }}>
                    <a onClick={() => logOut()} className="d-flex active-a ">
                      <label htmlFor="Log-out" className="p-1">
                        <iconify-icon
                          icon="material-symbols:logout-rounded"
                          style={{ color: "#000000" }}
                        />
                      </label>
                      <p id="Log-out" className="ps-3  profile-ptage">
                        Log out
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-8 order-lg-2 order-1 order-md-2  ">
                <div className="profile-right-body">
                  <div className="profile-left-head">
                    <h4>Edit Profile</h4>
                  </div>
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateDetails(userDetails);
                      }}
                    >
                      <div className="py-2">
                        <label htmlFor="fname" className="pb-2">
                          First Name
                        </label>
                        <br />
                        <input
                          className="col-12"
                          type="text"
                          id="fname"
                          name="fname"
                          value={userDetails.firstName}
                          onChange={(e) =>
                            setUserDetails((oldVal) => {
                              return { ...oldVal, firstName: e.target.value };
                            })
                          }
                        />
                        <br />
                      </div>
                      <div className="py-2">
                        <label htmlFor="lname" className="pb-2">
                          Last Name
                        </label>
                        <br />
                        <input
                          className="col-12"
                          type="text"
                          id="lname"
                          name="lname"
                          value={userDetails?.lastName}
                          onChange={(e) =>
                            setUserDetails((oldVal) => {
                              return { ...oldVal, lastName: e.target.value };
                            })
                          }
                        />
                        <br />
                      </div>
                      <div className="py-2">
                        <label htmlFor="email" className="pb-2">
                          Mobile No.
                        </label>
                        <br />
                        <input
                          className="col-12"
                          type="tel"
                          id="mobileNo"
                          name="mobileNo"
                          value={userDetails.mobileNo}
                          readOnly
                        />
                        <br />
                      </div>
                      <div className="py-2">
                        <label htmlFor="lname" className="pb-2">
                          Email
                        </label>
                        <br />
                        <input
                          className="col-12"
                          id="Email"
                          name="Email"
                          type="email"
                          value={userDetails.email}
                          onChange={(e) =>
                            setUserDetails((oldVal) => {
                              return { ...oldVal, email: e.target.value };
                            })
                          }
                        />
                        <br />
                      </div>
                      <div
                        onClick={() => changeForgotPass(true)}
                        className="py-2"
                      >
                        <label
                          htmlFor="lname"
                          className="pb-2"
                          style={{ color: "#5b3503de" }}
                        >
                          Change Password
                        </label>
                      </div>
                      <div className="text-center py-2">
                        <input
                          type="submit"
                          className="submit-profile"
                          value="Save"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgotAuthPopup
        authPopupState={forgotAuthPop}
        changePopupState={changeForgotPass}
        userDetails={currentUser}
      />
    </>
  );
}

const mapStateToProps = ({ user }) => {
  const { currentUser, authPopupState, keyword, forgotAuthPop } = user;
  return { currentUser, authPopupState, keyword, forgotAuthPop };
};
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutUser()),
  setSearchText: (text) => dispatch(changeSearchText(text)),
  updateDetails: (data) => dispatch(updateUserDetails(data)),
  changeForgotPass: (state) => dispatch(setForgotPopup(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
