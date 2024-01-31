import ProductListMain from 'components/products/ProductListMain';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from 'redux/actions';
import {
  addProductToCart,
  addProductToWishList,
  changeSearchText,
} from 'redux/auth/actions';

function queryStringToObject(queryString) {
  const pairs = queryString.split('&');
  const array = pairs.map((el) => {
    const parts = el.split('=');
    return parts;
  });
  return Object.fromEntries(array);
}

function ProductList({
  products,
  getProductList,
  keyword,
  loading,
  addtoCart,
  addToWishlist,
  homeScreenData,
}) {
  const { params } = useParams();
  console.log('keyword', params);
  console.log('keyword', keyword);

  useEffect(() => {
    window.scrollTo(0, 0);
    let filter = {};
    if (params) filter = queryStringToObject(params);
    getProductList({ ...filter, keyword });
  }, [keyword, params]);

  return (
    <div
      style={{
        minHeight: 'calc(100vh - 115px)',
        overflow: 'auto',
      }}
    >
      <ProductListMain
        products={products}
        addtoCart={addtoCart}
        addToWishlist={addToWishlist}
        homeScreenData={homeScreenData}
        getProductList={getProductList}
        keyword={keyword}
        loading={loading}
      />
    </div>
  );
}

const mapStateToProps = ({ product, user }) => {
  const { products, loading, homeScreenData } = product;
  const { keyword } = user;
  return { products, keyword, loading, homeScreenData };
};
const mapDispatchToProps = (dispatch) => ({
  // getHomeScreenDetails: () => dispatch(getHomeScreenData()),
  getProductList: (data) => dispatch(getProducts(data)),
  addtoCart: (_id, history) => dispatch(addProductToCart(_id, history)),
  addToWishlist: (_id, inWishlist) =>
    dispatch(addProductToWishList(_id, inWishlist)),
  setSearchText: (text) => dispatch(changeSearchText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
