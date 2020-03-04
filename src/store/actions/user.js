import * as actionTypes from './actionTypes';

export const createUser = info => {
  return {
    type: actionTypes.CREATE_USER,
    info,
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
