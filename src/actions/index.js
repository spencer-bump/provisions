import {
    ADD_PROVISION,
    GET_PROVISIONS
  } from './types';

export const addProvision = provision => {
  return {
    type: ADD_PROVISION,
    payload: provision
  }
}

export const getProvisions = () => {
  return {
    type: GET_PROVISIONS
  }
}
