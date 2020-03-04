import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../util';

const initialState = {
  info: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_USER : return updatedObject(state, { info: action.info });
    default: return state;
  }
}

export default reducer;