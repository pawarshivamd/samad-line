import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getProducts } from 'redux/actions';
import CartMain from 'components/cart/CartMain';
import Loader from 'components/common/loader/Loader';
import {
  addProductToCart,
  changeSearchText,
  deliverToThisAddress,
  getUserAddresses,
  getUserDetails,
  reomveProductFromCart,
} from 'redux/auth/actions';

function Cart({
  keyword,
  loading,
  cart,
  removeItemFromCart,
  addtoCart,
  // setDeliveryAddress,
  addressToDeliver,
  currentUser,
  getLoggedInUserDetails,
  setSearchText,
}) {
  useEffect(() => {
    getLoggedInUserDetails();
    // if (selectedAdd) setDeliveryAddress(selectedAdd);
  }, []);

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
        background: '#FFFFFF',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <CartMain
          cart={cart}
          keyword={keyword}
          removeItemFromCart={removeItemFromCart}
          addtoCart={addtoCart}
          addressToDeliver={addressToDeliver}
          currentUser={currentUser}
        />
      )}
    </div>
  );
}

const mapStateToProps = ({ user }) => {
  const { keyword, currentUser, loading, addressToDeliver } = user;

  return {
    keyword,
    loading,
    cart: currentUser?.cart,
    addressToDeliver,
    currentUser,
  };
};
const mapDispatchToProps = (dispatch) => ({
  getProductList: (data) => dispatch(getProducts(data)),
  removeItemFromCart: (data) => dispatch(reomveProductFromCart(data)),
  addtoCart: (data, history) => dispatch(addProductToCart(data, history)),
  getAddresses: () => dispatch(getUserAddresses()),
  setDeliveryAddress: (address) => dispatch(deliverToThisAddress(address)),
  getLoggedInUserDetails: () => dispatch(getUserDetails()),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
