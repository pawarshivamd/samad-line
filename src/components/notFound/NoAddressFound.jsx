import React from 'react';
import './noItemsFound.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const NoAddressFound = () => {
  return (
    <div className="empty-state">
      <div className="content">
        <div className="empty-state__icon">
          <img src="/asstes/img/notFound/addressNotFound.jpg" alt="" />
        </div>
        <div className="empty-state__message">No Address found.</div>
        <Link to="/user/address/new">
          <input
            required
            type="button"
            value="Add New Address"
            className={classNames(
              'shipping-btn  btn-views-active',
              'activeAddressType',
            )}
            style={{
              height: 35.5,
              padding: '0 30px',
              border: 'none',
              borderRadius: 5,
              marginTop: 25,
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default NoAddressFound;
