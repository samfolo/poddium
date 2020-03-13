import { mountedSetup, findByTestAttr, signUp, fill } from '../testHelpers';
import App from '../containers/App/App';
import Spotify from '../util/Spotify/Spotify';

describe('logging in', () => {
  let wrapper;
  let logOutButton;
  let user;
  let onSignUp;
  let isAuth;

  beforeEach(() => {
    onSignUp = jest.fn(() => {
      console.log('hey')
      isAuth = true;
    });

    wrapper = mountedSetup(App, { onSignUp, isAuth }, ['/login']);
    user = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }
  });

  describe('a valid log-in', () => {
    test('takes a user to their profile page', async () => {
      signUp(wrapper, user)
      await wrapper.update();
      await wrapper.update(); // needs both to log in

      logOutButton = findByTestAttr(wrapper, 'log-out');
      logOutButton.simulate('click');
      
      findByTestAttr(wrapper, 'sign-in').simulate('click');
      
      fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
      fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
      findByTestAttr(wrapper, 'submit-form-auth').simulate('click');

      await wrapper.update();
      await wrapper.update(); // needs both to submit

      expect(window.location.pathname).toEqual('/');
      expect(wrapper.text()).toContain(user.username);
    });
  });
});
