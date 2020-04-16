import {
  ADD_PROVISION,
  GET_PROVISIONS
   } from '../actions/types';

export default (state = ["feed the cats"], action) => {
  switch (action.type) {
    case ADD_PROVISION:
      return { ...state, action }
    case GET_PROVISIONS:
      return { state }
    default:
      return state;
  }
}