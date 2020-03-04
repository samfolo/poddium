import * as actionTypes from './actionTypes';

export const storeUser = info => {
  return {
    type: actionTypes.STORE_USER,
    info,
  }
}