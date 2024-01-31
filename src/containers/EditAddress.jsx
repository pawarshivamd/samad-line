import AddressForm from 'components/address/AddressForm';
import Loader from 'components/common/loader/Loader';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  changeSearchText,
  getAddressById,
  updateUserAddress,
} from 'redux/auth/actions';

const countryCode = process.env.REACT_APP_COUNTRY_CODE || '+961';

const EditAddress = ({
  getAddressFromId,
  selectedAddress,
  updateAddress,
  keyword,
  setSearchText,
  loading,
}) => {
  const { id } = useParams();
  const [address, setAddress] = useState({
    addressType: '',
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
    if (selectedAddress) {
      setAddress(selectedAddress);
    }
  }, [selectedAddress]);
  useEffect(() => {
    if (id) getAddressFromId(id);
  }, [id, getAddressFromId]);

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
      {loading ? (
        <Loader />
      ) : (
        <AddressForm
          address={address}
          setAddress={setAddress}
          saveAddress={updateAddress}
        />
      )}
    </div>
  );
};
const mapStateToProps = ({ user }) => {
  const { keyword, selectedAddress, loading } = user;

  return { selectedAddress, keyword, loading };
};
const mapDispatchToProps = (dispatch) => ({
  updateAddress: (address, history) =>
    dispatch(updateUserAddress(address, history)),
  getAddressFromId: (_id) => dispatch(getAddressById(_id)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
