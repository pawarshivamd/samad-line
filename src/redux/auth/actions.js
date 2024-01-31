import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER_ERROR,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
  GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD,
  USER_AUTH_SUCCESS,
  SET_SEARCH_TEXT,
  GET_WISHLIST_DETAILS,
  GET_WISHLIST_DETAILS_SUCCESS,
  GET_WISHLIST_DETAILS_ERROR,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_WISHLIST,
  ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  ADD_PRODUCT_TO_WISHLIST_ERROR,
  DELETE_PRODUCT_FROM_WISHLIST,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  DELETE_PRODUCT_FROM_CART,
  DELETE_PRODUCT_FROM_CART_ERROR,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  GET_USER_ADDRESS,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_ERROR,
  CREATE_USER_ADDRESS,
  CREATE_USER_ADDRESS_SUCCESS,
  CREATE_USER_ADDRESS_ERROR,
  UPDATE_USER_ADDRESS,
  GET_ADDRESS_BY_ID,
  GET_ADDRESS_BY_ID_SUCCESS,
  GET_ADDRESS_BY_ID_ERROR,
  DELIVER_TO_THIS_ADDRESS,
  DELETE_USER_ADDRESS,
  DELETE_USER_ADDRESS_SUCCESS,
  DELETE_USER_ADDRESS_ERROR,
  SET_AUTH_POPUP,
  SET_SIGNUP_AUTH_POPUP,
  LIKE_DISLIKE_PRODUCT_REVIEW,
  GET_USER_ORDERS,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_ERROR,
  LOG_OUT_USER,
  GET_ORDER_BY_ID,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_ERROR,
  ADD_EDIT_USER_REVIEW,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_ERROR,
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_ERROR,
  GET_BLOG_BY_ID,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_ERROR,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNUP_USER,
  SET_FORGOT_AUTH_POPUP,
  // GET_CART_DETAILS,
} from '../contants';

export const setAuthPopup = (state) => ({
  type: SET_AUTH_POPUP,
  payload: state,
});
export const setSignupAuthPopup = (state) => ({
  type: SET_SIGNUP_AUTH_POPUP,
  payload: state,
});
export const setForgotPopup = (state) => ({
  type: SET_FORGOT_AUTH_POPUP,
  payload: state,
});

export const changeSearchText = (text) => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

export const getUserDetails = (history) => ({
  type: GET_USER_DETAILS,
  payload: { history },
});
export const getUserDetailSuccess = (user) => ({
  type: GET_USER_DETAILS_SUCCESS,
  payload: user,
});
export const getUserDetailsError = (message) => ({
  type: GET_USER_DETAILS_ERROR,
  payload: { message },
});

export const loginUser = (mobileNo) => ({
  type: LOGIN_USER,
  payload: { mobileNo },
});
export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});
export const loginUserError = (message) => ({
  type: LOGIN_USER_ERROR,
  payload: { message },
});

export const verifyOtp = (otpValues, history) => ({
  type: OTP_VERIFY,
  payload: { otpValues, history },
});
export const userSignup = (otpValues, history) => ({
  type: OTP_VERIFY,
  payload: { otpValues, history },
});
export const verifyOtpSuccess = () => ({
  type: OTP_VERIFY_SUCCESS,
});
export const verifyOtpError = (message) => ({
  type: OTP_VERIFY_ERROR,
  payload: { message },
});

export const forgotPassword = (mobileNo, history) => ({
  type: FORGOT_PASSWORD,
  payload: { mobileNo, history },
});
export const forgotPasswordSuccess = (mobileNo) => ({
  type: FORGOT_PASSWORD_SUCCESS,
  payload: mobileNo,
});
export const forgotPasswordError = (message) => ({
  type: FORGOT_PASSWORD_ERROR,
  payload: { message },
});

export const resetPassword = ({ token, newPassword, history }) => ({
  type: RESET_PASSWORD,
  payload: { token, newPassword, history },
});
export const resetPasswordSuccess = (newPassword) => ({
  type: RESET_PASSWORD_SUCCESS,
  payload: { newPassword },
});
export const resetPasswordError = (message) => ({
  type: RESET_PASSWORD_ERROR,
  payload: { message },
});

export const changePassword = (values, history) => ({
  type: CHANGE_PASSWORD,
  payload: { ...values, history },
});
export const changePasswordSuccess = (message) => ({
  type: CHANGE_PASSWORD_SUCCESS,
  payload: { message },
});
export const changePasswordError = (message) => ({
  type: CHANGE_PASSWORD_ERROR,
  payload: { message },
});

export const registerUser = (user, history) => ({
  type: REGISTER_USER,
  payload: { user, history },
});
export const registerUserSuccess = (user) => ({
  type: REGISTER_USER_SUCCESS,
  payload: user,
});
export const registerUserError = (message) => ({
  type: REGISTER_USER_ERROR,
  payload: { message },
});
export const userSignupEmail = (user, history) => ({
  type: SIGNUP_USER,
  payload: { user, history },
});
export const userSignupEmailSuccess = (user) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});
export const userSignupEmailError = (message) => ({
  type: SIGNUP_USER_ERROR,
  payload: { message },
});
export const authSuccess = () => ({
  type: USER_AUTH_SUCCESS,
});
export const logoutUser = (history) => ({
  type: LOGOUT_USER,
  payload: { history },
});

// wishlist
export const getUserWishList = () => ({
  type: GET_WISHLIST_DETAILS,
});
export const getUserWishListSuccess = (list) => ({
  type: GET_WISHLIST_DETAILS_SUCCESS,
  payload: list,
});
export const getUserWIshLIstError = (message) => ({
  type: GET_WISHLIST_DETAILS_ERROR,
  payload: { message },
});

