import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let initialState = {
    user: {
      info: {}
    }
  }
  
  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login'], initialState);
  });

  test('a user named Elodie signs up correctly', () => {
    const elodie = {
      username: 'Elodie',
      email: 'elodie@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    signUp(wrapper, elodie);
    const profilePage = findByTestAttr(wrapper, 'component-profile-page');
    expect(profilePage.text()).toContain('Elodie');
  });

  test('a user named Sam signs up correctly', () => {
    const sam = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    signUp(wrapper, sam);
    const profilePage = findByTestAttr(wrapper, 'component-profile-page');
    expect(profilePage.text()).toContain('Sam');
  });

  test('a user named June signs up incorrectly (mismatched passwords)', () => {
    const june = {
      username: 'June',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234ice-cream'
    }

    signUp(wrapper, june);
    const loginPage = findByTestAttr(wrapper, 'component-login-page');
    expect(loginPage.text()).toContain('Invalid Signup');
  });
});
