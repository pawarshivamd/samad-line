import React from 'react';
import './noItemsFound.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="empty-state">
      <div className="content">
        <div className="empty-state__icon">
          <img src="/asstes/img/notFound/emptyCart.jpg" alt="" />
        </div>
        <div className="empty-state__message">Hey, it feels so light!</div>
        <h5>
          Looks like you have not added anything to your cart. Go ahead &
          explore top categories.
        </h5>
        <Link to="/products">
          <input
            required
            type="button"
            value="Start Shopping"
            className={classNames(
              'shipping-btn  btn-views-active',
              'activeAddressType',
            )}
            style={{
              height: 35.5,
              padding: '0 30px',
              border: 'none',
              borderRadius: 5,
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