export const addProductToWishList = (_id, inWishlist) => ({
  type: ADD_PRODUCT_TO_WISHLIST,
  payload: { _id, inWishlist },
});
export const addProductToWishListSuccess = (list) => ({
  type: ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  payload: list,
});

export const addProductToWishListError = (message) => ({
  type: ADD_PRODUCT_TO_WISHLIST_ERROR,
  payload: { message },
});

export const removeProductToWishList = (_id) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST,
  payload: { _id },
});
export const removeProductToWishListSuccess = (list) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  payload: list,
});

export const removeProductToWishListError = (message) => ({
  type: DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  payload: { message },
});

// cart
export const addProductToCart = (data, history) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: { data, history },
});

export const addToCartSuccess = (cart) => ({
  type: ADD_PRODUCT_TO_CART_SUCCESS,
  payload: cart,
});
export const addToCartError = (message) => ({
  type: ADD_PRODUCT_TO_CART_ERROR,
  payload: { message },
});

export const reomveProductFromCart = (data) => ({
  type: DELETE_PRODUCT_FROM_CART,
  payload: { data },
});

export const reomveFromCartSuccess = (cart) => ({
  type: DELETE_PRODUCT_FROM_CART_SUCCESS,
  payload: cart,
});
export const reomveFromCartError = (message) => ({
  type: DELETE_PRODUCT_FROM_CART_ERROR,
  payload: { message },
});

// address
export const getUserAddresses = () => ({
  type: GET_USER_ADDRESS,
});
export const getUserAddressesSuccess = (list) => ({
  type: GET_USER_ADDRESS_SUCCESS,
  payload: list,
});
export const getUserAddressesError = (message) => ({
  type: GET_USER_ADDRESS_ERROR,
  payload: { message },
});

export const createUserAddress = (address, history) => ({
  type: CREATE_USER_ADDRESS,
  payload: { address, history },
});
export const createUserAddressSuccess = (data) => ({
  type: CREATE_USER_ADDRESS_SUCCESS,
  payload: data,
});
export const createUserAddressError = (message) => ({
  type: CREATE_USER_ADDRESS_ERROR,
  payload: { message },
});

export const updateUserAddress = (address, history) => ({
  type: UPDATE_USER_ADDRESS,
  payload: { address, history },
});
// export const updateUserAddressSuccess = (data) => ({});
export const updateUserAddressError = (message) => ({
  type: CREATE_USER_ADDRESS_ERROR,
  payload: { message },
});

export const deleteUserAddress = (_id) => ({
  type: DELETE_USER_ADDRESS,
  payload: { _id },
});
export const deleteUserAddressSuccess = (list) => ({
  type: DELETE_USER_ADDRESS_SUCCESS,
  payload: list,
});
export const deleteUserAddressError = (message) => ({
  type: DELETE_USER_ADDRESS_ERROR,
  payload: { message },
});

export const getAddressById = (_id) => ({
  type: GET_ADDRESS_BY_ID,
  payload: { _id },
});
export const getAddressByIdSuccess = (data) => ({
  type: GET_ADDRESS_BY_ID_SUCCESS,
  payload: data,
});
export const getAddressByIdError = (message) => ({
  type: GET_ADDRESS_BY_ID_ERROR,
  payload: { message },
});

export const deliverToThisAddress = (address) => ({
  type: DELIVER_TO_THIS_ADDRESS,
  payload: address,
});

export const likeDislikeProductReview = (_id, liked) => ({
  type: LIKE_DISLIKE_PRODUCT_REVIEW,
  payload: { _id, liked },
});

export const addEditUserReview = (review, history) => ({
  type: ADD_EDIT_USER_REVIEW,
  payload: { review, history },
});

export const getUserOrders = () => ({
  type: GET_USER_ORDERS,
});

export const getUserOrdersSuccess = (list) => ({
  type: GET_USER_ORDERS_SUCCESS,
  payload: list,
});

export const getUserOrderError = (mesage) => ({
  type: GET_USER_ORDERS_ERROR,
  payload: { mesage },
});

export const getOrderById = (_id) => ({
  type: GET_ORDER_BY_ID,
  payload: { _id },
});

export const getOrderByIdSuccess = (data) => ({
  type: GET_ORDER_BY_ID_SUCCESS,
  payload: data,
});

export const getOrderByIdError = (message) => ({
  type: GET_ORDER_BY_ID_ERROR,
  payload: { message },
});

export const logOutUser = () => ({
  type: LOG_OUT_USER,
});

export const updateUserDetails = (data) => ({
  type: UPDATE_USER_DETAILS,
  payload: data,
});

export const updateUserDetailsSuccess = (data) => ({
  type: UPDATE_USER_DETAILS_SUCCESS,
  payload: data,
});

export const updateUserDetailsError = (message) => ({
  type: UPDATE_USER_DETAILS_ERROR,
  payload: { message },
});
// blogs
export const getBlog = (data, history) => ({
  type: GET_BLOGS,
  payload: { data, history },
});
export const getBlogSuccess = (data) => ({
  type: GET_BLOGS_SUCCESS,
  payload: data,
});
export const getBlogError = (message) => ({
  type: GET_BLOGS_ERROR,
  payload: { message },
});
export const getBlogById = (_id) => ({
  type: GET_BLOG_BY_ID,
  payload: { _id },
});
export const getBlogByIdSuccess = (data) => ({
  type: GET_BLOG_BY_ID_SUCCESS,
  payload: data,
});
export const getBlogByIdError = (message) => ({
  type: GET_BLOG_BY_ID_ERROR,
  payload: { message },
});
