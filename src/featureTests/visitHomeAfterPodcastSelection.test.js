import { mountedSetup, findByTestAttr, signUpAndSignIn, expectLengthOf, clickNavLink } from '../testHelpers';
import App from '../containers/App/App';
import Spotify from '../util/Spotify/Spotify';
import mockResponses from '../util/mockApiResonses';

describe('visiting home after podcast selection', () => {
  let wrapper;
  let user;

  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);

    user = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }
    Spotify.search = jest.fn().mockResolvedValue(mockResponses.getGenericPodcasts());
    Spotify.getEpisodesFor = jest.fn().mockResolvedValueOnce(mockResponses.getGenericEpisodes());
  });

  it('takes you back to the home page', async () => {
    await signUpAndSignIn(wrapper, user);

    await clickNavLink(wrapper, 'home');

    const allShows = findByTestAttr(wrapper, 'show');
    const randomIndex = Math.floor(Math.random() * allShows.length);
    const randomShow = allShows.at(randomIndex);
    await randomShow.prop('onClick')();

    await wrapper.update();
    expectLengthOf(wrapper, 'component-podcast-page').toBe(1);

    await clickNavLink(wrapper, 'home');
    expectLengthOf(wrapper, 'component-homepage').toBe(1);
  });
});
