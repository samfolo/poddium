import * as actionTypes from '../actionTypes';
import Spotify from '../../../util/Spotify/Spotify';

export const loadEpisodes = (show, route) => {
  return async dispatch => {
    try {
      const episodes = await Spotify.getEpisodesFor(show.name, route);
      console.log(episodes, show)
      dispatch(storeEpisodes(episodes, show.name));
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
