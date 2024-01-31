// import { isAuthGuardActive, currentUser } from 'constants/defaultValues';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  LOGOUT_USER,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  OTP_VERIFY,
  OTP_VERIFY_SUCCESS,
  OTP_VERIFY_ERROR,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS,
  CHANGE_PASSWORD,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  USER_AUTH_SUCCESS,
  SET_SEARCH_TEXT,
  GET_WISHLIST_DETAILS,
  GET_WISHLIST_DETAILS_SUCCESS,
  GET_WISHLIST_DETAILS_ERROR,
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_SUCCESS,
  ADD_PRODUCT_TO_CART_ERROR,
  DELETE_PRODUCT_FROM_WISHLIST_SUCCESS,
  DELETE_PRODUCT_FROM_WISHLIST_ERROR,
  ADD_PRODUCT_TO_WISHLIST_SUCCESS,
  ADD_PRODUCT_TO_WISHLIST_ERROR,
  DELETE_PRODUCT_FROM_CART_ERROR,
  DELETE_PRODUCT_FROM_CART_SUCCESS,
  GET_USER_ADDRESS,
  GET_USER_ADDRESS_SUCCESS,
  GET_USER_ADDRESS_ERROR,
  CREATE_USER_ADDRESS_SUCCESS,
  CREATE_USER_ADDRESS_ERROR,
  GET_ADDRESS_BY_ID,
  GET_ADDRESS_BY_ID_SUCCESS,
  GET_ADDRESS_BY_ID_ERROR,
  DELIVER_TO_THIS_ADDRESS,
  DELETE_USER_ADDRESS_ERROR,
  DELETE_USER_ADDRESS_SUCCESS,
  SET_AUTH_POPUP,
  SET_SIGNUP_AUTH_POPUP,
  SET_FORGOT_AUTH_POPUP,
  GET_USER_ORDERS,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_ERROR,
  LOG_OUT_USER,
  GET_ORDER_BY_ID,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_ERROR,
  DELETE_PRODUCT_FROM_CART,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_ERROR,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_ERROR,
  GET_BLOG_BY_ID_SUCCESS,
  GET_BLOG_BY_ID_ERROR,
  GET_BLOGS,
  GET_BLOG_BY_ID,
} from '../contants';

const INIT_STATE = {
  currentUser: { astName: '', firstName: '', mobileNo: '' },
  forgotUserMail: '',
  newPassword: '',
  resetPasswordCode: '',
  loading: false,
  error: '',
  success: '',
  keyword: '',
  selectedOrder: {},
  wishlist: [],
  addresses: [],
  orders: [],
  blogs: [],
  selectedBlog: { image: { url: '' } },
  selectedAddress: null,
  addressToDeliver: null,
  authPopupState: false,
  signupPopupState: false,
  forgotAuthPop: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_POPUP:
      return {
        ...state,
        authPopupState: action.payload,
      };
    case SET_SIGNUP_AUTH_POPUP:
      return {
        ...state,
        signupPopupState: action.payload,
      };
    case SET_FORGOT_AUTH_POPUP:
      return {
        ...state,
        forgotAuthPop: action.payload,
      };
    case SET_SEARCH_TEXT:
      return { ...state, keyword: action.payload };
    case GET_USER_DETAILS:
      return { ...state, loading: true, error: '' };
    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        addressToDeliver: action.payload.address,
        error: '',
      };
    case GET_USER_DETAILS_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case OTP_VERIFY:
      return { ...state, loading: true, error: '' };
    case OTP_VERIFY_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
      };
    case OTP_VERIFY_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    case FORGOT_PASSWORD:
      return { ...state, loading: true, error: '' };
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        forgotUserMail: action.payload,
        error: '',
      };
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        forgotUserMail: '',
        error: action.payload.message,
      };
    case RESET_PASSWORD:
      return { ...state, loading: true, error: '' };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        newPassword: action.payload,
        resetPasswordCode: '',
        error: '',
      };
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        newPassword: '',
        resetPasswordCode: '',
        error: action.payload.message,
      };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case SIGNUP_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case REGISTER_USER:
      return { ...state, loading: true, error: '' };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        error: '',
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        loading: false,
        currentUser: null,
        error: action.payload.message,
      };
    case CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
        success: '',
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.message,
        error: '',
      };
    case LOGOUT_USER:
      return { ...state, currentUser: null, error: '' };

    case GET_WISHLIST_DETAILS:
      return { ...state, loading: true };
    case GET_WISHLIST_DETAILS_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case GET_WISHLIST_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    // case DELETE_PRODUCT_FROM_WISHLIST:
    //   return { ...state, loading: true };
    case ADD_PRODUCT_TO_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case ADD_PRODUCT_TO_WISHLIST_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case DELETE_PRODUCT_FROM_WISHLIST_SUCCESS:
      return { ...state, wishlist: action.payload, loading: false };
    case DELETE_PRODUCT_FROM_WISHLIST_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case ADD_PRODUCT_TO_CART:
      return { ...state, loading: true };
    case ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: { ...state.currentUser, cart: action.payload },
      };
    case ADD_PRODUCT_TO_CART_ERROR:
      return { ...state, error: action.payload.message, loading: false };
    case DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        loading: true,
      };
    case DELETE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: { ...state.currentUser, cart: action.payload },
      };
    case DELETE_PRODUCT_FROM_CART_ERROR:
      return { ...state, error: action.payload.message };
    case GET_USER_ADDRESS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: action.payload,
        addressToDeliver: action.payload[0],
      };
    case GET_USER_ADDRESS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case CREATE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: [action.payload, ...state.addresses],
      };
    case CREATE_USER_ADDRESS_ERROR:
      return {
        ...state,
        error: action.payload.message,
      };
    case GET_ADDRESS_BY_ID:
      return { ...state, loading: true };
    case GET_ADDRESS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedAddress: action.payload,
      };
    case GET_ADDRESS_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };
    case DELIVER_TO_THIS_ADDRESS:
      return {
        ...state,
        error: action.payload.message,
        addressToDeliver: action.payload,
      };
    case DELETE_USER_ADDRESS_SUCCESS:
      return {
        ...state,
        addresses: action.payload,
      };
    case DELETE_USER_ADDRESS_ERROR:
      return {
        ...state,
        message: action.payload.message,
      };
    case GET_USER_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case GET_USER_ORDERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.message,
      };

    case GET_ORDER_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedOrder: action.payload,
      };
    case GET_ORDER_BY_ID_ERROR:
      return {
        loading: false,
        error: action.payload.message,
      };
    case LOG_OUT_USER: {
      window.localStorage.removeItem('auth_token');
      // Notification('success', 'User Logged out successfully');
      window.location.href = '/';
      return {
        ...state,
        currentUser: null,
      };
    }
    case UPDATE_USER_DETAILS:
      return { ...state };
    case UPDATE_USER_DETAILS_SUCCESS:
      return { ...state, currentUser: action.payload };
    case UPDATE_USER_DETAILS_ERROR:
      return { ...state, error: action.payload.message };
    case GET_BLOGS:
      return { ...state, loading: true };
    case GET_BLOGS_SUCCESS:
      return { ...state, loading: false, blogs: action.payload };
    case GET_BLOGS_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    case GET_BLOG_BY_ID:
      return { ...state, loading: true };
    case GET_BLOG_BY_ID_SUCCESS:
      return { ...state, loading: false, selectedBlog: action.payload };
    case GET_BLOG_BY_ID_ERROR:
      return { ...state, loading: false, error: action.payload.message };
    default:
      return { ...state };
  }
};
