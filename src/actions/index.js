import mockdb from '../apis/mockdb';
import {
    CREATE_PROVISION,
    FETCH_PROVISIONS,
    FETCH_PROVISION,
    DELETE_PROVISION,
    EDIT_PROVISION,
    SIGN_IN,
    SIGN_OUT
  } from './types';

// export const createProvision = (formValues) => {
//   return (dispatch) => {

// }

export const createProvision = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await mockdb.post('/provisions', { ...formValues, userId });

  dispatch({ type: CREATE_PROVISION, payload: response.data });
};

export const fetchProvisions = () => async dispatch => {
  const response = await mockdb.get('/provisions');

  dispatch({ type: FETCH_PROVISIONS, payload: response.data});
};

export const fetchProvision = (id) => async dispatch => {
  const response = await mockdb.get(`/provisions/${id}`);

  dispatch({ type: FETCH_PROVISION, payload: response.data });
}

export const editProvision = (id, formValues) => async dispatch => {
  const response = await mockdb.put(`/provisions/${id}`, formValues);

  dispatch({ type: EDIT_PROVISION, payload: response.data });
}

export const deleteProvision = id => async dispatch => {
  await mockdb.delete(`/provision/${id}`);

  dispatch({ type: DELETE_PROVISION, payload: id })
}

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}