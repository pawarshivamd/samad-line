import Loader from 'components/common/loader/Loader';
import ProductDetailsMain from 'components/products/ProductDetailsMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from 'redux/actions';
import {
  addProductToCart,
  addProductToWishList,
  changeSearchText,
} from 'redux/auth/actions';
// import Error404 from 'components/notFound/Error404';

const ProductDetails = ({
  getProductById,
  selectedProduct,
  loading,
  addtoCart,
  addToWishlist,
  setSearchText,
}) => {
  const { id } = useParams();

  useEffect(() => {
    setSearchText('');
  }, []);
  useEffect(() => {
    if (id) getProductById(id);
  }, [id, getProductById]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
        // background: '#FFF',
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <ProductDetailsMain
          selectedProduct={selectedProduct}
          addtoCart={addtoCart}
          addToWishlist={addToWishlist}
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
  getProductById: (id) => dispatch(getSingleProduct(id)),
  addtoCart: (_id, history) => dispatch(addProductToCart(_id, history)),
  addToWishlist: (_id, inWishlist) =>
    dispatch(addProductToWishList(_id, inWishlist)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
