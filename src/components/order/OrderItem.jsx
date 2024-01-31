/* eslint-disable jsx-a11y/anchor-is-valid */
import EditReview from 'containers/EditReview';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderItem = ({ item, currentOrderStatus }) => {
  const {
    name,
    image,
    price,
    qty,
    // flavour,
    // nonVeg,
    product,
  } = item;
  return (
    <div className="order-details-traking-contain col-lg-11 col-md-12 ">
      <div className="row ">
        <div className="col-lg-2 col-md-3  d-flex align-items-center justify-content-center m-0 p-0">
          <div className="order-details-traking-img-box">
            <Link to={`/product/${product?._id}`}>
              <a>
                {' '}
                <img src={image} alt="" />
              </a>
            </Link>
          </div>
        </div>
        <div className="col-lg-7 col-md-6 ">
          <div className="order-details-traking-list">
            <Link to={`/product/${product?._id}`}>
              <a>
                <h5>{name}</h5>
              </a>
            </Link>
            <div className="Price-tag">
              <p>Qty: {qty}</p>
              <p>Price : {qty * price}$</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 ">
          {currentOrderStatus?.status === 'Order Delivered' && (
            <EditReview id={product?._id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
