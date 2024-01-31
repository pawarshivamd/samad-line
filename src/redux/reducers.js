import { combineReducers } from 'redux';

import product from './product/reducer';
import offer from './offers/reducer';
import user from './auth/reducer';

const reducers = combineReducers({
  product,
  offer,
  user,
});

export default reducers;
