/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { adminRoot, currentUser } from 'constants/defaultValues';
import { setCurrentUser } from 'helpers/Utils';
import API from 'helpers/API';
import Notification from 'components/Notification/Notification';
import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
  GET_USER_DETAILS,
  OTP_VERIFY,
  CHANGE_PASSWORD,
  GET_WISHLIST_DETAILS,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_CART,
  GET_USER_ADDRESS,
  CREATE_USER_ADDRESS,
  UPDATE_USER_ADDRESS,
  GET_ADDRESS_BY_ID,
  DELETE_USER_ADDRESS,
  LIKE_DISLIKE_PRODUCT_REVIEW,
  GET_USER_ORDERS,
  GET_ORDER_BY_ID,
  ADD_EDIT_USER_REVIEW,
  UPDATE_USER_DETAILS,
  GET_BLOGS,
  GET_BLOG_BY_ID,
} from '../contants';

import {
  loginUserError,
  registerUserSuccess,
  registerUserError,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordSuccess,
  resetPasswordError,
  getUserDetailSuccess,
  getUserDetailsError,
  verifyOtpSuccess,
  verifyOtpError,
  changePasswordError,
  changePasswordSuccess,
  authSuccess,
  getUserWishListSuccess,
  getUserWIshLIstError,
  addToCartSuccess,
  addToCartError,
  addProductToWishListSuccess,
  addProductToWishListError,
  removeProductToWishListSuccess,
  removeProductToWishListError,
  reomveFromCartSuccess,
  reomveFromCartError,
  getUserAddressesSuccess,
  getUserAddressesError,
  createUserAddressSuccess,
  createUserAddressError,
  updateUserAddressError,
  getAddressByIdSuccess,
  getAddressByIdError,
  deleteUserAddressSuccess,
  deleteUserAddressError,
  setAuthPopup,
  setSignupAuthPopup,
  setForgotPopup,
  getUserOrdersSuccess,
  getUserOrderError,
  removeProductToWishList,
  getOrderByIdSuccess,
  getOrderByIdError,
  updateUserDetailsSuccess,
  updateUserDetailsError,
  getBlogSuccess,
  getBlogError,
  getBlogByIdSuccess,
  getBlogByIdError,
} from './actions';

const getUSerDetailsAsync = async () => {
  try {
    const res = await API.get('/user/profile');
    return res;
  } catch (error) {
    return error;
  }
};

export function* getUserWorker({ payload }) {
  const { history } = payload;
  try {
    const {
      data: { data, message },
      status,
    } = yield call(getUSerDetailsAsync);
    const currentRoute = window.location.pathname;
    if (status === 200) {
      yield put(getUserDetailSuccess(data));
      yield put(setAuthPopup(false));
    } else {
      if (status === 401 && currentRoute !== '/') {
        Notification('error', message);
        yield put(setAuthPopup(true));
      }
      history('/');

      yield put(getUserDetailsError(message));
    }
  } catch (error) {
    history('/');
    yield put(getUserDetailsError('something went wrong'));
    yield put(setAuthPopup(true));
  }
}

export function* watchGetUser() {
  yield takeLatest(GET_USER_DETAILS, getUserWorker);
}

