import mockdb from '../apis/mockdb';
import history from '../history';
import {
    CREATE_PROVISION,
    FETCH_PROVISIONS,
    FETCH_PROVISION,
    DELETE_PROVISION,
    EDIT_PROVISION,
    SIGN_IN,
    SIGN_OUT
  } from './types';

// long hand form of the following short hand...
// export const createProvision = (formValues) => {
//   return (dispatch) => {

// }

export const createProvision = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await mockdb.post('/provisions', { ...formValues, userId });

  dispatch({ type: CREATE_PROVISION, payload: response.data });
  history.push('/');
};

export const fetchProvisions = () => async dispatch => {
  const response = await mockdb.get('/provisions');

  dispatch({ type: FETCH_PROVISIONS, payload: response.data});
};

export const fetchProvision = (id) => async dispatch => {
  const response = await mockdb.get(`/provisions/${id}`);

  dispatch({ type: FETCH_PROVISION, payload: response.data });
}

// With a PUT: all properties of the record are updated
// With a PATCH: just some of the properties are updated
export const editProvision = (id, formValues) => async (dispatch, getState) => {
  const response = await mockdb.patch(`/provisions/${id}`, formValues);

  dispatch({ type: EDIT_PROVISION, payload: response.data });
  history.push('/');
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