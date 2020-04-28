import _ from 'lodash';
import {
  CREATE_PROVISION,
  FETCH_PROVISIONS,
  FETCH_PROVISION,
  DELETE_PROVISION,
  EDIT_PROVISION,
  CART_TOTAL
   } from '../actions/types';

// each case returns a new state object
export default (state= {}, action) => {
  switch (action.type) {
    case FETCH_PROVISIONS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_PROVISION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROVISION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROVISION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROVISION:
      return _.omit(state, action.payload);
    case CART_TOTAL:
      return { ...state, cartTotal: action.payload };
    default:
      return state;
  }
}