const GenerateOtpAsync = async (mobileNo) => {
  try {
    const res = await API.post('/user/login', {
      mobileNo,
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* loginWithPhoneNumber({ payload }) {
  const { mobileNo } = payload;

  try {
    const loginUser = yield call(GenerateOtpAsync, mobileNo);
    const {
      data: { message },
      status,
    } = loginUser;

    if (status === 200) {
      localStorage.setItem('mobileNo', JSON.stringify({ mobileNo }));
      yield put(authSuccess());
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(loginUserError(message));
    }
  } catch (error) {
    yield put(loginUserError(error));
    Notification('error');
  }
}

export function* watchLoginUser() {
  yield takeLatest(LOGIN_USER, loginWithPhoneNumber);
}

const verifyOtpAsync = async (email, password) => {
  try {
    const res = await API.post('/user/verify-otp', {
      email,
      password,
    });

    return res;
  } catch (error) {
    return error;
  }
};
function* verifyOtp({ payload }) {
  const {
    otpValues: { email, password },
  } = payload;

  try {
    const {
      data: { data, message, status: success },
      status,
    } = yield call(verifyOtpAsync, email, password);

    if (status === 200 && success && data) {
      const { token } = data;
      Notification('success', message);
      yield put(verifyOtpSuccess());
      localStorage.removeItem('mobileNo');
      localStorage.setItem('auth_token', token);
      // yield put(getUserDetailSuccess(user));
      yield put(setAuthPopup(false));
      window.location.reload();
    } else {
      Notification('error', message);
      yield put(verifyOtpError(message));
    }
  } catch (error) {
    Notification('error');
    yield put(verifyOtpError('something went wrong please try again'));
  }
}
export function* watchVerifyOtp() {
  yield takeLatest(OTP_VERIFY, verifyOtp);
}

export function* watchLogoutUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(LOGOUT_USER, logout);
}

const logoutAsync = async (history) => {
  await history('/');
};

function* logout({ payload }) {
  const { history } = payload;
  setCurrentUser();
  localStorage.clear();
  Notification('success', 'Use Logged Out');
  yield call(logoutAsync, history);
}

export function* watchForgotPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(FORGOT_PASSWORD, forgotPassword);
}

function* forgotPassword({ payload }) {
  const { mobileNo, history } = payload;
  try {
    const {
      status,
      data: { message },
    } = yield call(GenerateOtpAsync, mobileNo);
    if (status === 200) {
      yield put(forgotPasswordSuccess('OTP sent successfully to your number'));
      history('/user/otp');
    } else {
      yield put(forgotPasswordError(message));
    }
  } catch (error) {
    yield put(forgotPasswordError(error));
  }
}

export function* watchResetPassword() {
  // eslint-disable-next-line no-use-before-define
  yield takeLatest(RESET_PASSWORD, resetPassword);
}

const resetPasswordAsync = async (token, newPassword) => {
  try {
    const res = await API.post(`/user/password/${token}`, {
      password: newPassword,
    });
    return res;
  } catch (error) {
    return error;
  }
};

function* resetPassword({ payload }) {
  const { newPassword, token } = payload;
  try {
    const {
      status,
      data: { message, success },
    } = yield call(resetPasswordAsync, token, newPassword);
    if (status === 200 && success) {
      yield put(resetPasswordSuccess(message));
      window.location.href = '/';
    } else {
      yield put(resetPasswordError(message));
    }
  } catch (error) {
    yield put(resetPasswordError(error));
  }
}

const changePasswordAsync = async (oldPassword, newPassword) => {
  try {
    const res = await API.put('user/password', { oldPassword, newPassword });
    return res;
  } catch (error) {
    return error;
  }
};
function* changePassword({ payload }) {
  const { oldPassword, newPassword } = payload;
  try {
    const {
      status,
      data: { success, message },
    } = yield call(changePasswordAsync, oldPassword, newPassword);
    if (status === 200 && success) {
      yield put(changePasswordSuccess(message));
    } else {
      yield put(changePasswordError(message));
    }
  } catch (error) {
    yield put(changePasswordError(error));
  }
}
export function* watchChangePassword() {
  yield takeLatest(CHANGE_PASSWORD, changePassword);
}

// wish list
const getUserWishListAsync = async () => {
  const res = await API.get('/product/wishlist');
  return res;
};
function* getUserWishList() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getUserWishListAsync);
    if (status === 200) {
      yield put(getUserWishListSuccess(data));
    } else {
      yield put(getUserWIshLIstError('someting went wrong'));
      Notification('error');
    }
  } catch (error) {
    put(getUserWIshLIstError(error));
    Notification('error');
  }
}

