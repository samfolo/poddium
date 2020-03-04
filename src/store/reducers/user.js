import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../util';

const initialState = {
  info: null,
  isInvalidSignUp: false,
  isAuthenticated: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER : return updatedObject(state, { info: action.info, isAuthenticated: true });
    case actionTypes.INVALID_SIGNUP : return updatedObject(state, { isInvalidSignUp: true });
    case actionTypes.LOG_OUT : return initialState;
    default: return state;
  }
}

export default reducer;