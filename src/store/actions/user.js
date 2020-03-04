import * as actionTypes from './actionTypes';

export const storeUser = info => {
  return {
    type: actionTypes.STORE_USER,
    info,
  }
}

export const invalidSignUp = () => {
  return {
    type: actionTypes.INVALID_SIGNUP,
  }
}
