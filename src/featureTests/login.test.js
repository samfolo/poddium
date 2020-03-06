import { mountedSetup, findByTestAttr, signUp, fill } from '../testHelpers';
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

  xdescribe('a valid log-in', () => {
    test('seperated for now, to let async functions resolve', async () => {
      signUp(wrapper, user)
    });

    it('takes a user named `Sam` to their profile page', async () => {
      logOutButton = findByTestAttr(wrapper, 'log-out');
      logOutButton.simulate('click');
      
      findByTestAttr(wrapper, 'sign-in').simulate('click');
      
      fill(findByTestAttr(wrapper, 'input-email')).with(user.email || '');
      fill(findByTestAttr(wrapper, 'input-password')).with(user.password || '');
      findByTestAttr(wrapper, 'submit-form-auth').simulate('click');
      const profilePage = findByTestAttr(wrapper, 'component-profile-page');
      expect(profilePage.text()).toContain(user.username);
    });
  });
});
