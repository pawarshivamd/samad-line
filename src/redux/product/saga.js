/* eslint-disable no-underscore-dangle */
import API from 'helpers/API';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  GET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  GET_HOMESCREEN_DATA,
} from '../contants';
import {
  addProductSuccess,
  addProductError,
  getProductSuccess,
  getProductsError,
  getSingleProductSuccess,
  getSingleProductError,
  deleteProductSuccess,
  deleteProductError,
  updateProductSuccess,
  updateProductError,
  getHomeScreenDataSuccess,
  getHomeScreenDataError,
} from './actions';

const addProductAsync = async (product) => {
  const res = await API.post('/product', product);
  return res;
};

function* addProductWorker({ payload }) {
  const { product, history } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(addProductAsync, product);
    const { messgae } = data;
    if (status === 201) {
      history('/app/applications/product');
      yield put(addProductSuccess(data));
    } else {
      yield put(addProductSuccess(messgae));
    }
  } catch (error) {
    yield put(addProductError(error));
  }
}

export function* watchAddProduct() {
  yield takeLatest(ADD_PRODUCT, addProductWorker);
}

const getProductAsync = async (payload) => {
  console.log('params', payload);
  const res = await API.get('/product', { params: { ...payload } });
  console.log('params', res);
  return res;
};
function* getProductWorker({ payload }) {
  try {
    const {
      data: { data },
      status,
    } = yield call(getProductAsync, payload);

    const { message } = data;
    if (status === 200 && data) {
      yield put(getProductSuccess(data));
    } else {
      yield put(getProductsError(message));
    }
  } catch (error) {
    yield put(getProductsError('something went wrong'));
  }
}
export function* watchGetProduct() {
  yield takeLatest(GET_PRODUCTS, getProductWorker);
}

const getSingleProductAsync = async (id) => {
  const res = await API.get(`/product/${id}`);
  return res;
};
function* getSingleProductWorker({ payload }) {
  try {
    const {
      data: { data },
      status,
    } = yield call(getSingleProductAsync, payload);
    const { message } = data;
    if (status === 200 && data) {
      yield put(getSingleProductSuccess(data));
    } else {
      yield put(getSingleProductError(message));
    }
  } catch (error) {
    console.log({ error });
    yield put(getSingleProductError('something went wrong'));
  }
}
export function* watchGetSingleProduct() {
  yield takeLatest(GET_SINGLE_PRODUCT, getSingleProductWorker);
}

const updateProductAsync = async (product, _id) => {
  const res = await API.put(`/product/${_id}`, product);
  return res;
};

function* updateProductWorker({ payload }) {
  const { product, history, _id } = payload;
  try {
    const {
      data: { data },
      status,
    } = yield call(updateProductAsync, product, _id);
    const { message } = data;
    if (status === 200) {
      history('/app/applications/product');
      yield put(updateProductSuccess(data));
    } else {
      yield put(updateProductError(message));
    }
  } catch (error) {
    yield put(updateProductError(error));
  }
}
export function* watchUpdateProduct() {
  yield takeLatest(UPDATE_PRODUCT, updateProductWorker);
}

const deleteProductAsync = async (_id) => {
  const res = await API.delete(`/product/${_id}`);
  return res;
};
function* deleteProductWorker({ payload }) {
  const { _id } = payload;
  try {
    const { status, data } = yield call(deleteProductAsync, _id);
    const { message } = data;
    if (status === 200) {
      yield put(deleteProductSuccess(_id));
    } else {
      yield put(deleteProductError(message));
    }
  } catch (error) {
    yield put(deleteProductError(error));
  }
}

export function* watchDeleteProduct() {
  yield takeLatest(DELETE_PRODUCT, deleteProductWorker);
}

const getHomeScreenDataAsync = async () => {
  const res = await API.get('/product/home');
  return res;
};
function* getHomeScreenDataWorker() {
  try {
    const {
      data: { data },
      status,
    } = yield call(getHomeScreenDataAsync);
    if (status === 200) {
      yield put(getHomeScreenDataSuccess(data));
    } else {
      yield put(getHomeScreenDataError('something went wrong'));
    }
  } catch (error) {
    yield put(getHomeScreenDataError(error));
  }
}

export function* watchGetHomeScreenData() {
  yield takeLatest(GET_HOMESCREEN_DATA, getHomeScreenDataWorker);
}

export default function* rootSaga() {
  yield all([
    fork(watchAddProduct),
    fork(watchGetProduct),
    fork(watchGetSingleProduct),
    fork(watchDeleteProduct),
    fork(watchUpdateProduct),
    fork(watchGetHomeScreenData),
  ]);
}
