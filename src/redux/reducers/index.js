import {combineReducers} from 'redux';
import auth from './auth';
import home from './home';
import product from './product';
import address from './address';
import notification from './notification';
import order from './order';
import subscription from './subscription';

export default combineReducers({
  auth,
  home,
  product,
  address,
  notification,
  order,
  subscription,
});
