import {
    ADD_PROVISION,
    GET_PROVISIONS,
    SIGN_IN,
    SIGN_OUT
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

export const signIn = () => {
  return {
    type: SIGN_IN
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}