export function* watchGetUserWishList() {
  yield takeLatest(GET_WISHLIST_DETAILS, getUserWishList);
}

const addToWishListAsync = async (_id, inWishlist) => {
  let res;
  if (inWishlist) res = await API.put(`/product/wishlist/${_id}`);
  else res = await API.post(`/product/wishlist/${_id}`);
  return res;
};
function* addToWishList({ payload }) {
  const { _id, inWishlist } = payload;
  try {
    const {
      data: { data, message },
      status,
    } = yield call(addToWishListAsync, _id, inWishlist);
    if (status === 200) {
      yield put(addProductToWishListSuccess(data));
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(setAuthPopup(true));
      yield put(addProductToWishListError('add product to wishlist error'));
    }
  } catch (error) {
    Notification('error');
    yield put(addProductToWishListError(error));
  }
}

export function* watchAddToWishList() {
  yield takeLatest(ADD_PRODUCT_TO_WISHLIST, addToWishList);
}

const removeFromWishListAsync = async (_id) => {
  const res = await API.put(`/product/wishlist/${_id}`);
  return res;
};
function* removeFromWishList({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data, message },
      status,
    } = yield call(removeFromWishListAsync, _id);
    if (status === 200) {
      yield put(removeProductToWishListSuccess(data));
      Notification('success', message);
    } else {
      yield put(removeProductToWishListError('add product to wishlist error'));
    }
  } catch (error) {
    yield put(removeProductToWishListError(error));
  }
}

export function* watchRemoveFromWishList() {
  yield takeLatest(DELETE_PRODUCT_FROM_WISHLIST, removeFromWishList);
}

// cart
const AddtoCartAsync = async ({ _id, qty = 1 }) => {
  const res = await API.post(`/user/cart/${_id}`, { qty });

  return res;
};
function* addProductToCart({ payload }) {
  const { data, history } = payload;
  try {
    const {
      data: { data: cartData, message },
      status,
    } = yield call(AddtoCartAsync, data);
    if (status === 200) {
      localStorage.removeItem('order_Details');
      yield put(addToCartSuccess(cartData));
      // yield put(removeProductToWishList(data._id));
      Notification('success', message);
      if (history) history('/user/cart');
    } else {
      console.log('error');
      yield put(setAuthPopup(true));
      yield put(addToCartError(message));
      Notification('error', message);
    }
  } catch (err) {
    yield put(setAuthPopup(true));
    yield put(addToCartError(err));
    Notification('error', err.message);
  }
}
export function* addProductToCartWatch() {
  yield takeLatest(ADD_PRODUCT_TO_CART, addProductToCart);
}
const removeFromCartAsync = async ({ _id }) => {
  const res = await API.delete(`/user/cart/${_id}`);

  return res;
};
function* removeProductFromCart({ payload }) {
  const { data } = payload;
  try {
    const {
      data: { data: cart, message },
      status,
    } = yield call(removeFromCartAsync, data);
    if (status === 200) {
      localStorage.removeItem('order_Details');
      yield put(reomveFromCartSuccess(cart));
      Notification('success', message);
    } else {
      Notification('error', message);
      yield put(reomveFromCartError('something went wrong'));
    }
  } catch (err) {
    yield put(reomveFromCartError(err));
    Notification('error');
  }
}
export function* removeProductFromCartWatch() {
  yield takeLatest(DELETE_PRODUCT_FROM_CART, removeProductFromCart);
}

// address
const getUserAddressAsync = async () => {
  const res = await API.get('/address');
  return res;
};

function* getUserAddress() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getUserAddressAsync);
    if (status === 200) {
      yield put(getUserAddressesSuccess(data || []));
    } else {
      yield put(getUserAddressesError('something went wrong'));
    }
  } catch (err) {
    yield put(getUserAddressesError(err));
  }
}

export function* watchUserAddress() {
  yield takeLatest(GET_USER_ADDRESS, getUserAddress);
}

