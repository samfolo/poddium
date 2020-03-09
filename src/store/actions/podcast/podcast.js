import * as actionTypes from '../actionTypes';
import Spotify from '../../../util/Spotify/Spotify';

export const loadEpisodes = (searchTerm, route) => {
  return async dispatch => {
    try {
      const episodes = await Spotify.getEpisodesFor(searchTerm, route);
      dispatch(storeEpisodes(episodes));
    } catch (err) {
      console.log(err);
    }
  }
}

const storeEpisodes = episodes => {
  return {
    type: actionTypes.LOAD_EPISODES,
    episodes,
  }
}
