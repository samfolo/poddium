import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../util';

const initialState = {
  loadedShow: false,
  loadedEpisodes: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_EPISODES : return updatedObject(state, { loadedEpisodes: action.episodes, loadedShow: action.show });
    case actionTypes.CLEAR_LOADED_SHOW : return initialState;
    default: return state;
  }
}

export default reducer;
