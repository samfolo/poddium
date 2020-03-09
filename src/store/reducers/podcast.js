import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../util';

const initialState = {
  loadedShow: false,
  loadedEpisodes: null,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_EPISODES : console.log(action.show); return updatedObject(state, { episodes: action.episodes, showLoaded: action.show });
    default: return state;
  }
}

export default reducer;
