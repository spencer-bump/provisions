import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import provisionReducer from './provisionReducer';
import authReducer from './authReducer';


export default combineReducers({
  auth: authReducer,
  form: formReducer
});
