import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const loadEpisodes = id => {
  return async dispatch => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/shows/3GMZiZnqL4Hib6DD5PGhdj/episodes`);
      console.log(response.json())
    } catch (e) {
      console.log(e)
    }
  }
}
