import * as actionTypes from './actionTypes';

export const storeUser = user => {
  return {
    type: actionTypes.STORE_USER,
    user
  }
}