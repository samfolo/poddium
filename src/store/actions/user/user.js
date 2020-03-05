import * as actionTypes from '../actionTypes';
import axios from '../../../axios-backend';

const persistUser = info => {
  return {
    type: actionTypes.CREATE_USER,
    info,
  }
}

export const createUser = formData => {
  return dispatch => {
    return axios.post('/users/new', formData)
    .then(response => {
      const userInfo = {
        username: response.data.username,
        email: response.data.email,
      }
      dispatch(persistUser(userInfo));
    })
    .catch(err => console.log('Locally Caught Error: ', err));
  }
}

export const invalidSignUp = () => {
  return {
    type: actionTypes.INVALID_SIGNUP,
  }
}

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
  }
}
