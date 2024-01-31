import AddressForm from 'components/address/AddressForm';
import Loader from 'components/common/loader/Loader';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { changeSearchText, createUserAddress } from 'redux/auth/actions';

const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+961';

const NewAddress = ({ addNewAddress, keyword, setSearchText, loading }) => {
  const [address, setAddress] = useState({
    addressType: 'home',
    shippingAddress: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      phoneNo: countryCode,
    },
    billingAddress: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      pinCode: '',
      city: '',
      state: '',
      country: '',
      phoneNo: countryCode,
    },
  });
  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    //  if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
        // background: 'rgb(254, 249, 241)',
      }}
    >
      {' '}
      {loading ? (
        <Loader />
      ) : (
        <AddressForm
          address={address}
          setAddress={setAddress}
          saveAddress={addNewAddress}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ product, user }) => {
  const { selectedProduct, loading } = product;
  const { keyword } = user;

  return { selectedProduct, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  addNewAddress: (address, history) =>
    dispatch(createUserAddress(address, history)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);
