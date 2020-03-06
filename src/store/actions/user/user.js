import * as actionTypes from '../actionTypes';
import axios from '../../../axios-backend';

const logInUser = info => {
  return {
    type: actionTypes.LOGIN_USER,
    info,
  }
}

const invalidLogin = () => {
  return {
    type: actionTypes.INVALID_LOGIN,
  }
}

export const invalidSignUp = () => {
  return {
    type: actionTypes.INVALID_SIGNUP,
  }
}

export const createUser = formData => {
  return async dispatch => {
    try {
      const response = await axios.post('/users/new', formData);
      const userInfo = {
        username: response.data.username,
        email: response.data.email,
      };
      dispatch(logInUser(userInfo));
    }
    catch (err) {
      return console.log('Client-side Error: ', err);
    }
  }
}

export const authoriseUser = loginData => {
  return async dispatch => {
    try {
      const response = await axios.post('/sessions/new', loginData);
      if (response.data === 'Invalid Login') {
        dispatch(invalidLogin());
      } else {
        const userInfo = {
          username: response.data.username,
          email: response.data.email,
        }
        dispatch(logInUser(userInfo));
      }
    } catch (err) {
        return console.log('Client-side Error: ', err);
    }
  }
}

export const logOut = () => {
  return {
    type: actionTypes.LOG_OUT,
  }
}
