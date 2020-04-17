import { combineReducers } from 'redux';
import provisionReducer from './provisionReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
