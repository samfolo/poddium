import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('logging out', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);
  });

  describe('a valid signup and logout', () => {
    test('a user named Saul Goodman signs up then logs out', async () => {
      const saulGoodman = {
        username: 'Saul Goodman',
        email: 'saul@example.com',
        password: '1234icecream',
        passwordConfirmation: '1234icecream'
      }

      await signUp(wrapper, saulGoodman)
      
      const logOutButton = findByTestAttr(wrapper, 'log-out');
      logOutButton.simulate('click');

      const logInPage = findByTestAttr(wrapper, 'component-login-page');
      expect(logInPage).toHaveLength(1);
    });
  });
});
