import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateUserAddress } from 'redux/auth/actions';

function AddressBox({
  _id,
  addressType,
  shippingAddress,
  billingAddress,
  deleteAddress,
  setDeliveryAddress,
  updateAddress,
}) {
  const history = useNavigate();

  return (
    <div className="delivery-contain" key={_id}>
      <div className="delivery-name">
        <div>
          <h6>
            {shippingAddress.firstName} {shippingAddress?.lastName}
            <span className="home-tag">{addressType}</span>
          </h6>
        </div>
      </div>
      <div className="col-lg-6 col-md-8">
        <p className="address-write">
          {shippingAddress.addressLine1}
          <br />
          {shippingAddress.addressLine2}, <br />
          {shippingAddress.city} <br />
          {shippingAddress.phoneNo}
        </p>
      </div>
      <div className="fw-semibold edit">
        <Link to={`/user/address/edit/${_id}`}> Edit </Link>
        <span className="Delete-colour" onClick={() => deleteAddress(_id)}>
          Delete
        </span>
      </div>

      <div
        className="delivery-btn"
        onClick={() => {
          setDeliveryAddress({
            _id,
            addressType,
            shippingAddress,
            billingAddress,
          });
          updateAddress({
            _id,
            addressType,
            shippingAddress,
            billingAddress,
          });
          history('/user/cart');
        }}
      >
        <p>
          <a>Deliver to this Address</a>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  const { keyword, selectedAddress, loading } = user;

  return { selectedAddress, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  updateAddress: (address, history) =>
    dispatch(updateUserAddress(address, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressBox);
