/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product, addtoCart, addToWishlist }) => {
  console.log('product', product);
  const history = useNavigate();
  const [wishList, setWishlist] = useState(product.inWishlist);
  return (
    <div className="box-card">
      <div className="head-stars">
        <sapn className="reviews">
          {' '}
          <i className="fas fa-star  me-1" />
          {product.rating}
        </sapn>
        <sapn
          className="false-seal "
          onClick={() => {
            addToWishlist(product._id, wishList);
            setWishlist(!wishList);
          }}
          style={{ cursor: 'pointer' }}
        >
          <svg
            className={wishList ? 'activeHeart' : 'heart'}
            width="17"
            height="20"
            viewBox="0 0 24 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.0162 2.62457L11.733 3.36138L12.4498 2.62457C15.1694 -0.171114 20.0664 0.825498 21.8274 4.2646C22.6749 5.91956 22.8251 8.24441 21.368 11.1192C19.9471 13.9225 17.0001 17.228 11.7329 20.7968C6.46578 17.2284 3.51885 13.923 2.09797 11.1198C0.640872 8.24511 0.791039 5.92021 1.63851 4.26513C3.39962 0.825768 8.29658 -0.171037 11.0162 2.62457Z"
              fill="#000000"
              // stroke="black"
              strokeWidth="2"
            />
          </svg>
        </sapn>
      </div>
      <Link to={`/product/${product._id}`}>
        <div className="card-img">
          <a>
            <img
              src={product.images.find((elem) => elem?.url !== '')?.url}
              alt=""
              className=""
            />
          </a>
        </div>
      </Link>

      <div className="card-body">
        <div className="card-con">
          <a>
            <Link to={`/product/${product._id}`}>
              <p
                className="main-text"
                style={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {product.name}{' '}
              </p>
            </Link>
            {/* {product.flavour !== '' && (
              <span className="text-end">
              <iconify-icon
                icon="mdi:lacto-vegetarian"
                className="veg-icon"
                style={
                  product.nonVeg
                    ? { color: 'red', position: 'absolute', right: 17 }
                    : { color: 'green', position: 'absolute', right: 17 }
                }
              />
            </span>
            )} */}
          </a>
          <h6 style={{ width: '100%' }}>The specific products included</h6>
          <p style={{ marginBottom: '0' }}>
            <a className="card-price">
              <span className="px-1">
                {product.price ? product.price : product.mrp}$
              </span>
              {product.price ? (
                <span className="px-1 discount-text">
                  MRP:<del>{product.mrp}$</del>
                </span>
              ) : (
                ''
              )}
            </a>
          </p>
          <p>
            <a className="card-price ms-1">
              {product.price ? (
                <span className=" discount-text" style={{ color: 'green' }}>
                  {Math.floor(
                    ((product.mrp - product.price) / product.mrp) * 100,
                  )}
                  % OFF
                </span>
              ) : (
                ''
              )}
            </a>
          </p>
          {product.stock !== 0 ? (
            <a
              className=""
              style={{ pointer: 'cursor' }}
              onClick={() =>
                addtoCart(
                  {
                    _id: product._id,
                    qty: 1,
                  },
                  history,
                )
              }
            >
              <p className="shpoing-btn">
                <i className="bi bi-cart2" />
                Add to Cart
              </p>
            </a>
          ) : (
            <a
              className="disabled-link"
              style={{ pointer: 'cursor' }}
              // onClick={() =>
              //   addtoCart(
              //     {
              //       _id: product._id,
              //       qty: 1,
              //     },
              //     history,
              //   )
              // }
            >
              <p className="shpoing-btn" style={{ color: 'red' }}>
                <i className="mt-2 mb-3" />
                Out of Stock
              </p>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
