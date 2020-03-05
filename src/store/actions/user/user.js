import * as actionTypes from '../actionTypes';
import axios from '../../../axios-backend';

const logInUser = info => {
  return {
    type: actionTypes.LOGIN_USER,
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
      dispatch(logInUser(userInfo));
    })
    .catch(err => console.log('Locally Caught Error: ', err));
  }
}

export const authoriseUser = loginData => {
  return async dispatch => {
    const response = await axios.post('/sessions/new', loginData);
    if (response.status === 200) {
      const userInfo = {
        username: response.data.username,
        email: response.data.email,
      }
      dispatch(logInUser(userInfo));
    }
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