const createAddressAsync = async (address) => {
  const res = await API.post('/address', address);
  return res;
};
function* createAddress({ payload }) {
  const { address, history } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(createAddressAsync, address);
    if (status === 201) {
      history('/user/address');
      yield put(createUserAddressSuccess(data));
      Notification('success', 'Address Added');
    } else {
      yield put(createUserAddressError('Something went wrong'));
      Notification('error');
    }
  } catch (err) {
    yield put(createUserAddressError(err));
    Notification('error');
  }
}
export function* watchCreateAddress() {
  yield takeLatest(CREATE_USER_ADDRESS, createAddress);
}

const updateAddressAsync = async (address) => {
  const { _id } = address;
  delete address._id;
  const res = await API.put(`/address/${_id}`, address);
  return res;
};
function* updateAddress({ payload }) {
  const { address, history } = payload;
  try {
    console.log('i called?');
    const { status } = yield call(updateAddressAsync, address);
    if (status === 200) {
      if (history) history('/user/address');
      Notification('success', 'Address Updated');
    } else {
      yield put(updateUserAddressError('Something went wrong'));
      Notification('error');
    }
  } catch (err) {
    yield put(updateUserAddressError(err));
    Notification('error');
  }
}
export function* watchUpdateAddress() {
  yield takeLatest(UPDATE_USER_ADDRESS, updateAddress);
}

const getAddressByID = async (_id) => {
  const res = await API.get(`/address/${_id}`);
  return res;
};
function* getAddressById({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(getAddressByID, _id);
    if (status === 200) {
      yield put(getAddressByIdSuccess(data));
    } else {
      yield put(getAddressByIdError('Something went wrong'));
    }
  } catch (err) {
    yield put(getAddressByIdError(err));
  }
}
export function* watchAddressById() {
  yield takeLatest(GET_ADDRESS_BY_ID, getAddressById);
}

const deleteAddressByID = async (_id) => {
  const res = await API.delete(`/address/${_id}`);
  return res;
};
function* deleteAddressById({ payload }) {
  const { _id } = payload;
  try {
    const {
      data: { data, message },
      status,
    } = yield call(deleteAddressByID, _id);
    if (status === 200) {
      yield put(deleteUserAddressSuccess(data));
      Notification('success', message);
    } else {
      yield put(deleteUserAddressError('Something went wrong'));
      Notification('error', message);
    }
  } catch (err) {
    yield put(deleteUserAddressError(err));
    Notification('error');
  }
}
export function* watchDeleteAddress() {
  yield takeLatest(DELETE_USER_ADDRESS, deleteAddressById);
}

const likeDislikeProductReviewAsync = async (_id, liked) => {
  let res = {};
  if (liked) res = await API.post(`/product/${_id}/review/like`);
  else res = await API.post(`/product/${_id}/review/dislike`);
  return res;
};

function* likeDislikeProductReview({ payload }) {
  const { _id, liked } = payload;
  try {
    const {
      data: { message },
      status,
    } = yield call(likeDislikeProductReviewAsync, _id, liked);
    if (status === 200) Notification('success', message);
    else Notification('error', message);
  } catch (err) {
    console.log(err);
  }
}

export function* watchLikeDislikeProductReview() {
  yield takeLatest(LIKE_DISLIKE_PRODUCT_REVIEW, likeDislikeProductReview);
}

const addEditUserReviewAsync = async (review) => {
  const { _id } = review;
  const res = await API.post(`/product/${_id}/reviews`, review);

  return res;
};

function* addEditUserReview({ payload }) {
  const { review, history } = payload;
  try {
    const { status, data } = yield call(addEditUserReviewAsync, review);
    if (status === 201) {
      const {
        data: { message },
      } = data;
      Notification('success', message);
    } else {
      Notification('error', data?.message);
    }
  } catch (error) {
    Notification('error', error.message);
  }
}

