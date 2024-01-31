/* eslint-disable react/no-danger */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
// import ProductReviews from './ProductReviews';

const ProductReviewsAndDes = ({
  description = '',
  // sellerInformation = '',
  reviews = [],
  rating = 0,
  ratingDetails = {},
}) => {
  return (
    <>
      <div>
        <div className="container">
          <div className="reviews-body">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </button>
                {/* <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Rating
              </button> */}
              </div>
            </nav>
            <div
              className="tab-content"
              id="nav-tabContent"
              style={{ background: '#fff ' }}
            >
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabIndex="0"
              >
                <div className="row">
                  <div className="col-md-12  Description-body">
                    <div className="Description-contain">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: description,
                        }}
                      />
                    </div>
                  </div>
                  {/* <div
                    className="col-md-6  Description-body"
                    style={{ border: 'none' }}
                  >
                    <div className="Description-contain">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: sellerInformation,
                        }}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabIndex="0"
              >
                <div className="star-body">
                  <div className="row align-items-center">
                    <div className="col-md-3">
                      <div className="big-star-body">
                        <div>
                          <p className="text-center">
                            <i className="fas fa-star" />
                            <span className="ms-2">{rating}</span>
                          </p>
                          <p className="Verified">
                            {reviews.length} Verified <br />
                            Buyers
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="reviews-container">
                        <div className="review">
                          <span className="icon-container">
                            <i className="fas fa-star me-1" />5
                          </span>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="94"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar"
                              style={{
                                width: `${
                                  (100 * ratingDetails['5']) / reviews.length
                                }%`,
                              }}
                            />
                          </div>
                          <span className="percent">
                            {ratingDetails && ratingDetails['5']}
                          </span>
                        </div>
                        <div className="review">
                          <span className="icon-container">
                            <i className="fas fa-star me-1" />4
                          </span>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar"
                              style={{
                                width: `${
                                  (100 * ratingDetails['4']) / reviews.length
                                }%`,
                              }}
                            />
                          </div>
                          <span className="percent">
                            {ratingDetails && ratingDetails['4']}
                          </span>
                        </div>
                        <div className="review">
                          <span className="icon-container">
                            <i className="fas fa-star me-1" />3
                          </span>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar"
                              style={{
                                width: `${
                                  (100 * ratingDetails['3']) / reviews.length
                                }%`,
                              }}
                            />
                          </div>
                          <span className="percent">
                            {ratingDetails && ratingDetails['3']}
                          </span>
                        </div>
                        <div className="review">
                          <span className="icon-container">
                            <i className="fas fa-star me-1" />2
                          </span>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar"
                              style={{
                                width: `${
                                  (100 * ratingDetails['2']) / reviews.length
                                }%`,
                              }}
                            />
                          </div>
                          <span className="percent">
                            {ratingDetails && ratingDetails['2']}
                          </span>
                        </div>
                        <div className="review">
                          <span className="icon-container">
                            <i className="fas fa-star me-1" />1
                          </span>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label="Basic example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            <div
                              className="progress-bar"
                              style={{
                                width: `${
                                  (100 * ratingDetails['1']) / reviews.length
                                }%`,
                              }}
                            />
                          </div>
                          <span className="percent">
                            {ratingDetails && ratingDetails['1']}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className=" view-page">
                <a href="Rating-&-reveiws.html"> More Reviews</a>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ProductReviews reviews={reviews} /> */}
    </>
  );
};

export default ProductReviewsAndDes;
