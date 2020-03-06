import { mountedSetup, findByTestAttr, signUp } from '../testHelpers';
import App from '../containers/App/App';

describe('signing up', () => {
  let wrapper;
  let logOutButton;

  beforeEach(() => {
    wrapper = mountedSetup(App, {}, ['/login']);
    // revisit..
    logOutButton = findByTestAttr(wrapper, 'log-out');
    if (logOutButton.length) logOutButton.simulate('click');
  });
  

  xdescribe('a valid signup', () => {
    const runValidSignupTestWith = async user => {
      signUp(wrapper, user);
      const profilePage = findByTestAttr(wrapper, 'component-profile-page');
      expect(profilePage.text()).toContain(user.username);
    }

    test('a user named Elodie signs up correctly', async () => {
      const elodie = {
        username: 'Elodie',
        email: 'elodie@example.com',
        password: '1234icecream',
        passwordConfirmation: '1234icecream'
      }

      await runValidSignupTestWith(elodie);
    });
  
    test('a user named Sam signs up correctly', async () => {
      const sam = {
        username: 'Sam',
        email: 'sam@example.com',
        password: '1234icecream',
        passwordConfirmation: '1234icecream'
      }

      await runValidSignupTestWith(sam);
    });
  })
  
  describe('an invalid signup', () => {
    const runInvalidSignupTestWith = user => {
      signUp(wrapper, user);
      const loginPage = findByTestAttr(wrapper, 'component-login-page');
      setImmediate(() => {
        expect(loginPage.text()).toContain('Invalid Signup');
      })
    }

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
  
    test('a user named Pete signs up incorrectly (missing username)', () => {
      const pete = {
        username: '',
        email: 'pete@example.com',
        password: '1234icecream',
        passwordConfirmation: '1234icecream'
      }
  
      runInvalidSignupTestWith(pete);
    });

    test('a user named July signs up incorrectly (missing email)', () => {
      const july = {
        username: 'July',
        email: '',
        password: '1234icecream',
        passwordConfirmation: '1234icecream'
      }
  
      runInvalidSignupTestWith(july);
    });

    test('a user named Asa signs up incorrectly (missing password)', () => {
      const asa = {
        username: 'Asa',
        email: 'asa@example.com',
        password: '',
        passwordConfirmation: '1234icecream'
      }
  
      runInvalidSignupTestWith(asa);
    });

    test('a user named Daniel signs up incorrectly (missing password)', () => {
      const daniel = {
        username: 'Daniel',
        email: 'daniel@example.com',
        password: '1234icecream',
        passwordConfirmation: ''
      }
  
      runInvalidSignupTestWith(daniel);
    });
  });
});
