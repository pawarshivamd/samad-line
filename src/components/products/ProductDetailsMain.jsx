/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactImageMagnify from 'react-image-magnify';
import { Navigation } from 'swiper';
import { Link, useNavigate } from 'react-router-dom';
import ProductReviewsAndDes from './ProductReviewsAndDes';

const ProductDetailsMain = ({ selectedProduct, addtoCart, addToWishlist }) => {
  const history = useNavigate();
  const [activeImage, setActiveImage] = useState('');

  const [swiperImages, setSwiperImages] = useState([]);
  // const [qty, setQty] = useState(1);
  const [qty] = useState(1);

  const [wishList, setWishlist] = useState(
    selectedProduct ? selectedProduct.inWishlist : false,
  );

  const [isMobile, setIsMobile] = useState(false);

  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    if (window.innerWidth > 720 && window.innerWidth < 1200) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    if (selectedProduct && selectedProduct.images) {
      setActiveImage(
        selectedProduct.images.find((img) => img?.url !== '')?.url,
      );
      setSwiperImages(selectedProduct.images.filter((img) => img?.url));
    }
  }, [selectedProduct]);

  return (
    <div className="container-xxl">
      <div className="row">
        <div className="col-lg-2" style={{ borderRight: '1px solid #E9E9E9' }}>
          <span style={{ display: 'none' }}>.</span>
        </div>
        <div className="col-lg-9">
          <section className="xzoom_part">
            <div
              className="container "
              style={{ backgroundColor: '#FFF', borderRadius: '6px' }}
            >
              <div className="xzoom-section">
                <div className="row">
                  <div className="col-lg-5 col-md-6   x-zoom-body ">
                    <div className="x-zoomin-responsive">
                      <div className="xzoom-heart xzoom-heart-hide">
                        <p className="false-seal">
                          <svg
                            className={wishList ? 'activeHeart' : 'heart'}
                            onClick={() => {
                              addToWishlist(
                                selectedProduct && selectedProduct._id,
                                wishList,
                              );
                              setWishlist(!wishList);
                            }}
                            viewBox="0 0 24 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0162 2.62457L11.733 3.36138L12.4498 2.62457C15.1694 -0.171114 20.0664 0.825498 21.8274 4.2646C22.6749 5.91956 22.8251 8.24441 21.368 11.1192C19.9471 13.9225 17.0001 17.228 11.7329 20.7968C6.46578 17.2284 3.51885 13.923 2.09797 11.1198C0.640872 8.24511 0.791039 5.92021 1.63851 4.26513C3.39962 0.825768 8.29658 -0.171037 11.0162 2.62457Z"
                              fill="#000000"
                              stroke="black"
                              strokeWidth="2"
                            />
                          </svg>
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-11  col-sm-12   ">
                      <div className="">
                        <div
                          className="xzoom-body-responsive"
                          id="img-container"
                          // style={{
                          //   // width: '400px',
                          //   margin: 'auto',
                          //   position: 'relative',
                          // }}
                          style={{
                            width: 'calc(100% - 40px)',
                            // margin: '60px auto',
                          }}
                        >
                          {/* <img src={activeImage} alt="" className="xzoom" /> */}
                          <ReactImageMagnify
                            style={{ zIndex: 9 }}
                            {...{
                              smallImage: {
                                alt: 'none',
                                isFluidWidth: true,
                                src: activeImage,
                              },
                              largeImage: {
                                src: activeImage,
                                width: 1200,
                                height: 1200,
                              },
                              isHintEnabled: true,
                            }}
                          />
                        </div>
                        <div className="xzoom-thumbs">
                          <div className="">
                            <Swiper
                              className="mySwiper color-swiper-select"
                              navigation
                              modules={[Navigation]}
                              spaceBetween={25}
                              slidesPerView={
                                isTablet
                                  ? 4
                                  : isMobile
                                  ? 3
                                  : swiperImages.length === 5
                                  ? 3
                                  : swiperImages.length
                              }
                            >
                              {swiperImages.map(
                                ({ url, key }) =>
                                  url && (
                                    <SwiperSlide
                                      className="swiper-slide"
                                      key={key}
                                      onClick={() => setActiveImage(url)}
                                    >
                                      <img
                                        src={url}
                                        alt=""
                                        className="xzoom-gallery"
                                        width="80"
                                        xpreview={url}
                                      />
                                    </SwiperSlide>
                                  ),
                              )}
                            </Swiper>
                            {/* <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-7 col-sm-12 xzoom-body-contain">
                    <div className="xzoom-heart heart-hide-responsive">
                      <p className="false-seal ">
                        <svg
                          className={wishList ? 'activeHeart' : 'heart'}
                          viewBox="0 0 24 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            addToWishlist(
                              selectedProduct && selectedProduct._id,
                              wishList,
                            );
                            setWishlist(!wishList);
                          }}
                        >
                          <path
                            d="M11.0162 2.62457L11.733 3.36138L12.4498 2.62457C15.1694 -0.171114 20.0664 0.825498 21.8274 4.2646C22.6749 5.91956 22.8251 8.24441 21.368 11.1192C19.9471 13.9225 17.0001 17.228 11.7329 20.7968C6.46578 17.2284 3.51885 13.923 2.09797 11.1198C0.640872 8.24511 0.791039 5.92021 1.63851 4.26513C3.39962 0.825768 8.29658 -0.171037 11.0162 2.62457Z"
                            fill="#000000"
                            stroke="black"
                            strokeWidth="2"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="xzoom_details">
                      <h4>
                        {selectedProduct && selectedProduct.name}{' '}
                        <span>
                          {' '}
                          {selectedProduct && selectedProduct.flavour && (
                            <iconify-icon
                              icon="mdi:lacto-vegetarian"
                              className="veg-nonveg-icon"
                              style={
                                selectedProduct && selectedProduct.nonVeg
                                  ? { color: 'red' }
                                  : { color: 'green' }
                              }
                            />
                          )}
                        </span>{' '}
                      </h4>

                      <h6>{selectedProduct && selectedProduct.brand}</h6>
                      <p className="star">
                        <i className="fas fa-star" />
                        {selectedProduct && selectedProduct.rating}
                      </p>
                      <h3>
                        {selectedProduct && selectedProduct.price
                          ? selectedProduct.price
                          : selectedProduct?.mrp}{' '}
                        ${' '}
                        {selectedProduct?.price ? (
                          <span>
                            MRP:
                            <del className="ms-1">
                              {selectedProduct && selectedProduct.mrp}$
                            </del>
                          </span>
                        ) : (
                          ''
                        )}
                      </h3>
                      <p>
                        <a className="card-price ms-1">
                          {selectedProduct?.price ? (
                            <span
                              className=" discount-text"
                              style={{ color: 'green' }}
                            >
                              {Math.floor(
                                ((selectedProduct.mrp - selectedProduct.price) /
                                  selectedProduct.mrp) *
                                  100,
                              )}
                              % OFF
                            </span>
                          ) : (
                            ''
                          )}
                        </a>
                      </p>
                      {/* <div className=" btn-contain mb-2">
                  <p>Unit</p>
                  <div className="btn-body">
                    {selectedProduct &&
                      selectedProduct.otherUnit.map(
                        ({ mainProduct, value }) => (
                          <Link
                            to={`/product/${value._id}`}
                            key={value._id}
                            className={
                              mainProduct
                                ? 'btn-views btn-views-1 btn-views-active'
                                : 'btn-views btn-views-1'
                            }
                          >
                            <a href="#"> {value.value + value.unit}</a>
                          </Link>
                        ),
                      )}
                  </div>
                </div> */}
                      {/* {selectedProduct && selectedProduct.flavour && (
                  <div className=" btn-contain mb-2">
                    <p>Flavour</p>
                    <div className="btn-body">
                      {selectedProduct &&
                        selectedProduct.otherFlavour.map(
                          ({ mainProduct, value }) => (
                            <Link
                              to={`/product/${value._id}`}
                              key={value._id}
                              className={
                                mainProduct
                                  ? 'btn-views btn-views-1 btn-views-active'
                                  : 'btn-views btn-views-1'
                              }
                            >
                              <a href="#">{value.flavour}</a>
                            </Link>
                          ),
                        )}
                    </div>
                  </div>
                )} */}
                      {/* {selectedProduct && selectedProduct.color && (
                  <div className=" btn-contain">
                    <p>Color</p>
                    <div className="btn-body">
                      {selectedProduct &&
                        selectedProduct.otherColor.map(
                          ({ value, mainProduct }) => (
                            <Link
                              to={`/product/${value._id}`}
                              key={value._id}
                              className={
                                mainProduct
                                  ? 'btn-views btn-views-1 btn-views-active'
                                  : 'btn-views btn-views-1'
                              }
                            >
                              <a href="#">{value.color}</a>
                            </Link>
                          ),
                        )}
                    </div>
                  </div>
                )} */}
                      <div className="col-lg-10 col-md-12 col-sm-12 color-select-section">
                        {/* <p className="mb-2 color-title">Color</p> */}
                        {selectedProduct?.colors &&
                          selectedProduct?.colors.length > 0 && (
                            <p className="mb-2 color-title">Color</p>
                          )}
                        {selectedProduct && selectedProduct?.colors && (
                          <Swiper
                            slidesPerView={
                              isTablet
                                ? 3
                                : isMobile
                                ? 3
                                : selectedProduct &&
                                  selectedProduct.images.length < 5
                                ? selectedProduct.images.length / 2
                                : 4
                            }
                            spaceBetween={30}
                            navigation
                            modules={[Navigation]}
                            className="mySwiper color-swiper-select"
                          >
                            {selectedProduct?.colors.map(
                              ({ color, images, path }) => (
                                <SwiperSlide key={color}>
                                  <Link to={`/product/${path}`}>
                                    <div>
                                      <p className="color-text">{color}</p>
                                      <div className="img-box">
                                        <img src={images?.url} alt={color} />
                                      </div>
                                    </div>
                                  </Link>
                                </SwiperSlide>
                              ),
                            )}
                          </Swiper>
                        )}
                      </div>
                      <div className=" mt-3 btn-body">
                        {/* <label for=""> Qty: </label>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                    className="form-control"
                    min="1"
                  /> */}

                        <div className="btn-xzone-body ">
                          {selectedProduct?.stock !== 0 ? (
                            <a
                              style={{ cursor: 'pointer' }}
                              onClick={() =>
                                addtoCart(
                                  {
                                    _id: selectedProduct && selectedProduct._id,
                                    qty,
                                  },
                                  history,
                                )
                              }
                            >
                              <p className="btn-xzone">
                                {' '}
                                <i className="bi bi-cart2" />
                                <span> Add To Cart</span>
                              </p>
                            </a>
                          ) : (
                            <a
                              style={{
                                cursor: 'pointer',
                              }}
                              className="disabled-link"
                              //
                              // onClick={() =>
                              //   addtoCart(
                              //     {
                              //       _id: selectedProduct && selectedProduct._id,
                              //       qty,
                              //     },
                              //     history,
                              //   )
                              // }
                            >
                              <p
                                // className="btn btn-secondary"
                                style={{
                                  // backgroundColor: 'grey',
                                  color: 'red',
                                }}
                              >
                                <i style={{ color: 'red' }} />
                                <span> Out of Stock</span>
                              </p>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ProductReviewsAndDes
            description={selectedProduct?.description}
            sellerInformation={selectedProduct?.sellerInformation}
            reviews={selectedProduct?.reviews}
            rating={selectedProduct?.rating}
            ratingDetails={selectedProduct?.ratingDetails}
            numReviews={selectedProduct?.numReviews}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
