import { mountedSetup, findByTestAttr, signUp, fill, expectLengthOf } from '../testHelpers';
import App from '../containers/App/App';
import Spotify from '../util/Spotify/Spotify';

describe('logging in', () => {
  let wrapper;
  let logOutButton;
  let user;

  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);

    user = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }
  });

  describe('a valid log-in', () => {
    test('takes a user to their profile page', async () => {
      await signUp(wrapper, user)
      await wrapper.update();

      logOutButton = findByTestAttr(wrapper, 'log-out');
      logOutButton.simulate('click');
      
      findByTestAttr(wrapper, 'sign-in').simulate('click');
      
      fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
      fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
      await findByTestAttr(wrapper, 'submit-form-auth').prop('onClick')();

      await wrapper.update();
      await wrapper.update(); // needs both to submit

      expectLengthOf(wrapper, 'component-profile-page').toBe(1);
      expect(wrapper.text()).toContain(user.username);
    });
  });
});
