import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_USER : 
      console.log('this');
      return {
        ...state,
        user: action.user,
      }
    default: return state;
  }
}

export default reducer;