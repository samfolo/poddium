import { mountedSetup, findByTestAttr, signUp, expectLengthOf } from '../testHelpers';
import App from '../containers/App/App';
import Spotify from '../util/Spotify/Spotify';
import mockResponses from '../util/mockApiResonses';

describe('selecting a show', () => {
  let wrapper;
  let logOutButton;
  let user;
  let homeButton;

  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);
    user = {
      username: 'Sam',
      email: 'sam@example.co.uk',
      password: '4567icecream',
      passwordConfirmation: '4567icecream',
    }
    Spotify.search = jest.fn().mockResolvedValueOnce(mockResponses.getGenericPodcasts());
    Spotify.getEpisodesFor = jest.fn().mockResolvedValueOnce(mockResponses.getGenericEpisodes());
  });
  
  it("takes the user to the show's page", async () => {
    await signUp(wrapper, user);
    
    homeButton = findByTestAttr(wrapper, 'home-navlink');
    findByTestAttr(homeButton, 'component-navlink').at(0).simulate('click', { button: 0 });

    await wrapper.update();
    await wrapper.update();

    const allShows = findByTestAttr(wrapper, 'show');
    const randomIndex = Math.floor(Math.random() * allShows.length);
    const randomShow = allShows.at(randomIndex);
    await randomShow.prop('onClick')();

    await wrapper.update();
    await wrapper.update();
    
    expectLengthOf(wrapper, 'component-podcast-page').toBe(1);
    expectLengthOf(wrapper, 'episode').toBe(20);
  });
});
