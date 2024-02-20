/* eslint-disable no-extra-boolean-cast */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import EmptyWishList from "components/notFound/EmptyWishList";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WishlistMain = ({ wishlist, removeFromWishList, addtoCart }) => {
  const history = useNavigate();
  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-1">
          <span style={{ display: "none" }}>.</span>
        </div>
        {Boolean(wishlist.length) ? (
          <div className="col-lg-8">
            <div
              className="my-whish-section"
              style={{ minHeight: "calc(100vh - 115px)" }}
            >
              <div className="container">
                <div className="my-whish-head">
                  <h1>
                    My Wishlist <span>({wishlist.length})</span>
                  </h1>
                  <Link to="/" className=" continue-sho-text">
                    Continue Shopping
                  </Link>
                </div>
                <div className="my-whish-body">
                  {wishlist.map((wish) => (
                    <div className="my-whish-contain" key={wish._id}>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-12 d-flex justify-content-center">
                          <div className="my-whish-img-box">
                            <Link to={`/product/${wish._id}`}>
                              <img
                                src={
                                  wish.images.find((img) => img?.url !== "")
                                    ?.url
                                }
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                          <div className="my-wish-list">
                            <a>
                              {" "}
                              <Link
                                to={`/product/${wish._id}`}
                                className="col-lg-9 col-md-8 col-sm-12"
                              >
                                <h5 className="align-items-center">
                                  {wish.name}
                                </h5>
                              </Link>
                              {/* {wish.flavour !== '' && (
                          <iconify-icon
                            icon="mdi:lacto-vegetarian"
                            className="veg-icon"
                            style={
                              wish.nonVeg
                                ? {
                                  color: 'red',
                                }
                                : {
                                  color: 'green',
                                }
                            }
                          />
                        )} */}
                            </a>
                            {/* <p>{wish.brand}</p> */}
                            <h3>
                              {wish.price ? wish.price : wish.mrp} $
                              {wish.price ? (
                                <span>
                                  MRP :<del className="ms-1">{wish.mrp}$</del>
                                </span>
                              ) : (
                                ""
                              )}
                            </h3>
                            <p className="star">
                              <i className="fas fa-star" />
                              {wish.rating}
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                          <div className="  wish-card-right-body">
                            <div className="d-flex justify-content-end align-items-center">
                              <div className="bin-body ">
                                <a href="#">
                                  <i
                                    className="far fa-trash-alt"
                                    onClick={() => removeFromWishList(wish._id)}
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="">
                              <div className="btn-mywish-body">
                                <a
                                  style={{ display: "flex" }}
                                  onClick={() =>
                                    addtoCart(
                                      {
                                        _id: wish._id,
                                        qty: 1,
                                      },
                                      history
                                    )
                                  }
                                >
                                  <p className="btn-mywhish">
                                    <i className="bi bi-cart2" />
                                    <span className=""> Move To Cart </span>
                                  </p>
                                </a>
                                {/* <p className="bin-body">
                              <i
                                className="far fa-trash-alt"
                                onClick={() => removeFromWishList(wish._id)}
                              />
                            </p> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-lg-9">
            <EmptyWishList />
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistMain;
