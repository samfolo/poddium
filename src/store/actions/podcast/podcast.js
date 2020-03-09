import * as actionTypes from '../actionTypes';
import Spotify from '../../../util/Spotify/Spotify';

export const loadEpisodes = (showName, route) => {
  return async dispatch => {
    try {
      const episodes = await Spotify.getEpisodesFor(showName, route);
      console.log(episodes)
      dispatch(storeEpisodes(episodes, showName));
    } catch (err) {
      console.log(err);
    }
  }
}

const storeEpisodes = (episodes, showName) => {
  return {
    type: actionTypes.LOAD_EPISODES,
    episodes,
    showName,
  }
}
