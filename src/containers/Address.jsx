import React, { useEffect } from 'react';
import AddressMain from 'components/address/AddressMain';

import { connect } from 'react-redux';
import {
  changeSearchText,
  deleteUserAddress,
  deliverToThisAddress,
  getUserAddresses,
} from 'redux/auth/actions';
import Loader from 'components/common/loader/Loader';

const Address = ({
  getAddresses,
  addresses,
  setDeliveryAddress,
  deleteAddress,
  keyword,
  setSearchText,
  loading,
  addressToDeliver,
}) => {
  useEffect(() => {
    setSearchText('');
  }, []);

  useEffect(() => {
    //  if (keyword && keyword.length > 0) history('/products');
  }, [keyword]);

  useEffect(() => {
    getAddresses();
  }, [getAddresses]);

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
        <AddressMain
          addresses={addresses}
          setDeliveryAddress={setDeliveryAddress}
          deleteAddress={deleteAddress}
          addressToDeliver={addressToDeliver}
        />
      )}
    </div>
  );
};
const mapStateToProps = ({ user }) => {
  const { keyword, addresses, loading, addressToDeliver } = user;
  return { addresses, keyword, loading, addressToDeliver };
};

const mapDispatchToProps = (dispatch) => ({
  getAddresses: () => dispatch(getUserAddresses()),
  setDeliveryAddress: (address) => dispatch(deliverToThisAddress(address)),
  deleteAddress: (_id) => dispatch(deleteUserAddress(_id)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Address);