export function* watchAddEditUserReview() {
  yield takeLatest(ADD_EDIT_USER_REVIEW, addEditUserReview);
}

// user orders
const getUserOrdersAsync = async () => {
  const res = await API.get('/order/myorders');
  return res;
};

function* getUserOrders() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getUserOrdersAsync);
    if (status === 200) {
      yield put(getUserOrdersSuccess(data));
    } else {
      yield put(getUserOrderError('someting went wrong '));
    }
  } catch (err) {
    yield put(getUserOrderError(err));
  }
}

export function* watchGetUserOrders() {
  yield takeLatest(GET_USER_ORDERS, getUserOrders);
}

const getOrderByIdAsync = async (_id) => {
  const res = await API.get(`/order/${_id}`);
  return res;
};
function* getOrderByID({ payload }) {
  const { _id } = payload;

  try {
    const {
      data: { data },
      status,
    } = yield call(getOrderByIdAsync, _id);
    if (status === 200) {
      yield put(getOrderByIdSuccess(data));
    } else {
      yield put(getOrderByIdError('something went wrong'));
    }
  } catch (err) {
    yield put(getOrderByIdError(err));
  }
}
export function* watchGetOrderByID() {
  yield takeLatest(GET_ORDER_BY_ID, getOrderByID);
}

const updateUserDetailsAsync = async (data) => {
  const res = await API.post('/user/profile', data);
  return res;
};

function* updateUserDetails({ payload }) {
  try {
    const {
      data: { data, message },
      status,
    } = yield call(updateUserDetailsAsync, payload);

    if (status === 200) {
      yield put(updateUserDetailsSuccess(data));
      Notification('success', message);
    } else {
      yield put(updateUserDetailsError('someting went wrong'));
      Notification('error', message);
    }
  } catch (error) {
    yield put(updateUserDetailsError(error));
    Notification('error');
  }
}
export function* watchUpdateUserDetails() {
  yield takeLatest(UPDATE_USER_DETAILS, updateUserDetails);
}

const getBlogsAsync = async () => {
  const res = await API.get('/blog');
  return res;
};

function* getBlogs() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getBlogsAsync);
    if (status === 200) {
      yield put(getBlogSuccess(data));
    } else {
      yield put(getBlogError('something went wrong'));
    }
  } catch (err) {
    yield put(getBlogError(err));
  }
}

export function* watchGetBlogs() {
  yield takeLatest(GET_BLOGS, getBlogs);
}

const getBlogByIdAsync = async (_id) => {
  const res = await API.get(`blog/${_id}`);
  return res;
};

function* getBlogById({ payload }) {
  try {
    const { _id } = payload;
    const {
      data: { data },
      status,
    } = yield call(getBlogByIdAsync, _id);
    if (status === 200) {
      yield put(getBlogByIdSuccess(data));
    } else {
      yield put(getBlogByIdError(status));
    }
  } catch (err) {
    yield put(getBlogByIdError(err));
  }
}

export function* watchGetBlogById() {
  yield takeLatest(GET_BLOG_BY_ID, getBlogById);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
    fork(watchForgotPassword),
    fork(watchResetPassword),
    fork(watchGetUser),
    fork(watchVerifyOtp),
    fork(watchChangePassword),
    fork(watchGetUserWishList),
    fork(addProductToCartWatch),
    fork(watchAddToWishList),
    fork(watchRemoveFromWishList),
    fork(removeProductFromCartWatch),
    fork(watchUserAddress),
    fork(watchCreateAddress),
    fork(watchUpdateAddress),
    fork(watchAddressById),
    fork(watchDeleteAddress),
    fork(watchLikeDislikeProductReview),
    fork(watchGetUserOrders),
    fork(watchGetOrderByID),
    fork(watchAddEditUserReview),
    fork(watchUpdateUserDetails),
    fork(watchGetBlogs),
    fork(watchGetBlogById),
  ]);
}
