import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../util';

const initialState = {
  info: null,
  isInvalidSignUp: false,
  isInvalidLogin: false,
  isAuthenticated: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER : return updatedObject(state, { info: action.info, isAuthenticated: true });
    case actionTypes.LOGIN_USER : return updatedObject(state, { info: action.info, isAuthenticated: true, isInvalidLogin: false });
    case actionTypes.INVALID_SIGNUP : return updatedObject(state, { isInvalidSignUp: true });
    case actionTypes.INVALID_LOGIN : return updatedObject(state, { isInvalidLogin: true });
    case actionTypes.LOG_OUT : return initialState;
    default: return state;
  }
}

export default reducer;
