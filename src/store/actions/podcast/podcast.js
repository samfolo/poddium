import * as actionTypes from '../actionTypes';
import Spotify from '../../../util/Spotify/Spotify';

export const loadEpisodes = (show, route) => {
  return async dispatch => {
    try {
      const episodes = await Spotify.getEpisodesFor(show.name, route);
      dispatch(storeEpisodes(episodes, show));
    } catch (err) {
      console.log(err);
    }
  }
}

const storeEpisodes = (episodes, show) => {
  return {
    type: actionTypes.LOAD_EPISODES,
    episodes,
    show,
  }
}

export const clearLoadedShow = () => {
  return {
    type: actionTypes.CLEAR_LOADED_SHOW,
  }
}
