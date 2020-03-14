import { mountedSetup, findByTestAttr, signUp, fill, signUpAndSignIn } from '../testHelpers';
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

    const homeButton = findByTestAttr(wrapper, 'home-navlink');
    findByTestAttr(homeButton, 'component-navlink').at(0).simulate('click', { button: 0 });
    // { button: 0 } is a <NavLink /> check for react-router

    await wrapper.update();
    await wrapper.update();

    console.log(wrapper.debug())
    const allShows = findByTestAttr(wrapper, 'show');
    const randomIndex = Math.floor(Math.random() * allShows.length);
    const randomShow = allShows.at(randomIndex);
    await randomShow.prop('onClick')();
  });
});
