import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import productSagas from './product/saga';
import offerSagas from './offers/saga';

export default function* rootSaga() {
  yield all([authSagas(), productSagas(), offerSagas()]);
}
