import { mountedSetup, findByTestAttr, signUp, fill, flushPromises } from '../testHelpers';
import App from '../containers/App/App';

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
    test('seperated for now, to let async functions resolve', async () => {
      return Promise.resolve(() => signUp(wrapper, user))
      .then(next => {
        next()
        logOutButton = findByTestAttr(wrapper, 'log-out');
        if (logOutButton.length) logOutButton.simulate('click');
      });
    });

    it('takes a user named `Sam` to the homepage', async () => {
      logOutButton = findByTestAttr(wrapper, 'log-out');
      logOutButton.simulate('click');

      findByTestAttr(wrapper, 'sign-in').simulate('click');
      
      fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
      fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
      findByTestAttr(wrapper, 'submit-form-auth').simulate('click');
    });
  });
});
