import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let initialState = {
    user: {
      info: {}
    }
  }

  // valid details
  const runValidSignupTestWith = user => {
    signUp(wrapper, user);
    const profilePage = findByTestAttr(wrapper, 'component-profile-page');
    expect(profilePage.text()).toContain(user.username);
  }

  // invalid details
  const runInvalidSignupTestWith = user => {
    signUp(wrapper, user);
    const loginPage = findByTestAttr(wrapper, 'component-login-page');
    expect(loginPage.text()).toContain('Invalid Signup');
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

    runValidSignupTestWith(elodie);
  });

  test('a user named Sam signs up correctly', () => {
    const sam = {
      username: 'Sam',
      email: 'sam@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    runValidSignupTestWith(sam);
  });

  test('a user named June signs up incorrectly (mismatched passwords)', () => {
    const june = {
      username: 'June',
      email: 'june@example.com',
      password: '1234icecream',
      passwordConfirmation: '1234ice-cream'
    }

    runInvalidSignupTestWith(june);
  });

  test('a user named Mike signs up incorrectly (invalid email)', () => {
    const mike = {
      username: 'Mike',
      email: 'mike@example..com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    runInvalidSignupTestWith(mike);
  });

  test('a user named Ramon signs up incorrectly (invalid email)', () => {
    const ramon = {
      username: 'Ramon',
      email: 'ramon@example@com',
      password: '1234icecream',
      passwordConfirmation: '1234icecream'
    }

    runInvalidSignupTestWith(ramon);
  });
});
