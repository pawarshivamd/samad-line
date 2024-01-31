import React from 'react';
import './noItemsFound.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const EmptyOrder = () => {
  return (
    <div className="empty-state" style={{ marginTop: 30 }}>
      <div className="content">
        <div className="empty-state__icon">
          <img src="/asstes/img/notFound/empty_order.jpg" alt="" />
        </div>
        <div className="empty-state__message">No Orders Yet</div>
        <h5>Looks like you haven’t made your choice yet....</h5>
        <Link to="/">
          <input
            required
            type="button"
            value="Back to home"
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

export default EmptyOrder;
