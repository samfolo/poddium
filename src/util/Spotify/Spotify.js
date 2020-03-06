import { availableMarkets } from '../';

let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) && window.location.href.match(/expires_in=([^&]*)/)) {
      accessToken = window.location.href.match(/access_token=([^&]*)/)[1];
      expiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const redirectURI = 'http://localhost:3000/login';
      window.location = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    }
  },

  search(searchTerm) {
    const headers = { headers: { 'Authorization': `Bearer ${this.getAccessToken()}` } };
    return fetch(`https://api.spotify.com/v1/search?type=show&q=${searchTerm}&market=GB`, headers)
    .then(response => {
      return response.json()
    })
    .then(jsonResponse => {
      console.log(jsonResponse)
      const results = jsonResponse.shows.items.map(show => {
        return ({
          id: show.id,
          name: show.name,
          image: show.images[0],
          description: show.description,
          publisher: show.publisher,
          uri: show.uri
        });
      });
      
      console.log(results);
      
      return results;
    })
    .catch(err => console.log(err)
    );
  },
}

export default Spotify;
