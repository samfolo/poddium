import { mountedSetup, findByTestAttr, signUp, expectLengthOf, clickOnARandom } from '../testHelpers';
import App from '../containers/App/App';
import Spotify from '../util/Spotify/Spotify';
import mockResponses from '../util/mockApiResonses';

describe('previewing a podcast', () => {
  let wrapper;
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

  test('a user wants to listen to 30 seconds of a podcast', async () => {
    await signUp(wrapper, user);
    await wrapper.update();

    homeButton = findByTestAttr(wrapper, 'home-navlink');
    findByTestAttr(homeButton, 'component-navlink').at(0).simulate('click', { button: 0 });
    // { button: 0 } is a <NavLink /> check for react-router

    await wrapper.update();
    await wrapper.update();

    await clickOnARandom(wrapper, 'show');
    console.log('finish feature test')
    // console.log(findByTestAttr(wrapper, 'episode-thumbnail').length)
    // await clickOnARandom(wrapper, 'episode-thumbnail'); // click an episode thumbnail
    // console.log(wrapper.debug());
  });
});
